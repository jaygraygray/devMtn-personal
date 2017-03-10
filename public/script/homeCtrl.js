angular.module('appName').controller('homeCtrl', function($scope, homeSvc, articleSvc, userSvc) {

	var userID = 3
	//takes user ID as parameter
	homeSvc.getUserTags(userID).then(function(resp) {
		$scope.tags = resp.data[0].tags.split(', ')
	})



	$scope.bookmarkArticle = function bookmarkArticle (id) {
		$scope.isBookmarkActive = !$scope.isBookmarkActive
		if ($scope.isBookmarkActive === true) {
			var obj = {
				article_id_array : ',' + $scope.article.id,
				article_id_just_int : $scope.article.id,
				user_id : userID,
				user_id_notified: $scope.article.author_id,
				action: "B",
				date : new Date(),
				article_boolean : true,
				response_boolean: false,
				self_boolean: false
			}
			articleSvc.likedArticle(obj).then(function(resp) {
				console.log("Bookmarked!")
			})
		}
	}


	
}).directive('sideMenu', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/home.html',
		scope: true,
		controller: 'homeCtrl'
	}
}).directive('storyHolder', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/story-holder.html'
	}
}).directive('suggestWriters', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/suggest-writers.html'
	}
}).directive('listArticles', function() {
	return {
		restrict: 'E',
		scope: {
			text: '@',
			likeArticle : '&'
		},
		templateUrl: '/views/directives/story-holder.html',
		controller : function($scope, articleSvc, userSvc) {
			//grab article IDs user has liked
			userSvc.getUserArticleLikes(3).then(function(resp) {
				return resp.data[0].articles_liked
			}).then(function(userArticlesLikedResult) {
			//get the headline info for articles according to $scope.text input
			articleSvc.getHeadlines($scope.text).then(function(resp) {
				$scope.articles = resp.data

				//loop through all results to see if user has liked each specific article
				for (let i = 0; i < $scope.articles.length; i++) {
					//add userLikedProperty
					$scope.articles[i].userLikedArticle
					$scope.articles[i].position = i
					//check to see if article ID is present in the user's liked list
					if (userArticlesLikedResult.indexOf($scope.articles[i].id) == -1) {
						$scope.articles[i].userLikedArticle = false
					} else {
						$scope.articles[i].userLikedArticle = true
					}
					console.log("Has user liked article " + $scope.articles[i].id + 
						": " +$scope.articles[i].userLikedArticle)

				}
				return $scope.articles
			}).then(function(articles) {
			$scope.likeArticle = function (id) {
				for (let i = 0; i < articles.length; i++) {
					if (articles[i].id == id) {
						$scope.articles[i].userLikedArticle = ! $scope.articles[i].userLikedArticle
						if ($scope.articles[i].userLikedArticle === true) {
							$scope.articles[i].likes++;
							var obj = {
								article_id_array : ',' + id,
								article_id_just_int : id,
								user_id : 3,
								user_id_notified: $scope.articles[i].author_id,
								action: "L",
								date : new Date(),
								article_boolean : true,
								response_boolean: false,
								self_boolean: false
							}
							articleSvc.likedArticle(obj)

						}		
					}
				}	
				}
			})	
		})
		}

	};
})