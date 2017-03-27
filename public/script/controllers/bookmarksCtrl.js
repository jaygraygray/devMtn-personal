angular.module('appName').controller('bookmarksCtrl', function($scope, $stateParams) {


}).directive('listByBookmarks', function() {
	return {
		restrict: 'E',
		scope: {
			tag: '@'
		},
		transclude: true,
		templateUrl: '/views/directives/bookmarks-holder.html',
		controller : function($scope, articleSvc, userSvc, $stateParams) {
			//grab article IDs user has liked
			userSvc.getArticleLikes(3).then(function(resp) {
				
				return resp.data[0]
			}).then(function(userArticlesResults) {

							
			//get the headline info for articles according to $scope.text input
			articleSvc.getBookmarks(3).then(function(resp) {
				$scope.articles = resp.data
				console.log($scope.articles)
				// for (var i = 0; i < $scope.articles.length; i++) {
				// 	if ($scope.articles[i] === null) {
				// 		$scope.articles.splice(i,1)

				// 	}
				// }
				console.log($scope.articles)
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

