// setup and request credentials
let credential = Credential.create("Telegram Bot", "Enter your bot token and target chat id.");

credential.addTextField("chat", "Chat ID");
credential.addPasswordField("token", "Bot Token");
credential.authorize();

const chat = credential.getValue("chat");
const token = credential.getValue("token");

// make post
let endpoint = `https://api.telegram.org/bot${token}/sendMessage`;

let data = {
	"chat_id": chat,
	"text": draft.content,
	"parse_mode": "markdown",
};

// create and post HTTP request
var http = HTTP.create();

var response = http.request({
	"url": endpoint,
	"method": "POST",
	"data": data,
});

// log result post ID and setup template tags for insertion
if (response.success == true) {
	let d = JSON.parse(response.responseText);
	console.log("Posted to Telegram Message ID: " + d.result.message_id);
	draft.setTemplateTag("messageid", d.result.message_id);
	draft.setTemplateTag("chatalpha", d.result.chat.username);
}

else {
	console.log("Telegram Error: " + response.error);
	context.fail();
}