angular.module('appName').controller('homeCtrl', function($scope, homeSvc) {

$scope.getTags = homeSvc.getUserTags(3).then(function(resp) {
	console.log(resp.data[0].tags)
	$scope.tags = resp.data[0].tags.split(', ')
})

})