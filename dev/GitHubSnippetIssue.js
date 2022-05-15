var credential = Credential.create("GitHub", "A GitHub Personal Access Token with read/write repo permissions.");
credential.addTextField("token", "Personal Access Token");
credential.authorize();

var repository = "extratone/snippets"


var title= draft.displayTitle;
var body = draft.content;
var tags = draft.tags;

// Create a new GitHub issue in the repo identified by repository,
// which is in a "username/repo" format.
function createGitHubIssue(repository, title, body) {
	var json = {
		title: title,
		body: body,
		tags: tags,
	};

	var http = HTTP.create();
	var response = http.request({
		"url": "https://api.github.com/repos/" + repository + "/issues",
		"method": "POST",
		"data": json,
		"headers": {
			"Authorization": "token " + credential.getValue("token"),
			"User-Agent": "Drafts-Issue-Bot"
		}
	});
}
