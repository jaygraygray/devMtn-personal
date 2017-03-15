angular.module("appName").service("draftSvc", function($http) {



///////////////////////////////////////////////////////
// AUTO-SAVE CODE
//////////////////////////////////////////////////////

this.timer;
this.saveMe = function() {
  clearTimeout(this.timer)
  this.timer = setTimeout(function() {
      console.log("Saved")
    }, 4000) 
}
/////////////////////////////////////////////////////////
// END AUTO-SAVE CODE
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
// BEGIN MENU CODE
/////////////////////////////////////////////////////////

  
this.xCoord;
this.yCoord;
this.makeMenu = function() {
     if (!window.x) {
        x = {};
    }
    x.Selector = {};
    console.log(x.Selector)
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
  
  //var selectedText = x.Selector.getSelected();
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
// select the newly styled line
// select beginning of newly styled line.
//when a style is applied 
    

/////////////////////////////////////////////////////////
// END MENU CODE
/////////////////////////////////////////////////////////





})


