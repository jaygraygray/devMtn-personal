angular.module('appName').service('articleSvc', function($http) {

this.getHeadlines = function(cmd) {
	return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})
}

this.likeArticle = function(notObj) {
	return $http.put('/api/articlenotification', notObj).then(function(resp) {
		return resp
	})
}

this.unlikedArticle = function(deleteObj) {
	return $http.put('/api/user/dislikearticle', deleteObj).then(function(resp) {
		return resp
	})
}

})