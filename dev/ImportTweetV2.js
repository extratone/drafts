var twitter = Twitter.create();

let selected = editor.getSelectedRange()[1] > 0 ? editor.getSelectedText() : editor.getText();

/*let mdlink = [`[Tweet](${selected})`,""]; */

var id = selected.substring(selected.lastIndexOf('/') + 1);

var baseURL = "https://api.twitter.com/2/tweets/${id}";

var params = "attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,public_metrics,referenced_tweets,reply_settings,source,text,withheld";

var head = "Authorization: Bearer AAAAAAAAAAAAAAAAAAAAAOu5bgEAAAAAx4lokpJ8YEiLuAomAmrkBSr4Jv4%3DtzbfrrT0JeGuIg8Asc806dgiWWtcAUIRZTb3w9EtOd2Ica2DWs";

var response = twitter.request({
	"url": baseURL,
	"method": "GET",
    "headers:": head,
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