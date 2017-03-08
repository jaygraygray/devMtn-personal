angular.module('appName').service('homeSvc', function($http) {

//user ID as parameter
this.getUserTags = function(id) {
	return $http.get('/api/user/tags/' + id).then(function(resp) {
		return resp
	})
}

this.getHeadline = function() {
	return $http.get('/api/headline').then(function(resp) {
		return resp
	})
}

this.likedArticle = function(notObj) {
	return $http.put('/api/articleliked', notObj).then(function(resp) {
		return resp
	})
}

})