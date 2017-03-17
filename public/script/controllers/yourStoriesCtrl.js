angular.module('appName').controller('yourStoriesCtrl', 
function($scope, yourStoriesSvc) {

$scope.editMenu = true;

yourStoriesSvc.getAllDrafts(3).then(function(resp) {
	
	$scope.drafts = resp
	$scope.numDrafts = resp.length
	
})



})