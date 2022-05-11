// setup and request credentials
let credential = Credential.create("TwitterV2", "Enter your Twitter credentials");

credential.addTextField("username", "Twitter username");
credential.addPasswordField("token", "Twitter API Bearer token");
credential.authorize();

const uname = credential.getValue("username");
const token = credential.getValue("token");

let selected = editor.getSelectedRange()[1] > 0 ? editor.getSelectedText() : editor.getText();

var id = selected.substring(selected.lastIndexOf('/') + 1);

let baseURL = `https://api.twitter.com/2/tweets`;

var params = {"ids": id, "expansions": "geo.place_id,attachments.media_keys,entities.mentions.username", "tweet.fields": "created_at,text,referenced_tweets,attachments,geo,entities,context_annotations,conversation_id,reply_settings", "user.fields": "username,verified,profile_image_url,location,url,description", "media.fields": "url", "place.fields": "geo"};

var http = HTTP.create();

var response = http.request({
    "url": baseURL,
    "method": "GET",
    "headers": {
		"Authorization" : "Bearer " + token,
    },
    "parameters": params,
});

if (response.statusCode == 200 || response.statusCode == 201) {
    let data = JSON.parse(response.responseText);
    let image = data.data[0].attachments.media[0].url;
    let d = Draft.create();
    d.content = data;
    d.update();
    editor.load(d);
    console.log("Tweet retrieved:" + data);
    app.setClipboard(response.responseText);
}

else {
    console.log("Error: " + response.error);
    context.fail();
}	