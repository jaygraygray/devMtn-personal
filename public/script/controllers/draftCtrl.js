angular.module('appName')
.controller('draftCtrl', function($scope, $rootScope, draftsSvc, headerSvc) {


$scope.tags = [{'text':''}];
$scope.showMenu = false;

// draftsSvc.getTags($scope.tags)

$scope.publishMenu = true
$scope.dotMenu = true
$scope.search = true
$scope.userMenu = true
$scope.notificationsMenu = true

$scope.getNotifcations = headerSvc.getNotifications().then(function(resp){
	$scope.notifications = resp.data

	for (var i = 0; i < $scope.notifications.length; i++) {
		
		$scope.notifications[i].title = ''

		for (var prop in $scope.notifications[i]) {

			// Create proper textual responses
			switch($scope.notifications[i].action) {
				case 'l':
				$scope.notifications[i].action = 'liked your';
				break;
				case 'b':
				$scope.notifications[i].action = 'bookmarked your';
				break;
				case 'f':
				$scope.notifications[i].action = 'followed you';
				break;
				case 's':
				$scope.notifications[i].action = 'shared your';
				break;
				case 'r':
				$scope.notifications[i].action = 'responded to';
				break;
			}
		}

		//When using asynch calls within a loop
		//you need to use a closure to capute the value of i at each iteration
		if ($scope.notifications[i].article === true) {
			(function(i) {
				headerSvc.getArticleTitle($scope.notifications[i].action_on_id)
				.then(function(resp) {
					$scope.notifications[i].title = ' your article ' + resp.data[0].title
				})
			})(i);	
		}

		if ($scope.notifications[i].response === true) {
			(function(i) {
				headerSvc.getArticleTitleByResponse($scope.notifications[i].action_on_id)
				.then(function(resp) {
					$scope.notifications[i].title = resp.data[0].title
				})
			})(i);
		}
	}
})

}).directive('headerMenuForWriting', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header-for-writing.html',
		controller: 'draftCtrl'	
	}

})