// setup and request credentials
let credential = Credential.create("Writeas", "Enter your Writeas/Snapas API auth token.");

credential.addPasswordField("token", "Access Token");
credential.authorize();

const token = credential.getValue("token");

// make post
let endpoint = `https://write.as/api/posts`;

// configure post details
// for more information, see:
// https://developers.write.as/docs/api
let data = {
	"body": draft.content,
};

// create and post HTTP request
var http = HTTP.create();

var response = http.request({
	"url": endpoint,
	"method": "POST",
	"data": data,
	"headers": {
		"Authorization" : token,
	}
});

// log result post URL and copy to clipboard
if (response.statusCode == 201) {
	let d = JSON.parse(response.responseText);
	console.log("Posted to Writeas. URL: " + d.data.url);
	app.setClipboard(d.data.url);
	draft.setTemplateTag("walink", d.data.url);
}

else {
	console.log("Write.as Error: " + response.error);
	context.fail();
}