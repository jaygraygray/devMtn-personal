angular.module('appName').controller('yourStoriesCtrl', 
function($scope, yourStoriesSvc, draftsSvc) {

$scope.editMenu = true;

yourStoriesSvc.getAllDrafts(3).then(function(resp) {
	$scope.drafts = resp
	$scope.numDrafts = resp.length
	for (var i = 0; i < resp.length; i++) {
		$scope.drafts[i][0].numWords = resp[i][0].body.split(" ").length
		
	}
	console.log($scope.drafts)
})

$scope.deleteArticleID
$scope.deleteDraft = function(deleteID) {
	
	return draftsSvc.deleteDraft(deleteID)
}

yourStoriesSvc.getAllPublished(3).then(function(resp) {
	$scope.published = resp
	$scope.numArticles = resp.length;
})


})