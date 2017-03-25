angular.module('appName')
.controller('homeCtrl', function($scope, homeSvc, articleSvc, userSvc) {
var userID = 2
//takes user ID as parameter
homeSvc.getUserTags(userID).then(function(resp) {
	$scope.tags = resp.data[0].tags.split(', ')
})

}).directive('sideMenu', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/home.html',
		scope: true,
		controller: 'homeCtrl'
	}
}).directive('suggestWriters', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/suggest-writers.html'
	}
})



