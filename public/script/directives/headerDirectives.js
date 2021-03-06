angular.module("appName")
.directive('headerMenu', function(){
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '/views/directives/header.html',
		controller: function($scope, headerSvc) {
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
							case 'L':
							$scope.notifications[i].action = 'liked your ';
							break;
							case 'B':
							$scope.notifications[i].action = 'bookmarked your';
							break;
							case 'F':
							$scope.notifications[i].action = 'followed you';
							break;
							case 'S':
							$scope.notifications[i].action = 'shared your';
							break;
							case 'S':
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
		}
	}
})
.directive('homeMenu', function(){
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '/views/directives/home-header.html',
		controller: function($scope, headerSvc) {
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
							case 'L':
							$scope.notifications[i].action = 'liked your ';
							break;
							case 'B':
							$scope.notifications[i].action = 'bookmarked your';
							break;
							case 'B':
							$scope.notifications[i].action = 'followed you';
							break;
							case 'S':
							$scope.notifications[i].action = 'shared your';
							break;
							case 'R':
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
		}
	}
})
.directive('headerMenuForWriting', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header-for-writing.html',
		controller: 'draftCtrl'	
	}

})
.directive('makeTagsSticky', function($window) {
	var win = angular.element($window)
	return {
		restrict: 'AE',
		link: function(scope, ele, attrs) {
			var topClass = attrs.makeTagsSticky
			var offsetTop = ele.prop('offsetTop') + 70;
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= offsetTop) ? 'addClass' : 'removeClass']('no-moving-for-you');
			});
		}
	}
})