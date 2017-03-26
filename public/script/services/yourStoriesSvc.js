angular.module('appName').service('yourStoriesSvc', 
function($http) {

this.getAllDrafts = function(author_id) {
	return $http.get('/api/getdrafts/' + author_id)
	.then(function(resp) {
		return resp.data
	})
}


})