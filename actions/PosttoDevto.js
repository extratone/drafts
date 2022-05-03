// setup and request credentials
let credential = Credential.create("Devto", "Enter your Dev.to username and API key.");

credential.addTextField("username", "Username");
credential.addPasswordField("api_key", "Dev.to API Key");
credential.authorize();

const key = credential.getValue("api_key");
const username = credential.getValue("username");

// make post
let endpoint = `https://dev.to/api/articles`;

// configure post details
// for more information, see:
// https://developers.forem.com/api
let data = {
	"title": draft.displayTitle
	"body_markdown": draft.content,
	"tags": draft.tags
};

// create and post HTTP request
var http = HTTP.create();

var response = http.request({
	"url": endpoint,
	"method": "POST",
	"data": data,
	"headers": {
		"api-key" : key,
	}
});

// log result post URL and copy to clipboard
if (response.statusCode == 201) {
	let d = JSON.parse(response.responseText);
	console.log("Posted to Dev.to. URL: " + d.data.url);
	app.setClipboard(d.data.url);
	draft.setTemplateTag("devlink", d.data.url);
}

else {
	console.log("Dev.to Error: " + response.error);
	context.fail();
}