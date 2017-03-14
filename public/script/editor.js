// var t;
// function getText(e) {
	
// 	t = (document.all) ? document.selection.createRange().text : document.getSelection();
// 	console.log(t.anchorNode)
// }
// console.log(document)
// document.onmouseup = getText;
// if (!document.all) document.captureEvents(Event.MOUSEUP)

if (!window.x) {
    x = {};
}
x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}

console.log("work")

$(document).ready(function() {

	var action = true

	if (action) {
		action = false;
		console.log("one", action)
		$(document).on("mouseup", function(e) {
		var selectedText = x.Selector.getSelected();

		if(selectedText != ''){
		  // console.log("Char Begin: ", selectedText.anchorOffset)
		  // console.log("Char End: ", selectedText.focusOffset)
		    $('.toolbar').css({
		    	'display' : 'inline'
		    })
		    $('ul.tools').css({
		        'left': e.pageX + 'px', //use quill character/line IDs for correct targeting
		        'top' : e.pageY + 'px'
		    }).fadeIn(150);
			} else {
		    $('ul.tools').fadeOut(200);
			}
		});
		
}
	if (!action) {
		console.log("two" , action)
		$(document).on("mouseup", function(e) {
		var selectedText = x.Selector.getSelected();

		if(selectedText != ''){
		  // console.log("Char Begin: ", selectedText.anchorOffset)
		  // console.log("Char End: ", selectedText.focusOffset)
		    $('.toolbar').css({
		    	'display' : 'inline'
		    })
		    $('ul.tools').fadeIn(150);
			} else {
		    $('ul.tools').fadeOut(200);
			}
		});
	}



})


