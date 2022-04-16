var verse = editor.getSelectedText(); //get selected verse

if (!verse || verse.length == 0) { // if there was no selection, ask for one
	var newVerse = Prompt.create();
	newVerse.title = "Enter Verse Information";
	newVerse.message = "No text was selected. Please enter the verse(s) below.";
	newVerse.addTextField("verseName","Verse Name","");
	newVerse.addButton("OK");
	
	var newSelection = newVerse.show();

	var newVerseContents = newVerse.fieldValues["verseName"];

	if (newVerse.buttonPressed == "OK" && newVerseContents != 0){
		var verse = newVerseContents;
		editor.setSelectedText(verse);
		var votd = false;
		var random = false;
	} else {
		var elseVerse = Prompt.create();
		elseVerse.title = "Error: No Verse Provided";
		elseVerse.message = "What would you like to do instead?";
		
		elseVerse.addButton("Verse of the Day");
		elseVerse.addButton("Random");
	
		var elseSelection = elseVerse.show();

		if (elseVerse.buttonPressed == "Verse of the Day"){
	   	var votd = true;
	  	} else if (elseVerse.buttonPressed == "Random"){
	  		var random = true;
	  	}	
	}
}

if (votd){
	var url = "https://beta.ourmanna.com/api/v1/get/?format=json";
} else if (random) {
	var url = "https://beta.ourmanna.com/api/v1/get/?format=json&order=random";
} else {
	var url = "http://bible-api.com/"+encodeURIComponent(verse)+"?verse_numbers=true"; //define url for parsing
}

var http = HTTP.create(); //create HTTP object

var response = http.request({
	"url": url,
	"method": "GET",
});

var jsonObj = JSON.parse(response.responseText);

if (votd || random){
	var verse = jsonObj.verse.details.reference;
	editor.setSelectedText(verse);
	var text = jsonObj.verse.details.text;
} else {
	var text = jsonObj.text;
}

var verseRange = editor.getSelectedRange(); // retrieve range of that selection

editor.setSelectedText("\n**"+verse+"**");
editor.setTextInRange(verseRange[0]+verseRange[1]+5,0,"\n"+text);