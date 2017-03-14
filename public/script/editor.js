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

var pageX;
var pageY;

console.log("work")
    $(document).bind("mouseup", function() {
        var selectedText = x.Selector.getSelected();
        if(selectedText != ''){
          console.log("Char Begin: ", selectedText.anchorOffset)
          console.log("Char End: ", selectedText.focusOffset)
            $('ul.tools').css({
                'left': pageX + 5,
                'top' : pageY - 55
            }).fadeIn(150);
        } else {
            $('ul.tools').fadeOut(200);
        }
    });
    $(document).on("mousedown", function(e){
        pageX = e.pageX;
        pageY = e.pageY;
    });
