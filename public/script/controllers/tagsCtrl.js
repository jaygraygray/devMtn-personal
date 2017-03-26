angular.module('appName').controller('tagsCtrl', function($scope) {

}).directive('listByTags', function() {
	return {
		restrict: 'E',
		scope: {
			tag: '@'
		},
		transclude: true,
		templateUrl: '/views/directives/story-holder.html',
		templateUrl: '/views/directives/story-holder.html',
		controller : function($scope, articleSvc, userSvc, $stateParams) {
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
			articleSvc.getHeadlinesByTags($stateParams.tag).then(function(resp) {
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