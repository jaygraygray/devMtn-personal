angular.module('appName').service('userSvc', function($http) {

this.getUserArticleLikes = function(id) {
	return $http.get('/api/user/articlesliked/' + id).then(function(resp) {
		return resp
	})
}




})