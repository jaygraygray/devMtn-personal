angular.module('appName')
.service('articleSvc', function($http, $stateParams) {

this.articleHeight  
this.article
<<<<<<< HEAD
this.getHeadlines = function(cmd) {
		return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})	
}

this.getHeadlinesByTags = function(tag) {
	return $http.get('/api/headlinetags/' + tag).then(function(resp) {
=======
this.getHeadlines = function(cmd, tag) {
	if ($stateParams) {
		console.log($stateParams)
	return $http.get('/api/headlines/' + cmd + '?' + $stateParams).then(function(resp) {
		console.log(resp.data)
		return resp
	})
	}
	return $http.get('/api/headlines/' + cmd).then(function(resp) {
>>>>>>> c88f4617c96aaa9f944fb79ae59376287b1a87fb
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

this.getArticle = function(id) {
	return $http.get('/api/getarticle/' + id)
	.then(function(resp) {
		console.log(resp)
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