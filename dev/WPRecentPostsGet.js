// create credentials for site
let cred = Credential.createWithHostUsernamePassword("WordPress", "WordPress credentials. Include full URL (with http://) of the home page of your WordPress site in the host field.");
cred.authorize();

// create WordPress object and make request
let wp = WordPress.create(cred.getValue("host"), 1, "", "");
let method = "wp.getPosts"
let params = [
	1, // blog_id, in most cases just use 1
	cred.getValue("username"), 
	cred.getValue("password")
];
let response = wp.runMethod(method, params);

if (response.success) {
	// I should have an array of post objects in first param
	let s = [];
	let posts = response.params[0];
	for (let post of posts) {
		s.push(`- ${post.post_title} [link](${post.link})`);
	}
	let d = Draft.create();
	d.content = s.join("\n");
	d.update();
	editor.load(d);
}
else {
	console.log("HTTP Status: " + response.statusCode);
	console.log("XML-RPC Fault: " + response.faultCode + ", " + response.error);
	context.fail();
}
