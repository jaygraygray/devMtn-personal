angular.module("appName", ['ui.router'])
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
		templateUrl: '/views/text-editor.html'
		//controller: 'textEditorCtrl'
	});

	$urlRouterProvider.otherwise('/')
})