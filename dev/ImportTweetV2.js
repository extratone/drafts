// setup and request credentials
let credential = Credential.create("TwitterV2", "Enter your Twitter credentials");

credential.addTextField("username", "Twitter username");
credential.addPasswordField("token", "Twitter API Bearer token");
credential.authorize();

const uname = credential.getValue("username");
const token = credential.getValue("token");


var twitter = Twitter.create();

let selected = editor.getSelectedRange()[1] > 0 ? editor.getSelectedText() : editor.getText();

/*let mdlink = [`[Tweet](${selected})`,""]; */

var id = selected.substring(selected.lastIndexOf('/') + 1);

let baseURL = `https://api.twitter.com/2/tweets`;

var params = {"ids": id, "expansions": "author_id,referenced_tweets.id,in_reply_to_user_id,geo.place_id,attachments.media_keys,attachments.poll_ids,entities.mentions.username,referenced_tweets.id.author_id", "tweet.fields": "id,created_at,text,author_id,in_reply_to_user_id,referenced_tweets,attachments,withheld,geo,entities,public_metrics,lang,context_annotations,conversation_id,reply_settings"};

let head = `Authorization: Bearer ${token}`;

/*
var response = twitter.request({
	"url": baseURL,
	"method": "GET",
    "headers:": head,
    "parameters": params,
});
*/
// create and post HTTP request
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
    let text = response.responseData.text;
 /*   mdlink.push(`${text}\n${mdlink}`); */
    let d = Draft.create();
    d.content = text;
    d.update();
    editor.load(d);
    console.log("Tweet retrieved:" + text);
    app.setClipboard(response.responseText);
}

else {
    console.log("Error: " + response.error);
    context.fail();
}	