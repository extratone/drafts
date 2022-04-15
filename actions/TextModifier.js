// Text Modifiers
/* Scripts taken from Drafts 4 and ported to Drafts 5 */
/* Action created by Tim Nahumck */

/* --------------------- */
/* ------Functions------ */
/* --------------------- */

// Title Case Function
/* --------------------- */
/* To Title Case 2.1 – http://individed.com/code/to-title-case/ */
/* Copyright © 2008–2013 David Gouch. Licensed under the MIT License. */

String.prototype.toTitleCase = function(){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
 
  return this.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }
    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }
    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

//Small Caps Function
/* --------------------- */
// uses Unicode characters
function smallCapitalize(input) {
  var out = '';
  for( var i = 0; i <= input.length - 1; i++ ) {
    var ch = input.charAt( i );
    if( ch == 'a' || ch == 'A' ) { out += '\u1D00' }
    else if( ch == 'b' || ch == 'B' ) { out += '\u0299' }
    else if( ch == 'c' || ch == 'C' ) { out += '\u1D04' }
    else if( ch == 'd' || ch == 'D' ) { out += '\u1D05' }
    else if( ch == 'e' || ch == 'E' ) { out += '\u1D07' }
    else if( ch == 'f' || ch == 'F' ) { out += '\u0493' }
    else if( ch == 'g' || ch == 'G' ) { out += '\u0262' } 
    else if( ch == 'h' || ch == 'H' ) { out += '\u029C' }
    else if( ch == 'i' || ch == 'I' ) { out += '\u026A' }
    else if( ch == 'j' || ch == 'J' ) { out += '\u1D0A' }
    else if( ch == 'k' || ch == 'K' ) { out += '\u1D0B' }
    else if( ch == 'l' || ch == 'L' ) { out += '\u029F' }
    else if( ch == 'm' || ch == 'M' ) { out += '\u1D0D' }
    else if( ch == 'n' || ch == 'N' ) { out += '\u0274' }
    else if( ch == 'o' || ch == 'O' ) { out += '\u1D0F' }
    else if( ch == 'p' || ch == 'P' ) { out += '\u1D18' }
    else if( ch == 'q' || ch == 'Q' ) { out += '\u01EB' }
    else if( ch == 'r' || ch == 'R' ) { out += '\u0280' }
    else if( ch == 's' || ch == 'S' ) { out += 's' }
    else if( ch == 't' || ch == 'T' ) { out += '\u1D1B' }
    else if( ch == 'u' || ch == 'U' ) { out += '\u1D1C' }
    else if( ch == 'v' || ch == 'V' ) { out += '\u1D20' }
    else if( ch == 'w' || ch == 'W' ) { out += '\u1D21' }
    else if( ch == 'x' || ch == 'X' ) { out += 'x' }
    else if( ch == 'y' || ch == 'Y' ) { out += '\u028F' }
    else if( ch == 'z' || ch == 'Z' ) { out += '\u1D22' }
    else { out += ch }
    }
  return out;
}

//Superscript Function
/* --------------------- */
// uses Unicode characters
function superscript(s) {
  var pchars = "0123456789n"
    , cchars = "⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ"
    , count  = pchars.length
    , regex  = new RegExp('[' + pchars + ']', 'g')
    , trans  = {}
    , lookup = function(c) { return trans[c] || c; };
  
  for (var i=0; i<count; i++) {
    trans[pchars[i]] = cchars[i];
  }
  return s.replace(regex, lookup);
}

//Subscript Function
/* --------------------- */
// uses Unicode characters
function subscript(s) {
  var pchars = "0123456789"
    , cchars = "₀₁₂₃₄₅₆₇₈₉"
    , count  = pchars.length
    , regex  = new RegExp('[' + pchars + ']', 'g')
    , trans  = {}
    , lookup = function(c) { return trans[c] || c; };
  
  for (var i=0; i<count; i++) {
    trans[pchars[i]] = cchars[i];
  }
  return s.replace(regex, lookup);
}

//Hyphenate Function
/* --------------------- */
function hyphenate(s) {
  var f       = ' '
    , r       = '-'
    , re      = new RegExp(f, 'g')
    , matches = s.match(re);
  if (matches) {
    return s.replace(re,r);
  }
}

//Encircle Function
/* --------------------- */
function encircle(s) {
  var pchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    , cchars = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ⓪①②③④⑤⑥⑦⑧⑨"
    , count  = pchars.length
    , regex  = new RegExp('.', 'g')
    , trans  = {}
    , lookup = function(c) { return trans[c] || c; };
  for (var i=0; i<count; i++) {
    trans[pchars[i]] = cchars[i];
  }
  
  return s.replace(regex, lookup);
}

//Strikeout Function
/* --------------------- */
function strikeout(unstruck) {
  var s = String.fromCharCode(824)
    , a = unstruck.split('');
  if (a.length > 0) {
    return a.join(s) + s;
  }
  else {
    return '';
  }
}

//Flip Text Function
/* --------------------- */
function flip(s) {
  var pchars = "abcdefghijklmnopqrstuvwxyz,.?!'(){}[]"
    , fchars = "ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz'˙¿¡,)(}{]["
    , count  = pchars.length
    , regex  = new RegExp('.', 'g')
    , trans  = {}
    , t      = s.toLowerCase()
    , lookup = function(c) { return trans[c] || c; };
  for (var i=0; i<count; i++) {
    trans[pchars[i]] = fchars[i];
  }
  var a = t.split("");
  a.reverse();
  return a.join("").replace(regex, lookup);
}

// Prompt
/* --------------------- */
var lists = ["Encode", "Decode", "Hyphenate", "Small Caps", "Superscript", "Subscript", "lower case", "UPPER CASE", "Title Case", "Encircle", "Flip", "Strikeout"];

var p = Prompt.create();
p.title = "Text Modifier";
for (i = 0; i < lists.length; i++) {
  p.addButton(lists[i]);
}
var con = p.show();

if (con) {
  var s = editor.getSelectedText();
  var selRange = editor.getSelectedRange();
  if (p.buttonPressed == "lower case") {
    var text = s.toLowerCase();
  }
  if (p.buttonPressed == "UPPER CASE") {
    var text = s.toUpperCase();
  }
  if (p.buttonPressed == "Title Case") {
    var text = s.toTitleCase();
  }
  if (p.buttonPressed == "Small Caps") {
    var text = smallCapitalize(s);
  }
  if (p.buttonPressed == "Superscript") {
    var text = superscript(s);
  }
  if (p.buttonPressed == "Subscript") {
    var text = subscript(s);
  }
  if (p.buttonPressed == "Encode") {
    var text = encodeURIComponent(s);
  }
  if (p.buttonPressed == "Decode") {
    var text = decodeURIComponent(s);
  }
  if (p.buttonPressed == "Hyphenate") {
    var text = hyphenate(s);
  }
  if (p.buttonPressed == "Encircle") {
    var text = encircle(s);
  }
  if (p.buttonPressed == "Strikeout") {
    var text = strikeout(s);
  }
  if (p.buttonPressed == "Flip") {
    var text = flip(s);
  }
  editor.setSelectedText(text);
  editor.setSelectedRange(selRange[0]+text.length,0);
  editor.activate();
}
else {
  context.cancel();
}