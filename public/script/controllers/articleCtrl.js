angular.module('appName')
.controller('articleCtrl', function($stateParams, $scope, $http, articleSvc, $window) {


articleSvc.getArticle($stateParams.article_id).then(function(resp){
	console.log($stateParams.article_id)

	$scope.articles = resp.data
	console.log($scope.articles)
	$scope.articles[0].id = Number($stateParams.article_id)
	$scope.test = "test"


//	$scope.tags = $scope.article.tags.split(',')

})


}).directive('storyView', function() {
	return {
		restrict : 'AE',
		scope: true,
		templateUrl: '/views/directives/author-bio.html',
		controller: function($scope, articleSvc, $stateParams) {

			// articleSvc.getArticle($stateParams.article_id).then(function(resp){
			// 	console.log($scope.articles)
			// 	$scope.articles = resp.data[0];
			// 	$scope.articles.wordcount = resp.data[0].body.split(' ').length;
			// 	$scope.tags = $scope.articles.tags.split(',')

			// })
		}
	}

}).directive('likeArticle', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/like-article.html',
		// require: '^listArticles', 
		// require: '^authorBio',
		scope: {
			id: '@',
			articles: "@",
		},
		controller: function($scope, articleSvc) {
			let articles = JSON.parse($scope.articles)

			for (let i = 0; i < articles.length; i++) {
					console.log("scope", $scope.id)
					console.log("articleid", articles[i].id)
				if ($scope.id == articles[i].id) {
					console.log("work plz")
					$scope.articleSnippet = articles[i]
				}
			}
			$scope.likeArticleFunc = function(id) {
				console.log(id)
				for (let i = 0; i < articles.length; i++) {
				if (articles[i].id == id) {
					//change button styles
					articles[i].userLikedArticle = ! articles[i].userLikedArticle
					//if the user clicks an unliked article, create notification
					if (articles[i].userLikedArticle === true) {
						articles[i].likes++;
						var obj = {
							article_id_array : ',' + id,
							article_id_just_int : id,
							user_id : 3,
							user_id_notified: articles[i].author_id,
							action: "L",
							date : new Date(),
							article_boolean : true,
							response_boolean: false,
							self_boolean: false
						}
						articleSvc.createNotification(obj)
						// if use clicks an already liked article, remove like from their list
					} else {
						var deleteObj = {
							user_id : 3,
							unliked_id : ',' + articles[i].id
						}
						articles[i].likes--
						articleSvc.unlikeArticle(deleteObj)
					}	
				}
			}
		}			
		},	
	}
}).directive('bookmarkArticle', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/bookmark-article.html',
		require: '^listArticles',
		scope: {
			id: '@',
			articles: "@"
		},
		controller: function($scope, articleSvc) {
			let articles = JSON.parse($scope.articles)
			for (let i = 0; i < articles.length; i++) {
				if ($scope.id == articles[i].id) {
					$scope.bookmarkSnippet = articles[i]
				}
			}
			$scope.bookmarkArticle = function(id) {
				console.log(id)
				for (let i = 0; i < articles.length; i++) {
					if (articles[i].id == id) {
						//change button styles
						articles[i].userBookmarkedArticle = ! articles[i].userBookmarkedArticle
						//if the user clicks an unliked article, create notification
						if (articles[i].userBookmarkedArticle === true) {
							articles[i].likes++;
							var obj = {
								article_id_array : ',' + id,
								article_id_just_int : id,
								user_id : 3,
								user_id_notified: articles[i].author_id,
								action: "B",
								date : new Date(),
								article_boolean : true,
								response_boolean: false,
								self_boolean: false
							}
							articleSvc.createNotification(obj)
							// if use clicks an already liked article, remove like from their list
						} else {
							var deleteObj = {
								user_id : 3,
								unliked_id : ','+ articles[i].id
							}
							articleSvc.unbookmarkArticle(deleteObj)
						}	
					}
				}	
			}	
		}
	}

}).directive('listArticles', function() {
	return {
		restrict: 'E',
		scope: {
			text: '@'
		},
		transclude: true,
		templateUrl: '/views/directives/story-holder.html',
		controller : function($scope, articleSvc, userSvc, $stateParams) {


			//grab article IDs user has liked
			userSvc.getArticleLikes(3).then(function(resp) {
				
				return resp.data[0]
			}).then(function(userArticlesResults) {
			//get the headline info for articles according to $scope.text input
			articleSvc.getHeadlines($scope.text).then(function(resp) {
				$scope.articles = resp.data
					//check to see if article ID is present in the user's liked list
					var articles = userArticlesResults.articles_liked.split(',').map(Number)
					var bookmarks = userArticlesResults.bookmarks_list.split(',').map(Number)
				//loop through all results to see if user has liked each specific article
				for (let i = 0; i < $scope.articles.length; i++) {
					//add userLikedProperty
					$scope.articles[i].userLikedArticle
					$scope.articles[i].userBookmarkedArticle

					
					if (articles.indexOf($scope.articles[i].id) === -1) {
						$scope.articles[i].userLikedArticle = false
					} else {
						$scope.articles[i].userLikedArticle = true
					}
					
					//check to see if article ID is present in bookmarks list
					if (bookmarks.indexOf($scope.articles[i].id) === -1) {
						$scope.articles[i].userBookmarkedArticle = false
					} else {
						$scope.articles[i].userBookmarkedArticle = true
					}	
				}
				this.data = resp.data
				
			})
		})
		}

	};

})
.directive('menuScroll', function(articleSvc, $window) {
	var win = angular.element($window)
	return {
		restrict: 'AE',
		link: function(scope, ele, attrs) {
			console.log(articleSvc.articleHeight)
			var offsetTop = ele.prop('offsetTop') - 150
			var otherOffset = offsetTop + articleSvc.articleHeight - 450
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= offsetTop) ? 'addClass' : 'removeClass']('showMenu');
			});	
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= otherOffset) ? 'removeClass' : 'addClass']('showMenu')	
			});


		}
	}
})
.directive('bodyHeight', ['articleSvc', function(articleSvc) {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            articleSvc.articleHeight = element[0].offsetHeight;
        },
    }
}])


