// setup and request credentials
let credential = Credential.create("Raindrop", "Enter your API token and target collection ID.");

credential.addTextField("collection", "Collection ID");
credential.addPasswordField("token", "API Token");
credential.authorize();

const collection = credential.getValue("collection");
const token = credential.getValue("token");
const inputlink = editor.getSelectedText();

// make post
let endpoint = `https://api.raindrop.io/rest/v1/raindrop`;

let data = {
	"link": inputlink,
	"collection": collection,
};

// create and post HTTP request
var http = HTTP.create();

var response = http.request({
	"url": endpoint,
	"method": "POST",
	"headers": {"Content-Type": "application/json", "Authorization": token},
	"data": data,
});

// log result item ID
if (response.statusCode == 200) {
	let d = JSON.parse(response.responseText);
	console.log("Saved to Raindrop. Item ID: " + d.item._id);
}

else {
	console.log("Raindrop Error: " + response.responseText);
	context.fail();
}