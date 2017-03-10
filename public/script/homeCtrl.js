angular.module('appName').controller('homeCtrl', function($scope, homeSvc, articleSvc, userSvc) {

	//takes user ID as parameter
	homeSvc.getUserTags(3).then(function(resp) {
		$scope.tags = resp.data[0].tags.split(', ')
	})

	userSvc.getUserArticleLikes(3).then(function(resp) {
		$scope.userLikes = resp.data;
		console.log($scope.userLikes)
	})

	$scope.likeArticle = function likeArticle () {
		$scope.isLikeActive = !$scope.isLikeActive
		//console.log($scope.article.length)

		for (let i = 0; i < $scope.articles.length; i++) {

			if ($scope.isLikeActive === true) {
				$scope.articles[i].likes++;
				var obj = {
					article_id_array : ',' + $scope.articles[i].id,
					article_id_just_int : $scope.articles[i].id,
					user_id : 3,
					user_id_notified: $scope.articles[i].author_id,
					action: "L",
					date : new Date(),
					article_boolean : true,
					response_boolean: false,
					self_boolean: false
				}
				articleSvc.likedArticle(obj)
				// .then(function(resp) {
				// 	console.log("Liked article " + $scope.articles[i].id)
				// })
			}
		}
	}

	$scope.bookmarkArticle = function bookmarkArticle (id) {
		$scope.isBookmarkActive = !$scope.isBookmarkActive
		if ($scope.isBookmarkActive === true) {
			var obj = {
				article_id_array : ',' + $scope.article.id,
				article_id_just_int : $scope.article.id,
				user_id : 3,
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

	articleSvc.getHeadlines("mostRecent").then(function(resp) {
		$scope.articles = resp.data
		$scope.isLikeActive = false
		$scope.isBookmarkActive = false

})
	


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
}).directive('headline', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/story-holder.html',
		controller: 'homeCtrl'
		}

}).directive('listArticles', function() {
	return {
		restrict: 'E',
		scope: {
			text: '@',
		},
		templateUrl: '/views/directives/story-holder.html',
		controller : function($scope, articleSvc) {
			articleSvc.getHeadlines($scope.text).then(function(resp) {
				console.log($scope)
				$scope.articles = resp.data
			})
			$scope.likeArticle = function likeArticle () {
				$scope.isLikeActive = !$scope.isLikeActive


				for (let i = 0; i < $scope.articles.length; i++) {

					if ($scope.isLikeActive === true) {
						$scope.articles[i].likes++;
						var obj = {
							article_id_array : ',' + $scope.articles[i].id,
							article_id_just_int : $scope.articles[i].id,
							user_id : 3,
							user_id_notified: $scope.articles[i].author_id,
							action: "L",
							date : new Date(),
							article_boolean : true,
							response_boolean: false,
							self_boolean: false
						}
						articleSvc.likedArticle(obj).then(function(resp) {
							console.log("Liked article " + $scope.articles[i].id)
						})
					}
				}
			}
		}

	};
})