angular.module("appName", ['ui.router', 
						   'ngTagsInput', 
						   'ngQuill',
						   'headroom'])
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
	.state('published', {
		url: '/me/stories/published',
		templateUrl: '/views/published.html',
		controller: 'yourStoriesCtrl'
	})
	.state('article', {
		url: '/stories/:article_id',
		templateUrl: '/views/view-article.html',
		controller: 'articleCtrl'
	})
	.state('tags', {
		url: '/tags/?tag',
		templateUrl: '/views/tags.html',
		controller: 'tagsCtrl'
	})
	.state('bookmarks', {
		url: '/bookmarks/:user_id',
		templateUrl: '/views/bookmarks.html',
		controller: 'bookmarksCtrl'
	})


	$urlRouterProvider.otherwise('/')
})


// for (let i = 0; i < articles.length; i++) {

// 	if ($scope.id == articles[i].id) {
// 		$scope.bookmarkSnippet = articles[i]
// 		$scope.bookmarkSnippet.userBookmarkedarticle
// 	}
// 	if (bookmarks.indexOf(articles[i].id) === -1) {
// 		if ($scope.bookmarkSnippet) {$scope.bookmarkSnippet.userBookmarkedArticle = false}
// 			$scope.articles[i].userBookmarkedArticle = false
// 	} else {
// 		if ($scope.bookmarkSnippet) {$scope.bookmarkSnippet.userBookmarkedArticle = true}
// 			$scope.articles[i].userBookmarkedArticle = true
// 	}	
// }