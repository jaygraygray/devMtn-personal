angular.module("appName").controller("mainCtrl", function($scope, mainSvc) {
	
$scope.ctrlTest = "Controller is working."
$scope.svcTest = mainSvc.test;

})