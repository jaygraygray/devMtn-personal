angular.module("appName").service("draftsSvc", function($http) {


var updateDraft = function(draftObj) {
	return $http.post('api/updatedraft/' + draftObj.article_id, draftObj)
	.then(function(resp) {
		return resp
	})
}

this.getTags = function(tags) {
	return tags
}

//add additional data to the draftObj here
this.saveMe = function(draftObj) {

	clearTimeout(this.timer)
	this.timer = setTimeout(function() {
		this.status = false
	  updateDraft(draftObj).then(function(resp) {
	  	console.log('Updated article #', draftObj.article_id)})
	}, 3000)
}	







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





