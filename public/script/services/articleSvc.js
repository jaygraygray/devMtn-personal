angular.module('appName')
.service('articleSvc', function($http) {

this.articleHeight = 0;

this.getHeadlines = function(cmd) {
	return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})
}

this.createNotification = function(notObj) {
	return $http.put('/api/articlenotification', notObj).then(function(resp) {
		return resp
	})
}

this.unlikeArticle = function(deleteObj) {
	return $http.put('/api/user/unlikearticle', deleteObj).then(function(resp) {
		return resp
	})
}

this.unbookmarkArticle = function(deleteObj) {
	return $http.put('/api/user/deletebookmark', deleteObj).then(function(resp) {
		return resp
	})
}

 ///////////////////////////////////////////////
 // BEGIN USER SELECTION
 ///////////////////////////////////////////////
// var range = editor.getSelection();
// if (range) {
// if (range.length == 0) {
//   console.log('User cursor is at index', range.index);
// } else {
//   var text = editor.getText(range.index, range.length);

//   console.log('User has highlighted: ', text);
  

//   var location = range.index - range.length
//   var mid = editor.getText(location)
//   var bounds = editor.getBounds(location)
//   console.log('location: ', location)
//   console.log('getBounds: TOP: ', bounds.top)
//   console.log('getBounds: LEFT: ', bounds.left)

//   this.top = bounds.top
//   this.left = bounds.left

// }
// } else {
// console.log('User cursor is not in editor');
// }

 ///////////////////////////////////////////////
 // END USER SELECTION
 ///////////////////////////////////////////////

})