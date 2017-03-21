angular.module('appName')
.controller('articleCtrl', function($scope, $http, articleSvc, $window) {





})
.directive('menuScroll', function(articleSvc, $window) {
	var win = angular.element($window)
	return {
		restrict: 'AE',
		link: function(scope, ele, attrs) {
			console.log(articleSvc.articleHeight)
			var offsetTop = ele.prop('offsetTop') - 150
			var otherOffset = offsetTop + articleSvc.articleHeight - 450
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= offsetTop) ? 'addClass' : 'removeClass']('showMenu');
			});	
			win.on('scroll', function(e) {
				ele[($window.pageYOffset >= otherOffset) ? 'removeClass' : 'addClass']('showMenu')	
			});


		}
	}
})
.directive('bodyHeight', ['articleSvc', function(articleSvc) {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            articleSvc.articleHeight = element[0].offsetHeight;
        },

    }
}])

