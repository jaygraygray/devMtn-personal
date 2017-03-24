angular.module('appName').controller('tagsCtrl', function($scope, $stateParams) {
	console.log($stateParams)
	$scope.cmd = 'tags/	'+$stateParams.tag
})