angular.module("appName").service("draftsSvc", function($http) {

this.id
this.editBody
this.editTitle
this.editTags

this.draftObj = {
	author_id : 3,
	article_id : null,
	date : new Date(),
	draftBody : null,
	tags : null,
	title: null
}

this.createArticle = function() {
	return $http.post('/api/createarticle', this.articleObj)
	.then(function(resp) { return resp.data[0].id })
}

this.getRecentID = function() {
	return $http.get('/api/getlastid')
	.then(function(resp) { return resp.data[0].max})
}

this.articleObj = {
	author_id : 3,
	title : null,
	body : null,
	date_started : new Date(),
	date_published : null,
	headline_img : null,
	published : false,
	tags : null,
	views : 0,
	likes : 0,
	bookmarks : 0,
	responses : 0,
	response_parent : 0,
	tagline : null	
}


this.updateDraft = function(draftObj) {
	return $http.post('api/updatedraft/' + this.draftObj.article_id, this.draftObj)
	.then(function(resp) { return resp })}



this.deleteDraft = function(id) {
	
	return $http.get('api/deletedraft/' + id)
	.then(function(resp) { return resp})}


this.editDraft = function(id) {
	return $http.get('api/editdraft/' + id)
	.then(function(resp) { 
		return resp})}

this.publishDraft = function(articleObj) {
	return $http.post('/api/publishdraft', articleObj)
	.then(function(resp) {
		return resp })}


})





