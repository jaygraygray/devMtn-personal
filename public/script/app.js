angular.module("appName", [])
.directive('headerMenu', function(){
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header.html',
		controller: function($scope, headerSvc) {
			$scope.getNotifcations = headerSvc.getNotifications().then(function(resp){
				$scope.notifications = resp.data
				console.log($scope.notifications)
				var responses = [];
				var articles = [];
				
				for (var i = 0; i < $scope.notifications.length; i++) {
	
					for (var prop in $scope.notifications[i]) {

						// Create proper textual responses
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

					}
						//Determine if a RESPONSE or an ARTICLE was the target of a notification
						//by checking first letter 
						if ($scope.notifications[i].action_on.slice(0,1) === 'r') {
							responses.push($scope.notifications[i].action_on.slice(2,3))
						}
						if ($scope.notifications[i].action_on.slice(0,1) === 'a') {
							articles.push($scope.notifications[i].action_on.slice(2,3))
						}
					}
					//remove duplicates
					articles = articles.filter(function(item, pos) {
						return articles.indexOf(item) == pos
					})
					
					//retrieve title for each ID
					for (var q = 0; q < articles.length; q++)
					$scope.getArticleTitle = headerSvc.getArticleTitle(articles[q]).then(function(resp) {
						
						$scope.notifications.push(resp.data[q-1].title)
						console.log($scope.notifications)
					})

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