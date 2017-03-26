angular.module('appName')
.controller('articleCtrl', function($stateParams, $scope, $http, articleSvc, $window, $sce) {



articleSvc.getArticle($stateParams.article_id).then(function(resp){

	$scope.articles = resp.data
	$scope.articles[0].id = Number($stateParams.article_id)
	$scope.tags = $scope.articles[0].tags.split(',')
	$scope.articles[0].body = $sce.trustAsHtml($scope.articles[0].body)

})


if ($stateParams.article_id) {
	
	articleSvc.getArticle($stateParams.article_id).then(function(resp){
		console.log($stateParams.article_id)
		$scope.articles = resp.data
		$scope.articles[0].id = Number($stateParams.article_id)
		$scope.tags = $scope.articles[0].tags.split(', ')
		$scope.articles[0].body = $sce.trustAsHtml($scope.articles[0].body)
	})
}

$scope.articleHeight

}).directive('likeArticle', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/like-article.html',
		scope: {
			id: '@',
			articles: "@",
		},
		controller: function($scope, articleSvc, userSvc) {
			let articles = JSON.parse($scope.articles)
			userSvc.getArticleLikes(3).then(function(resp) {
				return resp.data[0]
			}).then(function(userArticlesResults) {

			var articlesLiked = userArticlesResults.articles_liked.split(',').map(Number)
			
			for (let i = 0; i < articles.length; i++) {

				if ($scope.id == articles[i].id) {
					$scope.articleSnippet = articles[i]
					$scope.articleSnippet.userLikedarticle
				}

				if (articles.indexOf($scope.articles[i].id) === -1) {
					if ($scope.articleSnippet) { $scope.articleSnippet.userLikedarticle = false }
					$scope.articles[i].userLikedArticle = false
				} else {
					if ($scope.articleSnippet) { $scope.articleSnippet.userLikedarticle = true }
					$scope.articles[i].userLikedArticle = true
				}
			}
			})
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
	}
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
		controller: function($scope, articleSvc, userSvc) {
			
			let articles = JSON.parse($scope.articles)
			userSvc.getArticleLikes(3).then(function(resp) {
				return resp.data[0]
			}).then(function(userArticlesResults) {

			var bookmarks = userArticlesResults.bookmarks_list.split(',').map(Number)
			
			for (let i = 0; i < articles.length; i++) {

				if ($scope.id == articles[i].id) {
					$scope.bookmarkSnippet = articles[i]
					$scope.bookmarkSnippet.userBookMarkedarticle
				}
				if (bookmarks.indexOf(articles[i].id) === -1) {
					if ($scope.bookmarkSnippet) {$scope.bookmarkSnippet.userBookmarkedArticle = false}
						$scope.articles[i].userBookmarkedArticle = false
				} else {
					if ($scope.bookmarkSnippet) {$scope.bookmarkSnippet.userBookmarkedArticle = true}
						$scope.articles[i].userBookmarkedArticle = true
				}	
			}

			})
	
			$scope.bookmarkArticle = function(id) {
				console.log(id)
				for (let i = 0; i < articles.length; i++) {

					if (articles[i].id == id) {
						//change button styles
						articles[i].userBookmarkedArticle = ! articles[i].userBookmarkedArticle
						
						//if the user clicks an unliked article, create notification
						if (articles[i].userBookmarkedArticle === true || $scope.bookmarkSnippet === true) {
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
		controller : function($scope, articleSvc, userSvc, $stateParams, $sce) {
			//$scope.text = command issued on backend
			// headline = most recent
			// all = every story
			// likes = specific likes
			// bookmarks
							// if ($stateParams) {
							// 	console.log($stateParams)
							// 	$scope.text = 'tags' + $stateParams.tag
							// }
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
					//get word count
					$scope.articles[i].wordcount
					$scope.articles[i].wordcount = $scope.articles[i].body.split(' ').length
				

					//label body of article as safe to display HTML
					$scope.articles[i].body = $sce.trustAsHtml($scope.articles[i].body)

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

}).directive('bodyHeight', ['articleSvc', function(articleSvc) {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            scope.articleHeight = element[0].offsetHeight;
            console.log("SVC ele height:",  scope.articleHeight )
            console.log('DIR ele height:', element[0].offsetHeight)
        },
    }
}])
.directive('menuScroll', function(articleSvc, $window) {
	var win = angular.element($window)
	return {
		restrict: 'AE',
		link: function(scope, ele, attrs) {

			var offsetTop = ele.prop('offsetTop') - 150
			var otherOffset = offsetTop + scope.articleHeight + 450
			console.log(otherOffset)
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= offsetTop) ? 'addClass' : 'removeClass']('showMenu');
			});	
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= otherOffset) ? 'removeClass' : 'addClass']('showMenu')	
			});


		}
	}
}).filter ('wordCount', function() {
	return function(input, count) {
		var words = input.split(/\s+/);
		if (words.length > words) {
			input = words.slice(0, words).join(' ') + '\u2026'
		}
	}
	return input
})



