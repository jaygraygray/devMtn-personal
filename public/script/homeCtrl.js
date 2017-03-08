angular.module('appName').controller('homeCtrl', function($scope, homeSvc) {

	//takes user ID as parameter
	homeSvc.getUserTags(3).then(function(resp) {
		$scope.tags = resp.data[0].tags.split(', ')
	})

	//gets headline info
	homeSvc.getHeadline().then(function(resp) {
		$scope.article = resp.data[0]

		$scope.isActive = false
		$scope.likeArticle = function() {
			$scope.isActive = !$scope.isActive
			if ($scope.isActive === true) {
				$scope.article.likes++;
				var obj = {
					article_id : $scope.article.id,
					user_id : 3,
					user_id_notified: $scope.article.author_id,
					action: "L",
					date : new Date(),
					article_boolean : true,
					response_boolean: false,
					self_boolean: false
				}
				homeSvc.likedArticle(obj).then(function(resp) {
					console.log("Liked!")
				})
		}
	}
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
		scope: {
			clicked : '&'
		},
		templateUrl: '/views/directives/story-holder.html',
		controller : 'homeCtrl'
	}
})