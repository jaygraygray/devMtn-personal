angular.module('appName')
.service('headerSvc', function($http) {

this.getArticleTitleByResponse = function(id) {
	return $http.get('/api/article/response/' + id).then(function(resp) {
		return resp
	})
}

this.getArticleTitle = function(id) {
	return $http.get('/api/article/' + id).then(function(resp) {
		return resp
	})
}

this.getNotifications = function() {
	return $http.get('/api/getnotifications').then(function(resp) {
		return resp
	})
}

})