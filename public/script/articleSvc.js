angular.module('appName').service('articleSvc', function($http) {

this.getHeadlines = function(cmd) {
	return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})
}

this.likedArticle = function(notObj) {
	return $http.put('/api/articlenotification', notObj).then(function(resp) {
		console.log("svc")
		return resp
	})
}



})