// setup and request credentials
let credential = Credential.create("WriteFreely", "Enter the API base URL you intend to use and an auth token for your account.");

credential.addPasswordField("token", "Access Token");
credential.authorize();

const token = credential.getValue("token");

// make post
let endpoint = `https://write.as/api/posts`;

// configure status details
// for more info on options see:
// https://docs.joinmastodon.org/methods/statuses/
let data = {
	"body": draft.content,
	"title": draft.title,
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

if (response.statusCode == 201) {
	console.log("Posted to Write.as, ID: " + response.responseData.id);
}
else {
	console.log("Writ.as Error: " + response.error);
	context.fail();
}