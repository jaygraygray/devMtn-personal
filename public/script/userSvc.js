angular.module('appName').service('userSvc', function($http) {



this.getArticleLikes = function(id) {
	 return $http.get('/api/user/articlesliked/' + id).then(function(resp) {
		return resp
	})
}

this.getBookmarks = function(id) {
	return $http.get('api/user/bookmarks/' + id).then(function(resp) {
		return resp
	})
}



})