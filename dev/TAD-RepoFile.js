function addDraftToGitHub()
{
	let promptGitHubInfo = Prompt.create();

	promptGitHubInfo.title = "Upload Draft to Repo";
	promptGitHubInfo.message = "Enter the upload details:";
	promptGitHubInfo.addButton("OK");

	promptGitHubInfo.addTextField("ACCOUNT", "GitHub User ID", draft.getTemplateTag("account"));
	promptGitHubInfo.addTextField("REPO", "Repository Name", draft.getTemplateTag("repo"));
	promptGitHubInfo.addTextField("PATH", "File Path", draft.processTemplate("[[safe_title]]") + ".txt");
	promptGitHubInfo.addTextField("COMMIT", "Commit comment", "");
	promptGitHubInfo.addSwitch("OVERWRITE", "Allow Overwrite?", false);

	if (promptGitHubInfo.show())
	{
		if (promptGitHubInfo.buttonPressed == "OK")
		{
			let tg = new TadGitHub(promptGitHubInfo.fieldValues["ACCOUNT"]);
			let objReturn;
			//Update (including add) or only add if not already there?
			if (promptGitHubInfo.fieldValues["OVERWRITE"]) objReturn = tg.TA_fileUpdate(promptGitHubInfo.fieldValues["REPO"], promptGitHubInfo.fieldValues["PATH"], draft.content, promptGitHubInfo.fieldValues["COMMIT"]);
			else objReturn = tg.TA_fileAdd(promptGitHubInfo.fieldValues["REPO"], promptGitHubInfo.fieldValues["PATH"], draft.content, promptGitHubInfo.fieldValues["COMMIT"]);

			if(objReturn.message == undefined) app.displayInfoMessage("Push complete");
			else app.TA_msgError(objReturn.message);
		}
	}
	return;
}

addDraftToGitHub();