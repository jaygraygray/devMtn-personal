// if (!window.x) {
//     x = {};
// }
// x.Selector = {};
// x.Selector.getSelected = function() {
//     var t = '';
//     if (window.getSelection) {
//         t = window.getSelection();
//     } else if (document.getSelection) {
//         t = document.getSelection();
//     } else if (document.selection) {
//         t = document.selection.createRange().text;
//     }
    
//     return t;
// }



// $(document).ready(function() {


// 	var menuStatus = true
// 	var leftDist
// 	var rightDist
// 	$(document).on("mouseup", function(e) {

	
// 	if (menuStatus === true) {
// 		leftDist = e.pageX + 'px'
// 		rightDist = e.pageY + 'px'
// 	} else if (menuStatus === false) {
// 		leftDist = e.pageX - e.pageX + 'px'
// 		rightDist = e.pageY - e.pageY + 'px'
// 	}

// 	var selectedText = x.Selector.getSelected();

// 	if(selectedText != ''){
// 	   // console.log("Char Begin: ", selectedText.anchorNode.parentElement)
// 	   // console.log("Char End: ", selectedText.focusNode.parentElement)
// 	   //var rect = selectedText.anchorNode.parentNode.getClientRects()
// 	   // console.log(rect)

// 	   //using info on line 45
// 	   //

// 	   menuStatus = false;
	   
// 	    $('.toolbar').css({
// 	    	'display' : 'inline'
// 	    })
// 	    $('ul.tools').css({
// 	        'left': leftDist, //use quill character/line IDs for correct targeting
// 	        'top' : rightDist
// 	    }).fadeIn(150);
// 		} else {
// 	    $('ul.tools').fadeOut(200);
// 		}
		
// 	});
	


// 	$(document).on("mouseup", function(e) {
// 	var selectedText = x.Selector.getSelected();
// 		console.log("second func")
// 	if(selectedText != ''){
// 	  // console.log("Char Begin: ", selectedText.anchorOffset)
// 	  // console.log("Char End: ", selectedText.focusOffset)
// 	    $('.toolbar').css({
// 	    	'display' : 'inline'
// 	    })
// 	    $('ul.tools').fadeIn(150);
// 		} else {
// 	    $('ul.tools').fadeOut(200);
// 		}
// 	});	

	

	

// // quill.on('text-change', function(delta, oldDelta), source) {

// // //find changes between new and old
// // //find coordinates/dimensions of area that has been changed
// // //use those to position menu

// // })
		
// })


