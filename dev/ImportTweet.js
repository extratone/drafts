var twitter = Twitter.create();

let id = editor.getSelectedRange()[1] > 0 ? editor.getSelectedText() : editor.getText();

var baseURL = "https://api.twitter.com/1.1/";
var url = baseURL + "statuses/show.json";

var response = twitter.request({
	"url": url,
	"method": "GET",
    "parameters": {"id": id,}
});

if (response.statusCode == 200 || response.statusCode == 201) {
    let text = response.responseData.text;
    let d = Draft.create();
    d.content = text
    d.update();
    editor.load(d);
    console.log("Tweet retrieved");
}

else {
    console.log("Error: " + response.error);
    context.fail();
}	