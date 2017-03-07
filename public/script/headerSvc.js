angular.module('appName').service('headerSvc', function($http) {

this.getUserNames = function(userID) {
	return $http.get('/api/users?id=' + userID).then(function(resp) {
		console.log("AL:KSJFAL:KFJ")
		return resp
	})
}

this.getNotifications = function() {
	return $http.get('/api/getnotifications').then(function(resp) {
		console.log(resp.data[0].action_by_userid)
		return resp
	})
}

})