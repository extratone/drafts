// setup and request credentials
let credential = Credential.create("Writeas", "Enter the base URL of the Write.as API.");

credential.addTextField("host", "Base URL");
credential.addPasswordField("token", "Access Token");
credential.authorize();

const host = credential.getValue("host");
const token = credential.getValue("token");

// make post
let endpoint = `${host}api/posts`;
var id_key = new Date().toISOString();

// configure status details
// for more info on options see:
// https://docs.joinmastodon.org/methods/statuses/
let data = {
	"body": draft.content,
	"title": draft.displayTitle
};

// create and post HTTP request
var http = HTTP.create();

var response = http.request({
	"url": endpoint,
	"method": "POST",
	"data": data,
	"headers": {
		"Authorization" : "Bearer " + token,
		"idempotency_key" : id_key
	}
});

if (response.statusCode == 200) {
	console.log("Posted to Write.as, ID: " + response.responseData.id);
}
else {
	console.log("Write.as Error: " + response.error);
	context.fail();
}