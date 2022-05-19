function fetchGistContentToDrafts()
{
	let promptGitHubInfo = Prompt.create();

	promptGitHubInfo.title = "Download Content from Gist";
	promptGitHubInfo.message = "Enter the download details:";
	promptGitHubInfo.addButton("OK");

	promptGitHubInfo.addTextField("ACCOUNT", "GitHub User ID", draft.getTemplateTag("account"));

	if (promptGitHubInfo.show())
	{
		if (promptGitHubInfo.buttonPressed == "OK")
		{
			let tg = new TadGitHub(promptGitHubInfo.fieldValues["ACCOUNT"]);
			tg.TA_gistFetchContentToDrafts(tg.TA_accountSelectGistReturnID());
		}
	}
	return;
}

fetchGistContentToDrafts();