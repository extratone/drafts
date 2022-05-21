//Initialise
let astrOutput = [];

//Process each action
Action.TA_getAllActions().forEach(function(acCurrent)
{
	acCurrent.TA_populateMore();
	if (acCurrent._keyShortcut != "") astrOutput.push(`${acCurrent._keyShortcut.padEnd(6)}${acCurrent.name}`);
});	

//Output to a new draft
draft.TA_draftNew(astrOutput.join("\n"), "Plain Text");