// setup and request credentials
let credential = Credential.create("Telegraph", "Enter your Telegraph username and auth token.");

credential.addTextField("account", "Account");
credential.addPasswordField("token", "Access Token");
credential.authorize();

const token = credential.getValue("token");
const collection = credential.getValue("account");

// make post
let endpoint = `https://api.telegra.ph/createPage/access_token=${token}&author_name=${account}`

?access_token=ecaa11b2eba4e4fa89a641d86d29415acb89c19cf232b8eb2d54642fec49&title=Sample+Page&author_name=Anonymous&content=[{"tag":"p","children":["Hello,+world!"]}]&return_content=tru

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