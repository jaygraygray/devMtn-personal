angular.module('appName').service('headerSvc', function($http) {


this.getNotifications = function() {
	return $http.get('/api/getnotifications').then(function(resp) {
		console.log(resp)
		return resp
	})
}

})