angular.module('appName')
.controller('draftCtrl', function($scope, draftsSvc) {


$scope.tags = [];
$scope.showMenu = false;

if (draftsSvc.sendStatus === true) {
	$scope.savedMessage = "sthing worked"
} else {
	$scope.savedMessage = "nothing wrked"
}

var we = draftsSvc.getStatus(draftsSvc.status)
console.log(we)

})