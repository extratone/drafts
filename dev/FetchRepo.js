function fetchGitHubContentToDrafts()
{
	let promptGitHubInfo = Prompt.create();

	promptGitHubInfo.title = "Download Content from Repo";
	promptGitHubInfo.message = "Enter the download details:";
	promptGitHubInfo.addButton("OK");

	promptGitHubInfo.addTextField("ACCOUNT", "GitHub User ID", draft.getTemplateTag("account"));
	promptGitHubInfo.addTextField("REPO", "Repository Name", draft.getTemplateTag("repo"));
	promptGitHubInfo.addTextField("PATH", "File Path", draft.getTemplateTag("path"));

	if (promptGitHubInfo.show())
	{
		if (promptGitHubInfo.buttonPressed == "OK")
		{
			let tg = new TadGitHub(promptGitHubInfo.fieldValues["ACCOUNT"]);
			let objReturn = tg.TA_fileGetContent(promptGitHubInfo.fieldValues["REPO"], promptGitHubInfo.fieldValues["PATH"]);
			if (objReturn.success) draft.TA_draftNew(objReturn.content);
			else app.TA_msgError(objReturn.content);
		}
	}
	return;
}

fetchGitHubContentToDrafts();