angular.module("appName", [])
.directive('headerMenu', function(){
	return {
		restrict: 'AE',
		templateUrl: '/views/directives/header.html',
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