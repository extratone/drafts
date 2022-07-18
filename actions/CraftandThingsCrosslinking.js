// cross linked craft note and things task

// optional configuration of the spaceIdCredentialName - only necessary if you want to use the same action for different Craft Spaces
const spaceIdCredentialName = "CraftDocumentSpace"


let spaceID = getCraftSpaceIdToUse();

let title = draft.displayTitle


let encodedTitle = encodeURIComponent(title)

let content = draft.content

content = encodeURIComponent(content)

var proceed = true;

const craftCreateBaseURL = "craftdocs://x-callback-url/createdocument?"
const craftCreateBlockBaseURL = "craftdocs://createblock?"
const thingsAddBaseURL = "things://x-callback-url/add?"

var cbCreateCraftNote = CallbackURL.create()
cbCreateCraftNote.baseURL = craftCreateBaseURL
cbCreateCraftNote.addParameter("spaceId", spaceID)
cbCreateCraftNote.addParameter("title", title)
cbCreateCraftNote.addParameter("content", content)
cbCreateCraftNote.addParameter("folderId", "")
cbCreateCraftNote.waitForResponse = true

let craftCreateReturn = cbCreateCraftNote.open()

if (craftCreateReturn == true) {
    console.log("Craft note successfully created")
} else {
    proceed = false
    console.log("Craft note result:" + cb.status + " " + cb.callbackResponse)
    if (cb.status == "cancelled") {
        context.cancel()
    } else {
        context.fail()
    }
}

// craft note is created, now create the things task
if (proceed) {

    // retrieve info from craftCreateResult
    let craftCreateResult = cbCreateCraftNote.callbackResponse
    var blockId = craftCreateResult.blockId
    var craftNoteLink = craftCreateResult.link

    let taskNoteStr = "Craft Note: " + craftNoteLink


    var cbAddThingsTask = CallbackURL.create()
    cbAddThingsTask.baseURL = thingsAddBaseURL
    cbAddThingsTask.addParameter("title", title)
    cbAddThingsTask.addParameter("notes", taskNoteStr)
    cbAddThingsTask.waitForResponse = true

    let thingsAddReturn = cbAddThingsTask.open()

    if (thingsAddReturn == true) {
        console.log("Things Task successfully created")
    } else {
        proceed = false
        console.log("Add Things task result:" + cbAddThingsTask.status + " " + cbAddThingsTask.callbackResponse)
        if (cbAddThingsTask.status == "cancelled") {
            context.cancel()
        } else {
            context.fail()
        }
    }
}

// things task added now prepend the link to the previously created craft note
if (proceed) {

    // retrieve info from craftCreateResult
    let thingsAddResult = cbAddThingsTask.callbackResponse

    let showTaskUrl = "things:///show?id=" + thingsAddResult["x-things-id"]

    let openTaskStr = "> Task in Things: [" + title + "](" + showTaskUrl + ")"

    let encodedBlockContent = encodeURIComponent(openTaskStr)

    var cbCreateCraftBlock = CallbackURL.create()
    cbCreateCraftBlock.baseURL = craftCreateBlockBaseURL
    cbCreateCraftBlock.addParameter("spaceId", spaceID)
    cbCreateCraftBlock.addParameter("parentBlockId", blockId)
    cbCreateCraftBlock.addParameter("index", 0)
    cbCreateCraftBlock.addParameter("content", encodedBlockContent)
    cbCreateCraftBlock.waitForResponse = false

    cbCreateCraftBlock.open()
}


function getCraftSpaceIdToUse() {
    let credential = Credential.create(spaceIdCredentialName, "Credential to store the spaceId of the space you want to use in Drafts.\ninsert your spaceId into the TextField below. \n\nNOTES: \n- this is a one time action, you don't need to do it everytime\n- Multiple spaces are currently not supported with this spaceId credential helper");
    credential.addTextField("spaceId", "spaceId");
    if (credential.authorize()) {
        return credential.getValue("spaceId");
    } else {
        let errorStr = "failed storing / retrieving space Id with credential"
        app.displayErrorMessage(errorStr);
        context.fail(errorStr);
        console.log(errorStr);
        return false;
    }
}