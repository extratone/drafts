var twitter = Twitter.create();

let selected = editor.getSelectedRange()[1] > 0 ? editor.getSelectedText() : editor.getText();

let mdlink = [`[Tweet](${selected})`,""];

var id = selected => selected.substring(selected.lastIndexOf('/') + 1);

var baseURL = "https://api.twitter.com/1.1/";
var url = baseURL + "statuses/show.json";

var response = twitter.request({
	"url": url,
	"method": "GET",
    "parameters": {"id": id,}
});

if (response.statusCode == 200 || response.statusCode == 201) {
    let text = response.responseData.text;
    mdlink.push(`${text}\n${mdlink}`);
    let d = Draft.create();
    d.content = mdlink.join("\n");
    d.update();
    editor.load(d);
    console.log("Tweet retrieved:" + text);
    app.SetClipboard(response.responseData);
}

else {
    console.log("Error: " + response.error);
    context.fail();
}	