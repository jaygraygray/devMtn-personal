angular.module("appName").service("draftsSvc", function($http) {

this.draftObj = {
	author_id : 3,
	article_id : null,
	date : new Date(),
	draftBody : '',
	tags : [],
	title: ''
}

this.createArticle = function() {
	return $http.post('/api/createarticle', this.articleObj)
	.then(function(resp) { return resp.data[0].id })
}

this.getRecentID = function() {
	return $http.get('/api/headlines/headline')
	.then(function(resp) { return resp.data[0].id})
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
	console.log(id)
	return $http.get('api/editdraft/' + id)
	.then(function(resp) { return resp})}
















})

/////////////////////////////////////////////////////////
// BEGIN MENU CODE
/////////////////////////////////////////////////////////

  
// this.xCoord;
// this.yCoord;
// this.makeMenu = function(top, left) {

// 	///////////////////////
// 	// 	GETS CURRENT SELECTION
// 	///////////////////////

//      if (!window.x) {
//         x = {};
//     }
//     x.Selector = {};
//     console.log(x.Selector)
//     x.Selector.getSelected = function() {
//         var t = '';
//         if (window.getSelection) {
//             t = window.getSelection();
//         } else if (document.getSelection) {
//             t = document.getSelection();
//         } else if (document.selection) {
//             t = document.selection.createRange().text;
//         }
//         return t;
//     }
  
// // OPENS MENU
// //////////////////////////////////
 
// $(document).on("mouseup", function(e) {
// var selectedText = x.Selector.getSelected();

// if(selectedText != ''){
//   // console.log("Char Begin: ", selectedText.anchorOffset)
//   // console.log("Char End: ", selectedText.focusOffset)
//     $('.toolbar').css({
//       'display' : 'inline'
//     })
//     $('ul.tools').css({
//         'left': left + 50 + 'px', //use quill character/line IDs for correct targeting
//         'top' : top + 50 + 'px'
//     }).fadeIn(150);
//   } else {
//     $('ul.tools').fadeOut(200);
//   }
// }); 
 
// }
// select the newly styled line
// select beginning of newly styled line.
//when a style is applied 
    

/////////////////////////////////////////////////////////
// END MENU CODE
/////////////////////////////////////////////////////////

// this.makeElementAndLogDimensions = function(tag, id, content) {
// 	var result = document.createElement(tag)
// 	result.innerHTML = content
// 	document.body.appendChild(result)
// 	var rect = result.getBoundingClientRect();
// 	console.log(rect)
// 	//wrap text in a span.
// 	//get width of span.
// 	//use to calc x/y, plug into menu location

// }
//draftSvc.makeElementAndLogDimensions("span", "content", text)





