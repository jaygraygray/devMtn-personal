angular.module('appName').service('homeSvc', function($http) {

this.getUserTags = function(id) {
	return $http.get('/api/user/tags/' + id).then(function(resp) {
		console.log(resp)
		return resp
	})
}

})