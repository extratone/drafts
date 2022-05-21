// JS Indent
// RV 2020-03-06 at 17:42 EST

// Indents single or multiple lines with two spaces

var lnRange = editor.getSelectedLineRange();
var text = editor.getTextInRange(lnRange[0],lnRange[1]);
var selRange = editor.getSelectedRange();
var charsAdded = 0;
var newText = '';

main: {
  // when text is unselected and cursor at beginning of line 
  if (lnRange[1] == 1) {
    editor.setTextInRange(selRange[0], selRange[1], '  ');
    editor.setSelectedRange(selRange[0] + 2, selRange[1]);
    break main;
  }

  newText = text.replace(/(.+)/gm, '  $1')
  charsAdded = newText.length - text.length;

  // update text and set new selection:
  editor.setTextInRange(lnRange[0],lnRange[1], newText);

  if (newText.split('\n').length > 2) {
    editor.setSelectedRange(lnRange[0], lnRange[1] + charsAdded);
  }
  else {
    editor.setSelectedRange(selRange[0] + 2, selRange[1]);
  }
}

