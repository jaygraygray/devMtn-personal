angular.module('appName')
.service('homeSvc', function($http) {

//user ID as parameter
this.getUserTags = function(id) {
	return $http.get('/api/user/tags/' + id).then(function(resp) {
		return resp
	})
}


//define all API calls necessary for listArticles directive
// all: list all artilces in increments of X
// userTags: list articles based on users tags
// tag: get articles based on tag


})