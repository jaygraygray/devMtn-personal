angular.module('appName').controller('homeCtrl', function($scope, homeSvc) {

	//takes user ID as parameter
	homeSvc.getUserTags(3).then(function(resp) {
		$scope.tags = resp.data[0].tags.split(', ')
	})

	//gets headline info
	homeSvc.getHeadline().then(function(resp) {
		$scope.headline = resp.data[0]

		//uses results of that to create notification
		//needs to be invokable, not like this
		// homeSvc.likedArticle(obj).then(function(resp) {
		// 	$scope.likedArticle = resp.data[0]
		// })


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
			getHeadline : '&'
		},
		templateUrl: '/views/directives/story-holder.html',
		controller : 'homeCtrl'
	}
})