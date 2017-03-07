angular.module("appName", [])
.directive('headerMenu', function(){
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header.html',
		controller: function($scope, headerSvc) {
			$scope.getNotifcations = headerSvc.getNotifications().then(function(resp){
				$scope.notifications = resp.data
				console.log($scope.notifications)

				for (var i = 0; i < $scope.notifications.length; i++) {
					for (var prop in $scope.notifications[i]) {

						switch($scope.notifications[i].action) {
							case 'l':
							$scope.notifications[i].action = 'liked';
							break;
							case 'b':
							$scope.notifications[i].action = 'bookmarked';
							break;
							case 'f':
							$scope.notifications[i].action = 'followed';
							break;
							case 's':
							$scope.notifications[i].action = 'shared';
							break;
							case 'r':
							$scope.notifications[i].action = 'responded';
							break;
						}

						// if ($scope.notifications[i].action === 'l') {
						// 	$scope.notifications[i].action = 'liked'
						// 	console.log("This is entry " + i + ": " + $scope.notifications[i])
						// }
					}

					$scope.getUserNames = headerSvc.getUserNames($scope.notifications[i].action_by_userid)
					.then(function(resp) {
						console.log("ERROR??" + resp)
					})
				}
// action:"l"
// action_by_userid:6
// action_on:"r_1"
// date:"2013-08-26T06:00:00.000Z"
// notification_id:18
// user_id:3
			})
			
		}
	}
}).directive('makeTagsSticky', function($window) {
	var win = angular.element($window)
	return {
		restrict: 'AE',
		link: function(scope, ele, attrs) {
			var topClass = attrs.makeTagsSticky
			var offsetTop = ele.prop('offsetTop') + 70;
			console.log($window.pageYOffset)
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= offsetTop) ? 'addClass' : 'removeClass']('no-moving-for-you');
			});
		}
	}
//})
// .directive('profileMenu', function() {
// 	return {
// 		restrict: 'AE',
// 		template: '<img src="/images/profile.png" class="profile-picture">',
// 		link: function(scope, ele, attr) {
// 			ele.on("click", function() {
				
// 			})
// 		}
// 	}
}).directive('sideMenu', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/home.html'
	}
}).directive('storyHolder', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/story-holder.html'
	}
}).directive('suggestWriters', function() {
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/suggest-writers.html'
	}
});