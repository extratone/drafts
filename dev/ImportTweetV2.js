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

let baseURL = `https://api.twitter.com/2/tweets/${id}`;

var params = "attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,public_metrics,referenced_tweets,reply_settings,source,text,withheld";

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
    "headers": head,
    "parameters": params,
});

if (response.statusCode == 200 || response.statusCode == 201) {
    let text = response.responseData;
 /*   mdlink.push(`${text}\n${mdlink}`); */
    let d = Draft.create();
    d.content = text;
    d.update();
    editor.load(d);
    console.log("Tweet retrieved:" + text);
    app.SetClipboard(response.responseData);
}

else {
    console.log("Error: " + response.error);
    context.fail();
}	