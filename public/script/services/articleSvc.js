angular.module('appName')
.service('articleSvc', function($http, $stateParams) {

this.articleHeight  
this.article
this.getHeadlines = function(cmd) {
		return $http.get('/api/headlines/' + cmd).then(function(resp) {
		return resp
	})	
}

this.getHeadlinesByTags = function(tag) {
	return $http.get('/api/headlinetags/' + tag).then(function(resp) {
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
		return resp
	})
}


this.getBookmarks = function(userID) {
	return $http.get('/api/getbookmarks/' + userID)
	.then(function(resp) {
		return resp
	})
}


/////////////////////////////////////////////////////////
// BEGIN MENU CODE
/////////////////////////////////////////////////////////

  
this.xCoord;
this.yCoord;
//this.makeMenu = function(top, left) {

// 	///////////////////////
// 	// 	GETS CURRENT SELECTION
// 	///////////////////////

//     if (!window.x) {
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
// console.log(selectedText)
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
 
//}
// select the newly styled line
// select beginning of newly styled line.
//when a style is applied 
    

/////////////////////////////////////////////////////////
// END MENU CODE
/////////////////////////////////////////////////////////





 /////////////////////////////////////////////
 //BEGIN USER SELECTION
 /////////////////////////////////////////////
// var range = editor.getSelection();
// if (range) {
// if (range.length == 0) {
//   console.log('User cursor is at index', range.index);
// } else {
//   var text = editor.getText(range.index, range.length);

//   console.log('User has highlighted: ', text);
  

//   // var location = range.index - range.length
//   // var mid = editor.getText(location)
//   // var bounds = editor.getBounds(location)
//   // console.log('location: ', location)
//   // console.log('getBounds: TOP: ', bounds.top)
//   // console.log('getBounds: LEFT: ', bounds.left)

//   this.top = bounds.top
//   this.left = bounds.left

// }
// } else {
// console.log('User cursor is not in editor');
// }

 /////////////////////////////////////////////
 //END USER SELECTION
 /////////////////////////////////////////////

})