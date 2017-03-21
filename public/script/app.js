angular.module("appName", ['ui.router', 
						   'ngTagsInput', 
						   'ngQuill'])
.config(function($stateProvider, $urlRouterProvider) {

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
	})
	.state('edit-story', {
		url: '/edit-story/:article_id',
		templateUrl: '/views/text-editor.html',
		controller: function($stateParams, draftsSvc) {
			draftsSvc.id = $stateParams.article_id;
		}
	})
	.state('drafts', {
		url: '/me/stories/drafts',
		templateUrl: '/views/drafts.html',
		controller: 'yourStoriesCtrl'
	})
	.state('article', {
		url: '/stories/:article_title',
		templateUrl: '/views/view-article.html',
		controller: 'articleCtrl'
	});

	$urlRouterProvider.otherwise('/')
})