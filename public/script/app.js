angular.module("appName", ['ui.router', 'ngTagsInput', 'ngQuill'])
.config(function($stateProvider, $urlRouterProvider) {
console.log("as;ldkfjas;dfghjklkjhgfdlkfj")
$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'index.html',
		controller: 'homeCtrl'
	})
	.state('new-story', {
		url: '/new-story',
		templateUrl: '/views/text-editor.html',
		controller: 'draftCtrl'
	});

	$urlRouterProvider.otherwise('/')
})