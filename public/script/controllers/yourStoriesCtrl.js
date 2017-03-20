angular.module('appName').controller('yourStoriesCtrl', 
function($scope, yourStoriesSvc, draftsSvc) {

$scope.editMenu = true;

yourStoriesSvc.getAllDrafts(3).then(function(resp) {
	
	$scope.drafts = resp
	$scope.numDrafts = resp.length
	
})

$scope.deleteArticleID
$scope.deleteDraft = function(deleteID) {
	
	return draftsSvc.deleteDraft(deleteID)
}


})