angular.module('appName').service('homeSvc', function($http) {

//user ID as parameter
this.getUserTags = function(id) {
	return $http.get('/api/user/tags/' + id).then(function(resp) {
		return resp
	})
}

this.getHeadline = function() {
	return $http.get('/api/headline').then(function(resp) {
		console.log(resp)
		return resp
	})
}

})