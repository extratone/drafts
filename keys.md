# Drafts Keyboard Shortcuts
Last Updated `05212022-183426`

//Initialise
let astrOutput = [];

//Process each action
Action.TA_getAllActions().forEach(function(acCurrent)
{
	acCurrent.TA_populateMore();
	if (acCurrent._keyShortcut != "") astrOutput.push(`- ${acCurrent._keyShortcut}----${acCurrent.name}`);
});	

//Output to a new draft
draft.setTemplateTag("klist", (astrOutput.join("\n"), "Plain Text"));

---
[Local](drafts://open?uuid=6970F02D-43E6-4E0F-AE58-0CD454C8A40A)