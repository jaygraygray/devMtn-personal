angular.module('appName')
.service('articleSvc', function($http) {

this.getHeadlines = function(cmd) {
	return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})
}

this.createNotification = function(notObj) {
	return $http.put('/api/articlenotification', notObj).then(function(resp) {
		return resp
	})
}

this.unlikeArticle = function(deleteObj) {
	return $http.put('/api/user/unlikearticle', deleteObj).then(function(resp) {
		return resp
	})
}

this.unbookmarkArticle = function(deleteObj) {
	return $http.put('/api/user/deletebookmark', deleteObj).then(function(resp) {
		return resp
	})
}


})