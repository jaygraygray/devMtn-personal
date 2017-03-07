angular.module("appName", [])
.directive('headerMenu', function(){
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header.html',
		controller: function($scope, headerSvc) {
			$scope.userMenu = true
			$scope.notificationsMenu = true
			$scope.getNotifcations = headerSvc.getNotifications().then(function(resp){
				$scope.notifications = resp.data
				console.log($scope.notifications[0].date)

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
		templateUrl: '/views/home.html',
		scope: true,
		controller: 'homeCtrl'
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