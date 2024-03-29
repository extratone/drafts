

## Markdown

### Markdown Header (#)
**Type:** Action  
**Keyboard Shortcut:** ⌃⌘H  
**Icon:** hashtag  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 5C8ADAD0-B444-4871-A584-835AEB308625  
**Description:**  
Increase Markdown header level of current line by adding a “#” at the beginning. If the line is currently at the maximum 6 levels of heading, remove the leading header characters.


### Markdown Bold (**)
**Type:** Action  
**Keyboard Shortcut:** ⌘B  
**Icon:** format-bold  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 34BFE77C-4290-4949-A761-A32951304B7F  
**Description:**  
Apply Markdown bold (**) around selection, or insert ** if no selection.


### Markdown Emphasis (_)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** AA3D7BF9-6EB3-4194-B04D-BAF4D52648C7  
**Description:**  
Apply Markdown emphasis (_) to selection or insert _ if no selection.


### Markdown List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** CD247F5D-2026-4187-B02B-8A05A1BF01F3  
**Description:**  
Toggle Markdown list for selected lines, maintaining indentation.


### Markdown Link (Rosemary Orchard)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** link  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 9E64F0E5-AE91-4B37-8357-989A35693EDD  
**Description:**  
Insert Markdown link “[]()”. If there is a text selection, use it as the link text, if a URL is in the clipboard, place it as the link.


### Markdown Quotation (>)
**Type:** Action  
**Keyboard Shortcut:** ⌃Q  
**Icon:** caret-right  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 69593512-80FD-4BA4-ACAC-70A52CE24504  
**Description:**  
Apply Markdown Quote (“> “) at beginning of selected lines.


### Inline Code (`)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** command  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F3A5720C-CED5-47C4-8A20-635DCAA0A826  
**Description:**  
Apply Markdown inline code (\`) around selection, or insert \` if no selection.


### Code Block (```)
**Type:** Action  
**Keyboard Shortcut:** ⌃⌘C  
**Icon:** command  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 3FF86D6C-6EDB-4CE3-8FD8-BF59CCDE2E09  
**Description:**  
Apply Markdown fenced code block (\```) around selection, or insert empty block if no selection.


### Markdown Table
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** border-all  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 09C6D7F6-3143-47BD-B652-677B7799C876  
**Description:**  
Insert empty MultiMarkdown table markup. The action will prompt for the number of rows and columns, and create and insert MultiMarkdown table syntax for the table with header of the requested size, like:

```
|  |  |  |
|:--|:--|:--|
|  |  |  |
|  |  |  |
```


### Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** AAA90F33-B1DF-4B59-86D7-B8F291075A64  
**Description:**  



### Preview
**Type:** Action  
**Keyboard Shortcut:** ⌥⌘P  
**Icon:** eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** EF72A48A-326E-4939-8E08-A7A91B46F856  
**Description:**  
Markdown preview which builds some css styles based on current dark or light mode.


### Preview with Line Highlight
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1EB0A7B8-7574-4CEA-9338-5A5ADB9C357C  
**Description:**  
Markdown preview which builds some css styles based on current dark or light mode.

This example adds `<mark>` tag surrounding the text of the selected line.


### Preview (with MathJax)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 3DD4FA90-8965-43F5-B828-28ED4DEC07BC  
**Description:**  
Markdown preview which builds some css styles based on current dark or light mode. The template of this included [MathJax](https://www.mathjax.org) to render equations.  MathJax support can be added to any HTML Preview by including the below script tags in the <head> of the HTML document generated by the HTML Preview.


```plain
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script> 
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```


### Swiss Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 79D00139-B9A5-4025-B00F-3CBE8DBE2E4F  
**Description:**  
Markdown preview using Swiss style.


### Foghorn Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B473B3FF-151D-46BC-B94D-75BE35774C45  
**Description:**  
Markdown preview using the Foghorn style.


### Utility
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** D4F69548-3025-4672-8D8A-78BA619ECDA7  
**Description:**  



### Copy as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** C6469F41-23CD-400F-A9D8-19BC1945BE04  
**Description:**  
Run draft through Markdown conversation and copy HTML to clipboard.


### Copy as Rich Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_markdown  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 71DFFCB3-FA2A-4C16-BD45-EF9DA90F1BF9  
**Description:**  
Convert Markdown draft to rich text and place in clipboard.k


### Markdown Mail
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 900AAA94-E93A-4EE9-ADF2-C9B803D874A3  
**Description:**  
Open mail message with the first line of the draft as the subject and remaining content as the body converted to HTML via Markdown.  Can be duplicated and modified to create pre-addressed messages, or use templates.


### URL to Markdown Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 140BF33D-DF73-4529-90F6-78D95C3BE623  
**Description:**  
This action makes a link in Markdown from a selected URL.

The link’s text is the Title of the page fetched from the URL.

For example:


    http://dobyfriday.com

Becomes:

    [Do By Friday](http://dobyfriday.com)


### Markdown Header (#)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 7402453B-206F-46BD-94C1-326EBEE88F38  
**Description:**  
Add “#” at beginning of line to create Markdown header. Use more than once to add heading levels.


### Markdown Bold (**)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-bold  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 51F96D16-A242-46AF-AD51-9F491A82A755  
**Description:**  
Apply Markdown bold (**) around selection, or insert ** if no selection.


### Markdown Emphasis (*)
**Type:** Action  
**Keyboard Shortcut:** ⌘I  
**Icon:** format-italic  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B0C14E99-E0FC-4945-9D4F-D129079CD749  
**Description:**  
Apply Markdown emphasis (_) to selection or insert _ if no selection.


### Markdown List
**Type:** Action  
**Keyboard Shortcut:** ⌃L  
**Icon:** list  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 87767E40-575C-4BA4-AE03-F82EF6204963  
**Description:**  
Toggle Markdown list for selected lines, maintaining indentation.


### Markdown Link
**Type:** Action  
**Keyboard Shortcut:** ⌘K  
**Icon:** link  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 377E55A7-F174-4928-AE16-448927010E34  
**Description:**  
Insert Markdown link “[]()”. If there is a text selection, use it as the link text, if a URL is in the clipboard, place it as the link.


### Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 6F36B042-E6BF-4B9C-81C9-540946ADDD47  
**Description:**  



### Swiss Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 344A5706-B408-449B-ACC3-803F32974A23  
**Description:**  
Markdown preview using Swiss style.


### Foghorn Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** eye  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 581C19FF-1CF4-497C-9AB7-D667F5FE9D92  
**Description:**  
Markdown preview using the Foghorn style.


### Replace URLs by MD links
**Type:** Action  
**Keyboard Shortcut:** ⇧⌘U  
**Icon:** action_url  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 3  
**Unique ID:** DF34C253-D375-4BA4-986C-992AEDEA76EB  
**Description:**  
Detects all URLs in a draft and replaces them with a [title](url) markdown link if the title exists. (Pages like google.com don’t seem to have a title)
Uses a regex pattern already used by @complexpoint in a similar fashion.
Uses @sylummer ‘s very wide ranging [TADPole library](https://www.thoughtasylum.com/tadpole/)


### Markdown Footnote (Variation)
**Type:** Action  
**Keyboard Shortcut:** ⌃F  
**Icon:** ellipsis  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 14F1A79A-095C-484F-95BB-3F0AAA8775D6  
**Description:**  
A slight variation of [@pdavisonreiber‘s Markdown Footnote Action](https://directory.getdrafts.com/a/1L5) which uses reference links formatted without ^ or : at the bottom of the document. (`[1]` instead of `[^1]:`)

*The original action’s description, modified accordingly:*

Insert Markdown footnote `[^1]` in the text and add `[1]` at the end of the document. If there is text selected, move it to the footnote at the end of the document. Numbers used for references automatically increment each time.


### Markdown Footnote
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** ellipsis  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** AA6C5FCE-9216-44E9-B2C8-944EB77F3850  
**Description:**  
Insert Markdown footnote `[^1]` in the text and add `[^1]: ` at the end of the document. If there is text selected, move it to the footnote at the end of the document. Numbers used for references automatically increment each time.


### Table of Contents
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** DA0A13CD-195A-4533-BEB0-12B70AAAFB43  
**Description:**  
Insert a table of contents based on Markdown headers.

Put the placeholder <!-- start toc --><!-- end toc --> where you want the table of contents to appear.

You can run it multiple times and it will update the table of contents.

If you don't use a placeholder, the table of contents will be inserted before the first non-title header.

This is similar to the {{TOC}} feature if you are using the MultiMarkdown renderer (the default), except it will put your table of contents in the Draft, not just previews.


### Make Markdown Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B77173D3-18AA-469F-B188-1EE99638E6CE  
**Description:**  
Scan the current line for a URL. If one is found, make an HTTP request to retrieve the web page, scan it for the `<title>` tag, and create Markdown link for the URL with the page title as the link text.

#### Example

Running on the line:

```
https://getdrafts.com/
```

Would transform it to:

```
[Drafts | Where Text Starts](https://getdrafts.com)
```


===
## The Psalms

### Action Search
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** search  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 079FAC47-6520-4AE9-89DF-0474063ECAC7  
**Description:**  



### Send to Saved Messages (Telegram)
**Type:** Action  
**Keyboard Shortcut:** ⌃G  
**Icon:** chat-message  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E804AA1D-DA2A-4A17-ACB5-3AEB870B3380  
**Description:**  
Send draft to Telegram, opens my personal Saved Messages chat via my phone number.


### To Raindrop via Telegram
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chat-message  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 39EF4050-F835-43EE-B185-558875CBFB04  
**Description:**  
Send draft to Telegram, opens my personal Saved Messages chat via my phone number.


### Tweet with Tweetbot
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 72DB584D-B507-4C5D-B4DC-41F61BF6B0CB  
**Description:**  
Send to Tweetbot compose window.


### Embed <audio> Element
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 565-cassette-tape  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 14A40371-7C9C-472C-9DC5-E844A26B81D8  
**Description:**  
`Version 0.1`
Assuming the URL to an audio file is in your clipboard, this action uses said URL as the source file for an embedded audio player using the `<audio>` element.

* [`<audio>` Element Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
## Steps
1. Insert Text:
```
<audio controls>
  <source src="">
</audio>
```
## Contact/Feedback
* [My profile on the Drafts Community Forums](https://forums.getdrafts.com/u/blue)
* [This Action’s Issue on my iOS-specific GitHub Repository](https://github.com/extratone/i/issues/51)

### Extra Details
- **Drafts Version:** 26.2.4
- **Drafts Subscription:** Pro
- **Device:** iPhone
- **Operating System:** iOS 
- **OS Build:** 14.5


### iDocs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** A68F960D-5EDC-45D8-9898-E68B173AAFC0  
**Description:**  
Sends to my iCloud email address from Outlook.


### iDocs (copy)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 38EB1260-84A3-4112-B9AB-CA2B6F4338F3  
**Description:**  
Sends to my iCloud email address from Outlook.


### Strikethrough
**Type:** Action  
**Keyboard Shortcut:** ⌃S  
**Icon:** format-strikethrough  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 7FD88B8E-AB4F-4839-A395-9444974A2D1C  
**Description:**  
Markdown for striking text out.  Adds “~~” to the beginning of a line or the beginning and end of a selected block of text. 


### The Psalms Custom Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_preview  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F7E0CA10-02A1-4469-A940-CE3E10BB18CE  
**Description:**  
Read CSS file named “markdown-style.css” in the iCloud “Drafts5” folder, and use it as the style for a Markdown preview. 


### TAD-Insert yyyy-mm-dd
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-date  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 25637BED-D8FA-4483-9132-68F6DA426F22  
**Description:**  
Insert a date stamp in the format yyyy-mm-dd


### TAD-Insert Drafts Version
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F9CFBB2C-882E-4723-A65E-D06FD0213191  
**Description:**  
Insert the Drafts app version.


### TAD-Deduplicate All (Lines)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-merge  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FA6BAA77-07F3-4EF7-A0AC-9EB172C24083  
**Description:**  
Deduplicates lines in the order they occur.  i.e. only the first instance of the line will be retained.
This action does *not* sort the content.


### Append comment to Todoist task
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** commit  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 3BE24787-AA7C-4387-9FE9-3EFB1250E365  
**Description:**  
### "Drafts Directory: Append comment to Todoist task" 

//heavily borrowing from AgileTortoise's Import Project script //Draft appends as comment to an existing task in Todoist // utility function let mapIds = (arr, key, valKey) => { let result = {}; arr.forEach(o => { result[o[key]] = o[valKey]; }) return result; } let f = () => { // create Todoist object and load projects let todoist = Todoist.create(); let projects = todoist.getProjects(); if (!projects) { console.log("Unable to retreive data from Todoist."); return false; } // create prompt let p = Prompt.create(); p.title = "Select Project"; // add projects let projectLookup = mapIds(projects, "name", "id"); let projectNames = Object.keys(projectLookup); p.addPicker("project", "Project", [projectNames], [0]); p.addButton("Select"); if (!p.show()) { context.cancel(); return true; } // read values from prompt let projectIndex = p.fieldValues["project"][0]; let projectName = projectNames[projectIndex]; let projectID = projectLookup[projectName]; let tasks = todoist.getTasks({ "project_id": projectID }); if (!tasks) { alert("No tasks in this project"); return false; } //create tasks prompt let pTasks = Prompt.create(); pTasks.title = "Select Task"; //add tasks let taskLookup = mapIds(tasks, "content", "id"); let taskNames = Object.keys(taskLookup); pTasks.addPicker("task", "Task", [taskNames], [0]); pTasks.addButton("Select"); if (!pTasks.show()) { context.cancel(); return true; } //read values from task prompt let taskIndex = pTasks.fieldValues["task"][0]; let taskName = taskNames[taskIndex]; let taskID = taskLookup[taskName]; //add comment let comment = todoist.createComment({ "task_id": taskID, "content": draft.content }); console.log(`Comment added to ${taskName} in ${projectName}`); } if (!f()) { context.fail(); } 

-"[Drafts Directory: Append comment to Todoist task](https://actions.getdrafts.com/a/1aR)"


### Send to Telegram
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chat-message  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 87D854F8-DE94-4FA8-8A40-E11C486CA831  
**Description:**  
Send draft to Telegram, opens the contacts page, pick a contact and draft will be on the input field. 


### Create Gist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** E4C2CEA6-283F-46FB-915C-41E39218BD9C  
**Description:**  
TAD-Create GitHub Gist from Draft

> Create a new GitHub gist from the current draft. You can run this action stand alone, but you can also include it and call it with a template action step set for the GitHub user ID (`account`).


### Fetch Gists
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 487226D3-BDD7-4F70-9A12-F4153319AB7E  
**Description:**  
Fetch the content of a GitHub gist to new drafts - one draft per file. You can run this action stand alone, but you can also include it and call it with a template action step to set for the GitHub user ID (`account`). The action includes a window that lets you select a gist by description.


### Drafts 5 Scripting API Documentation
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 460-api2  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A9ABDF69-8D55-4404-A5DC-112D285955A9  
**Description:**  
Displays a menu for selecting Documentation page and opens an in app web browser to display selected page. 


### Keyboard Shortcuts Export
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃K  
**Icon:** 341-keyboard  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 50C15556-3561-443D-BB49-F7FC1245DE3A  
**Description:**  



### List Action Shortcuts, Comma-Delimited
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 356-signpost  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8F2BF88E-825E-4954-B958-B5AA4C7D63D1  
**Description:**  
A modified version of TAD-List Action Shortcuts that exports a **comma-delimited** list of keyboard shortcuts instead of using `: `.

Original description:

Ouput details of all actions with keyboard shortcuts to a new draft. Action name is followed by a colon, a space, and then the keyboard shortcut. Also deals with special key triggers (arrow keys and tab).


### Timestamp
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃T  
**Icon:** 598-clock  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F9A840DA-C465-4E7A-B173-1E537F6A9010  
**Description:**  
TAD-Insert yyyy-mm-dd


### Selection Word Count
**Type:** Action  
**Keyboard Shortcut:** ⌃W  
**Icon:** 585-calculator  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** ADD2D656-8E11-4466-BEB7-FD02C03AC9DF  
**Description:**  
TAD-Selection Word Count


### Trash
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 636-trash  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** AB369272-D52E-486D-A87F-84E244D7DEFB  
**Description:**  
TAD-Trash Note


### Search Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** search  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 229A9C12-0850-4443-ABBF-646096D0A6BB  
**Description:**  
TAD-Search Actions


### Drafts Link
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃C  
**Icon:** action_url  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 9782726D-C842-4682-A71E-43BC465FE234  
**Description:**  
TAD-Copy Draft Link


### Last Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-back  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 7A48C342-E889-423A-8B6D-7507528C826C  
**Description:**  
TAD-Load Previous Workspace


### Next Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** briefcase-next  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 02C9F9C8-9652-4095-B210-548FD19B58DA  
**Description:**  
TAD-Load Next Workspace


### Draft Info
**Type:** Action  
**Keyboard Shortcut:** ⌃I  
**Icon:** 442-information-symbol1  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** D6051232-53DB-4159-8045-2C776E28D39E  
**Description:**  
TAD-Show Draft Info


### Dark/Light Toggle
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃L  
**Icon:** lighter  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** B45E79C6-FEA0-4E5A-9DAC-897040071A17  
**Description:**  
TAD-Toggle App Theme


### Typewriter Toggle
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** typewriter  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** DC48EDE7-8B92-4B6E-832D-43B386D2748D  
**Description:**  
TAD-Toggle Typewriter Mode


### Fetch URL Content to New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down-double  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** C49A4147-5478-430C-AB8C-F6B2E0B0B546  
**Description:**  
TAD-Fetch URL Content to New Draft


### Import File
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** file-badge  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 5ABCC386-0CF7-489B-8037-CBBF82E021AA  
**Description:**  
TAD-File Import With Tags


### Load The Psalms
**Type:** Action  
**Keyboard Shortcut:** ⌥.  
**Icon:** checkbox  
**Colour:** pink  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** B24FAC3A-CEE8-4BA4-AC65-3365DDEC0846  
**Description:**  
`app.TA_loadActionListByName("ThoughtAsylum - Power User");`


### Draft Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** link  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 19A9B6E4-42C5-45FF-8908-849C25C4995C  
**Description:**  
TAD-Link for Draft (Title)


### Preview MMD
**Type:** Action  
**Keyboard Shortcut:** ⌥⌘/  
**Icon:** branch  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 7FF25B9B-A198-49E8-930F-B5E11BF74936  
**Description:**  
TAD-Prime Preview MMD


### Load Most Changed Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** ribbon  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** C2BCAF85-15FE-4103-901D-2D816CCBE444  
**Description:**  
TAD-Load Most Changed Draft


### Restore Psalms Action Group
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** cancel  
**Colour:** none  
**Confirm to Run:** true  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** A80E0256-7756-4A2C-A3AB-533DB97D4902  
**Description:**  
Sortof a potential recovery method for this Action Group, I suppose.

```

drafts5://actionGroup?data=%7B%22name%22:%22The%20Psalms%22,%22hidden%22:false,%22tintColor%22:%22blue%22,%22actions%22:%5B%7B%22uuid%22:%2214A40371-7C9C-472C-9DC5-E844A26B81D8%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22template%22:%22%3Caudio%20controls%3E%5Cn%20%20%3Csource%20src%3D%5C%22%5B%5Bclipboard%5D%5D%5C%22%3E%5Cn%3C%5C/audio%3E%22%7D,%22type%22:%22insertText%22,%22isEnabled%22:true,%22uuid%22:%225C5CE284-9E32-41B1-B6A9-A1AB095D1720%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22A%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Embed%20%3Caudio%3E%20Element%22,%22shiftKey%22:true%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22violet%22,%22actionDescription%22:%22%60Version%200.1%60%5CnAssuming%20the%20URL%20to%20an%20audio%20file%20is%20in%20your%20clipboard,%20this%20action%20uses%20said%20URL%20as%20the%20source%20file%20for%20an%20embedded%20audio%20player%20using%20the%20%60%3Caudio%3E%60%20element.%5Cn%5Cn*%20%5B%60%3Caudio%3E%60%20Element%20Documentation%5D(https:%5C/%5C/developer.mozilla.org%5C/en-US%5C/docs%5C/Web%5C/HTML%5C/Element%5C/audio)%5Cn%23%23%20Steps%5Cn1.%20Insert%20Text:%5Cn%60%60%60%5Cn%3Caudio%20controls%3E%5Cn%20%20%3Csource%20src%3D%5C%22%5C%22%3E%5Cn%3C%5C/audio%3E%5Cn%60%60%60%5Cn%23%23%20Contact%5C/Feedback%5Cn*%20%5BMy%20profile%20on%20the%20Drafts%20Community%20Forums%5D(https:%5C/%5C/forums.getdrafts.com%5C/u%5C/blue)%5Cn*%20%5BThis%20Action%E2%80%99s%20Issue%20on%20my%20iOS-specific%20GitHub%20Repository%5D(https:%5C/%5C/github.com%5C/extratone%5C/i%5C/issues%5C/51)%5Cn%5Cn%23%23%23%20Extra%20Details%5Cn-%20**Drafts%20Version:**%2026.2.4%5Cn-%20**Drafts%20Subscription:**%20Pro%5Cn-%20**Device:**%20iPhone%5Cn-%20**Operating%20System:**%20iOS%20%5Cn-%20**OS%20Build:**%2014.5%22,%22keyUseIcon%22:true,%22icon%22:%22565-cassette-tape%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Embed%20%3Caudio%3E%20Element%22%7D,%7B%22uuid%22:%22A68F960D-5EDC-45D8-9898-E68B173AAFC0%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22oauthIdentifier%22:%22%22,%22ccRecipients%22:%22ihadtopee@gmail.com%22,%22toRecipients%22:%22asphaltapostle@icloud.com%22,%22subject%22:%22%E2%80%9C%5B%5Btitle%5D%5D%E2%80%9D%20%7C%20%5B%5Bdate%5D%5D,%5B%5Btime%5D%5D%22,%22bccRecipients%22:%22%22,%22sendAsHTML%22:%22true%22,%22body%22:%22%5B%5Btitle%5D%5D%5Cn%5Cn%5B%5Bbody%5D%5D%5Cn%5Cn%3E%20%5B%5Bselection%5D%5D%5Cn%5Cn***%5Cn%5B%5Btags%5D%5D%5Cn%5B%5Buuid%5D%5D%22%7D,%22type%22:%22outlook%22,%22isEnabled%22:true,%22uuid%22:%22A1284106-73DB-482D-86E9-DBFD8F1C4EE0%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22iDocs%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22indigo%22,%22actionDescription%22:%22Sends%20to%20my%20iCloud%20email%20address%20from%20Outlook.%22,%22keyUseIcon%22:false,%22icon%22:%22format-italic%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22iDocs%22%7D,%7B%22uuid%22:%227FD88B8E-AB4F-4839-A395-9444974A2D1C%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22script%22:%22%5C/%5C/%20See%20online%20documentation%20for%20examples%5Cn%5C/%5C/%20http:%5C/%5C/getdrafts.com%5C/scripting%5Cn%5Cn%5C/%5C/%20Apply%20Markdown%20strike%20to%20selection,%20or%20insert%20~~%20if%20no%20selection%5Cnlet%20markup%20%3D%20%5C%22~~%5C%22;%5Cn%5Cnvar%20sel%20%3D%20editor.getSelectedText();%5Cnvar%20selRange%20%3D%20editor.getSelectedRange();%5Cn%5Cnif%20(!sel%20%7C%7C%20sel.length%20%3D%3D%200)%20%7B%5Cn%20%20editor.setSelectedText(markup);%5Cn%20%20editor.setSelectedRange(selRange%5B0%5D+markup.length,0);%5Cn%7D%5Cnelse%20%7B%5Cn%20%20editor.setSelectedText(markup+sel+markup);%5Cn%20%20editor.setSelectedRange(selRange%5B0%5D+selRange%5B1%5D+(markup.length*2),0);%5Cn%7D%22%7D,%22type%22:%22script%22,%22isEnabled%22:true,%22uuid%22:%22E9E83376-D73D-4657-B694-6D13568E3574%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:0,%22keyCommand%22:%7B%22optionKey%22:true,%22input%22:%22S%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Strikethrough%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22red%22,%22actionDescription%22:%22Markdown%20for%20striking%20text%20out.%20%20Adds%20%E2%80%9C~~%E2%80%9D%20to%20the%20beginning%20of%20a%20line%20or%20the%20beginning%20and%20end%20of%20a%20selected%20block%20of%20text.%20%22,%22keyUseIcon%22:true,%22icon%22:%22format-strikethrough%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Strikethrough%22%7D,%7B%22uuid%22:%22FA2FE221-18DA-4A8A-99E8-ED496D6B8A11%22,%22steps%22:%5B%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22empty%22,%22discoverabilityTitle%22:%22Invalid%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22none%22,%22actionDescription%22:%22%22,%22keyUseIcon%22:false,%22icon%22:%22%22,%22visibility%22:480,%22backingIsSeparator%22:true,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Workspace%20Switcher%20(copy)%22%7D,%7B%22uuid%22:%22F7E0CA10-02A1-4469-A940-CE3E10BB18CE%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22script%22:%22%5C/%5C/%20read%20stylesheet%20from%20file%20in%20iCloud%5Cnvar%20fm%20%3D%20FileManager.create(false);%5Cnvar%20css%20%3D%20fm.read(%5C%22markdown-style.css%5C%22);%5Cn%5Cn%5C/%5C/%20place%20in%20template%20tag%5Cndraft.setTemplateTag(%5C%22css%5C%22,%20css);%5Cn%22,%22allowAsync%22:%22false%22%7D,%22type%22:%22script%22,%22isEnabled%22:true,%22uuid%22:%22DC783629-4418-4068-8256-EBD1E360D30A%22%7D,%7B%22platforms%22:3,%22data%22:%7B%22template%22:%22%3C!DOCTYPE%20html%3E%5Cn%3Chtml%20dir%3D%5C%22auto%5C%22%3E%5Cn%3Chead%3E%5Cn%3Ctitle%3EPreview%3C%5C/title%3E%5Cn%3Cmeta%20name%3D%5C%22viewport%5C%22%20content%3D%5C%22width%3Ddevice-width,%20initial-scale%3D1%5C%22%3E%5Cn%3Cstyle%3E%5Cn%5B%5Bcss%5D%5D%5Cn%3C%5C/style%3E%5Cn%3C%5C/head%3E%5Cn%3Cbody%3E%5Cn%20%20%25%25%5B%5Bdraft%5D%5D%25%25%5Cn%3C%5C/body%3E%5Cn%3C%5C/html%3E%5Cn%22,%22hideInterface%22:%22true%22%7D,%22type%22:%22htmlpreview%22,%22isEnabled%22:true,%22uuid%22:%22BDDD58CB-0811-4F17-B5A1-449FF157EC6D%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22Preview%22,%22shouldConfirm%22:false,%22disposition%22:0,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22P%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22The%20Psalms%20Custom%20Preview%22,%22shiftKey%22:true%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22blue%22,%22actionDescription%22:%22Read%20CSS%20file%20named%20%E2%80%9Cmarkdown-style.css%E2%80%9D%20in%20the%20iCloud%20%E2%80%9CDrafts5%E2%80%9D%20folder,%20and%20use%20it%20as%20the%20style%20for%20a%20Markdown%20preview.%20%22,%22keyUseIcon%22:false,%22icon%22:%22action_preview%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22The%20Psalms%20Custom%20Preview%22%7D,%7B%22uuid%22:%2225637BED-D8FA-4483-9132-68F6DA426F22%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22template%22:%22%5B%5Bdate%7C%20%25Y-%25m-%25d%5D%5D%22%7D,%22type%22:%22insertText%22,%22isEnabled%22:true,%22uuid%22:%22BC769CE6-6C81-4360-A42D-F0B06A482473%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22TAD-Insert%20yyyy-mm-dd%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22orange%22,%22actionDescription%22:%22Insert%20a%20date%20stamp%20in%20the%20format%20yyyy-mm-dd%22,%22keyUseIcon%22:false,%22icon%22:%22calendar-date%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22TAD-Insert%20yyyy-mm-dd%22%7D,%7B%22uuid%22:%22F9CFBB2C-882E-4723-A65E-D06FD0213191%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22script%22:%22draft.setTemplateTag(%5C%22version%5C%22,%20app.version);%22,%22allowAsync%22:%22false%22%7D,%22type%22:%22script%22,%22isEnabled%22:true,%22uuid%22:%224A209E56-08C7-4029-A783-AA8FE9C10406%22%7D,%7B%22platforms%22:3,%22data%22:%7B%22template%22:%22%5B%5Bversion%5D%5D%22%7D,%22type%22:%22insertText%22,%22isEnabled%22:true,%22uuid%22:%22160757F2-4D01-4CB7-99BD-291BC914F38F%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:0,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22TAD-Insert%20Drafts%20Version%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22gray%22,%22actionDescription%22:%22Insert%20the%20Drafts%20app%20version.%22,%22keyUseIcon%22:true,%22icon%22:%22info%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22TAD-Insert%20Drafts%20Version%22%7D,%7B%22uuid%22:%22FA6BAA77-07F3-4EF7-A0AC-9EB172C24083%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%2237341FCD-D3D3-4412-ADA2-57A70F775BE9%22%7D,%7B%22platforms%22:3,%22data%22:%7B%22script%22:%22draft.TA_deduplicateLines();%22,%22allowAsync%22:%22false%22%7D,%22type%22:%22script%22,%22isEnabled%22:true,%22uuid%22:%2210D57B6A-A015-4B7D-A224-98E8E5EDB55E%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22TAD-Deduplicate%20All%20(Lines)%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22red%22,%22actionDescription%22:%22Deduplicates%20lines%20in%20the%20order%20they%20occur.%20%20i.e.%20only%20the%20first%20instance%20of%20the%20line%20will%20be%20retained.%5CnThis%20action%20does%20*not*%20sort%20the%20content.%22,%22keyUseIcon%22:true,%22icon%22:%22arrow-merge%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22TAD-Deduplicate%20All%20(Lines)%22%7D,%7B%22uuid%22:%22E4C2CEA6-283F-46FB-915C-41E39218BD9C%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Create%20GitHub%20Gist%20from%20Draft%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22BEB094A7-BB8C-4E70-8CED-9F66AA845B4F%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Create%20Gist%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22orange%22,%22actionDescription%22:%22TAD-Create%20GitHub%20Gist%20from%20Draft%5Cn%5Cn%3E%20Create%20a%20new%20GitHub%20gist%20from%20the%20current%20draft.%20You%20can%20run%20this%20action%20stand%20alone,%20but%20you%20can%20also%20include%20it%20and%20call%20it%20with%20a%20template%20action%20step%20set%20for%20the%20GitHub%20user%20ID%20(%60account%60).%22,%22keyUseIcon%22:false,%22icon%22:%22488-github%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Create%20Gist%22%7D,%7B%22uuid%22:%22487226D3-BDD7-4F70-9A12-F4153319AB7E%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Fetch%20GitHub%20Gist%20Files%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22F6E06C19-7DEB-4665-8A97-8145C15A72D6%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Fetch%20Gists%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22violet%22,%22actionDescription%22:%22Fetch%20the%20content%20of%20a%20GitHub%20gist%20to%20new%20drafts%20-%20one%20draft%20per%20file.%20You%20can%20run%20this%20action%20stand%20alone,%20but%20you%20can%20also%20include%20it%20and%20call%20it%20with%20a%20template%20action%20step%20to%20set%20for%20the%20GitHub%20user%20ID%20(%60account%60).%20The%20action%20includes%20a%20window%20that%20lets%20you%20select%20a%20gist%20by%20description.%22,%22keyUseIcon%22:false,%22icon%22:%22488-github%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Fetch%20Gists%22%7D,%7B%22uuid%22:%22A9ABDF69-8D55-4404-A5DC-112D285955A9%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22script%22:%22%5C/%5C/%20See%20online%20documentation%20for%20examples%5Cn%5C/%5C/%20https:%5C/%5C/reference.getdrafts.com%5C/%5Cn%5Cnvar%20base%20%3D%20%5C%22https:%5C/%5C/reference.getdrafts.com%5C/objects%5C/%5C%22;%5Cn%5Cnvar%20opts%20%3D%20%5B%5C%22Action%5C%22,%20%5C%22ActionGroup%5C%22,%20%5C%22Alarm%5C%22,%20%5C%22App%5C%22,%20%5C%22Box%5C%22,%20%5C%22Calendar%5C%22,%20%5C%22CallbackURL%5C%22,%20%5C%22Console%5C%22,%20%5C%22Context%5C%22,%20%5C%22Credential%5C%22,%20%5C%22Device%5C%22,%20%5C%22Draft%5C%22,%20%5C%22Dropbox%5C%22,%20%5C%22Editor%5C%22,%20%5C%22Event%5C%22,%20%5C%22FileManager%5C%22,%20%5C%22Global%5C%22,%20%5C%22GoogleDrive%5C%22,%20%5C%22HTTP%5C%22,%20%5C%22HTTPResponse%5C%22,%20%5C%22Mail%5C%22,%20%5C%22Message%5C%22,%20%5C%22MultiMarkdown%5C%22,%20%5C%22OneDrive%5C%22,%20%5C%22Prompt%5C%22,%20%5C%22Reminder%5C%22,%20%5C%22ReminderList%5C%22,%20%5C%22Things%5C%22,%20%5C%22Todoist%5C%22,%20%5C%22Twitter%5C%22,%20%5C%22Wordpress%5C%22,%20%5C%22Workspace%5C%22,%20%5C%22XMLRPC%5C%22,%20%5C%22XMLRPCResponse%5C%22%5D;%5Cn%5Cnvar%20p%20%3D%20Prompt.create();%5Cn%5Cnp.title%20%3D%20%5C%22Drafts%205%5C%22;%5Cnp.message%20%3D%20%5C%22Scripting%20documentation%20index%5C%22;%5Cn%5Cnvar%20i%20%3D%200;%5Cnwhile%20(i%20%3C%20opts.length)%7B%5Cn%5Ctp.addButton(opts%5Bi%5D);%5Cn%5Cti++;%5Cn%7D;%5Cn%5Cnvar%20didSelect%20%3D%20p.show();%5Cn%5Cnvar%20url%20%3D%20base%20+%20p.buttonPressed%20+%20%5C%22.html%5C%22;%5Cn%5Cnif%20(didSelect)%20%7B%5Cn%20%20%20%20app.setClipboard(url);%5Cn%7D%20else%20%7B%5Cn%20%20%20%20context.cancel();%5Cn%7D;%22%7D,%22type%22:%22script%22,%22isEnabled%22:true,%22uuid%22:%22B2BBC06F-E8A1-4AF3-8236-8A8EB264DF7C%22%7D,%7B%22platforms%22:3,%22data%22:%7B%22template%22:%22%5B%5Bclipboard%5D%5D%22,%22useSafari%22:%22true%22,%22encodeTags%22:%22false%22%7D,%22type%22:%22url%22,%22isEnabled%22:true,%22uuid%22:%22BF2069E2-1E0D-4EC0-A3FC-D504C847B2A5%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22API%20Docs%22,%22shouldConfirm%22:false,%22disposition%22:0,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Drafts%205%20Scripting%20API%20Documentation%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22violet%22,%22actionDescription%22:%22Displays%20a%20menu%20for%20selecting%20Documentation%20page%20and%20opens%20an%20in%20app%20web%20browser%20to%20display%20selected%20page.%20%22,%22keyUseIcon%22:true,%22icon%22:%22460-api2%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Drafts%205%20Scripting%20API%20Documentation%22%7D,%7B%22uuid%22:%2250C15556-3561-443D-BB49-F7FC1245DE3A%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-List%20Action%20Shortcuts%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%224531949E-5B2A-4195-ABBF-715D87E2D00E%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Keyboard%20Shortcuts%20Export%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22gray%22,%22actionDescription%22:%22%22,%22keyUseIcon%22:false,%22icon%22:%22341-keyboard%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Keyboard%20Shortcuts%20Export%22%7D,%7B%22uuid%22:%22F9A840DA-C465-4E7A-B173-1E537F6A9010%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Insert%20yyyy-mm-dd%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22F8A1E5BC-F328-4D5B-BDC5-B1248F2C585A%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Timestamp%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22blue%22,%22actionDescription%22:%22TAD-Insert%20yyyy-mm-dd%22,%22keyUseIcon%22:false,%22icon%22:%22598-clock%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Timestamp%22%7D,%7B%22uuid%22:%22ADD2D656-8E11-4466-BEB7-FD02C03AC9DF%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Selection%20Word%20Count%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%2235630167-2D64-4989-949C-4DEA9D297BF0%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:true,%22input%22:%22W%22,%22controlKey%22:false,%22commandKey%22:true,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Word%20Count%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22none%22,%22actionDescription%22:%22TAD-Selection%20Word%20Count%22,%22keyUseIcon%22:false,%22icon%22:%22585-calculator%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Word%20Count%22%7D,%7B%22uuid%22:%22AB369272-D52E-486D-A87F-84E244D7DEFB%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Trash%20Note%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22ACA417A1-FB82-43FA-AFBA-955F332E8100%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:0,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22-%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Trash%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22gray%22,%22actionDescription%22:%22TAD-Trash%20Note%22,%22keyUseIcon%22:false,%22icon%22:%22636-trash%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Trash%22%7D,%7B%22uuid%22:%22F2C3C05F-AD1C-4FE5-8112-04F822A63DF6%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Toggle%20Last%20Two%20Modified%20Drafts%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%220A01BB52-574D-4885-8EF1-66E65CDF57C9%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%23TAB%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Toggle%20Last%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22orange%22,%22actionDescription%22:%22TAD-Toggle%20Last%20Two%20Modified%20Drafts%22,%22keyUseIcon%22:false,%22icon%22:%22477-skip-backward2%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Toggle%20Last%22%7D,%7B%22uuid%22:%22229A9C12-0850-4443-ABBF-646096D0A6BB%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Search%20Actions%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%225E2AC5EB-7920-459A-8722-F2D70A7DC6DF%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:0,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%5C/%22,%22controlKey%22:false,%22commandKey%22:true,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Search%20Actions%22,%22shiftKey%22:false%7D,%22logLevel%22:1,%22groupDisposition%22:0,%22notificationType%22:1,%22tintColor%22:%22indigo%22,%22actionDescription%22:%22TAD-Search%20Actions%22,%22keyUseIcon%22:false,%22icon%22:%22search%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Search%20Actions%22%7D,%7B%22uuid%22:%229782726D-C842-4682-A71E-43BC465FE234%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Copy%20Draft%20Link%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%224A39DCDC-2BB1-4E65-A491-8144FEB70635%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22C%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Drafts%20Link%22,%22shiftKey%22:true%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22indigo%22,%22actionDescription%22:%22TAD-Copy%20Draft%20Link%22,%22keyUseIcon%22:false,%22icon%22:%22action_url%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Drafts%20Link%22%7D,%7B%22uuid%22:%227A48C342-E889-423A-8B6D-7507528C826C%22,%22steps%22:%5B%7B%22platforms%22:1,%22data%22:%7B%22name%22:%22TAD-Load%20Previous%20Workspace%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%2283CABD9B-497A-4863-A73B-00265DC4D281%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:true,%22input%22:%22%23LEFT%22,%22controlKey%22:false,%22commandKey%22:true,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Last%20Workspace%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22gray%22,%22actionDescription%22:%22TAD-Load%20Previous%20Workspace%22,%22keyUseIcon%22:false,%22icon%22:%22clipboard-back%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Last%20Workspace%22%7D,%7B%22uuid%22:%2202C9F9C8-9652-4095-B210-548FD19B58DA%22,%22steps%22:%5B%7B%22platforms%22:1,%22data%22:%7B%22name%22:%22TAD-Load%20Next%20Workspace%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%225B18B932-97A6-4D55-A417-8FAAB5DDC5D2%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:true,%22input%22:%22%23RIGHT%22,%22controlKey%22:false,%22commandKey%22:true,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Next%20Workspace%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22green%22,%22actionDescription%22:%22TAD-Load%20Next%20Workspace%22,%22keyUseIcon%22:false,%22icon%22:%22briefcase-next%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Next%20Workspace%22%7D,%7B%22uuid%22:%22D6051232-53DB-4159-8045-2C776E28D39E%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Show%20Draft%20Info%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%227F4B4B0F-CED8-410B-A916-D7BEA852659F%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Draft%20Info%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22gray%22,%22actionDescription%22:%22TAD-Show%20Draft%20Info%22,%22keyUseIcon%22:false,%22icon%22:%22442-information-symbol1%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Draft%20Info%22%7D,%7B%22uuid%22:%22B45E79C6-FEA0-4E5A-9DAC-897040071A17%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Toggle%20App%20Theme%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%226F5E8189-84AE-4987-B751-52D4D25BF329%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22L%22,%22controlKey%22:true,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Dark%5C/Light%20Toggle%22,%22shiftKey%22:true%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22yellow%22,%22actionDescription%22:%22TAD-Toggle%20App%20Theme%22,%22keyUseIcon%22:false,%22icon%22:%22lighter%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Dark%5C/Light%20Toggle%22%7D,%7B%22uuid%22:%22DC48EDE7-8B92-4B6E-832D-43B386D2748D%22,%22steps%22:%5B%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:true,%22input%22:%22T%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Typewriter%20Toggle%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22indigo%22,%22actionDescription%22:%22TAD-Toggle%20Typewriter%20Mode%22,%22keyUseIcon%22:false,%22icon%22:%22typewriter%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Typewriter%20Toggle%22%7D,%7B%22uuid%22:%22C49A4147-5478-430C-AB8C-F6B2E0B0B546%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Fetch%20URL%20Content%20to%20New%20Draft%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22A7EB51EE-D022-4200-863F-13CCDBD46068%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Fetch%20URL%20Content%20to%20New%20Draft%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22none%22,%22actionDescription%22:%22TAD-Fetch%20URL%20Content%20to%20New%20Draft%22,%22keyUseIcon%22:false,%22icon%22:%22caret-down-double%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Fetch%20URL%20Content%20to%20New%20Draft%22%7D,%7B%22uuid%22:%225ABCC386-0CF7-489B-8037-CBBF82E021AA%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-File%20Import%20With%20Tags%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%2258F20F45-D9F9-44DC-AAD3-3C6B12DB4B9E%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Import%20File%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22red%22,%22actionDescription%22:%22TAD-File%20Import%20With%20Tags%22,%22keyUseIcon%22:false,%22icon%22:%22file-badge%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Import%20File%22%7D,%7B%22uuid%22:%22B24FAC3A-CEE8-4BA4-AC65-3365DDEC0846%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22template%22:%22drafts:%5C/%5C/x-callback-url%5C/loadActionGroup?name%3DGROUP-NAME%22,%22encodeTags%22:%22true%22,%22waitForResponse%22:%22false%22%7D,%22type%22:%22callbackUrl%22,%22isEnabled%22:true,%22uuid%22:%2225B7AA15-0CD5-4FF4-B9A9-94D3A40F99F2%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:true,%22input%22:%22.%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Load%20The%20Psalms%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22pink%22,%22actionDescription%22:%22%60app.TA_loadActionListByName(%5C%22ThoughtAsylum%20-%20Power%20User%5C%22);%60%22,%22keyUseIcon%22:false,%22icon%22:%22checkbox%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Load%20The%20Psalms%22%7D,%7B%22uuid%22:%2219A9B6E4-42C5-45FF-8908-849C25C4995C%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Link%20for%20Draft%20(Title)%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%223828AA43-B720-45EC-8C53-E35BD7B5A33A%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Draft%20Link%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22green%22,%22actionDescription%22:%22TAD-Link%20for%20Draft%20(Title)%22,%22keyUseIcon%22:false,%22icon%22:%22link%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Draft%20Link%22%7D,%7B%22uuid%22:%227FF25B9B-A198-49E8-930F-B5E11BF74936%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Prime%20Preview%20MMD%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22F31F05A6-DE09-49D5-A324-A5DF0035FE36%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Preview%20MMD%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22gray%22,%22actionDescription%22:%22TAD-Prime%20Preview%20MMD%22,%22keyUseIcon%22:false,%22icon%22:%22branch%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Preview%20MMD%22%7D,%7B%22uuid%22:%22C2BCAF85-15FE-4103-901D-2D816CCBE444%22,%22steps%22:%5B%7B%22platforms%22:3,%22data%22:%7B%22name%22:%22TAD-Load%20Most%20Changed%20Draft%22%7D,%22type%22:%22includeAction%22,%22isEnabled%22:true,%22uuid%22:%22D94578B7-38CC-440C-A9E8-89EC9DE3AFEA%22%7D%5D,%22backingPlatforms%22:3,%22shortName%22:%22%22,%22shouldConfirm%22:false,%22disposition%22:3,%22keyCommand%22:%7B%22optionKey%22:false,%22input%22:%22%22,%22controlKey%22:false,%22commandKey%22:false,%22type%22:%22action%22,%22discoverabilityTitle%22:%22Load%20Most%20Changed%20Draft%22,%22shiftKey%22:false%7D,%22logLevel%22:2,%22groupDisposition%22:0,%22notificationType%22:2,%22tintColor%22:%22orange%22,%22actionDescription%22:%22TAD-Load%20Most%20Changed%20Draft%22,%22keyUseIcon%22:false,%22icon%22:%22ribbon%22,%22visibility%22:480,%22backingIsSeparator%22:false,%22groupUUID%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22assignTags%22:%5B%5D,%22name%22:%22Load%20Most%20Changed%20Draft%22%7D%5D,%22modifiedAt%22:641338420.61343801,%22disposition%22:0,%22uuid%22:%2216A2B316-FD3E-4266-913B-4A343EC3122A%22,%22visibility%22:480,%22createdAt%22:641338420.61343706,%22icon%22:%22532-tractor%22,%22changeTag%22:%22eg7%22%7D
```

As I understand it, the entirety of this Action Group’s data as it appeared on 


### Add To Notion
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** special-alert  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** D3ECAF73-FE2F-4435-8768-9022F5F88D74  
**Description:**  
Set of functions for Notion API + action that adds current draft to Notion in the page you use as your inbox. If it’s a single line, it’s added as a note, if it’s multiple lines, it’s a page. Currently text is added as one block and it doesn’t convert markdown.


### DupeLoad
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 511-copy-documents  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E2CD38A1-F3EC-4DC7-BA85-E8E274B98D84  
**Description:**  
TAD-Duplicate Draft and Load


### DIFF
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_preview  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C58D1F93-E3BB-47EE-AC04-A4128A239849  
**Description:**  
Marks up changes (insertions, deletions) between current draft and a previous version (prompts for selection).

Preview respects tab indents without invoking code blocks (by design).

Diff code from: https://johnresig.com/projects/javascript-diff-algorithm/
CSS styles for ins/del tags adapted from: Yuanchuan (https://yuanchuan.name/)
via https://freefrontend.com/html-del-ins-css/




### fetch
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 401-globe  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 4  
**Unique ID:** 58EE3EA8-C139-451C-9409-2C10B88C8DEB  
**Description:**  
Fetches the content of the URL on the clipboard and puts the content into a new draft.


### Edit Markdown Table
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** border-all  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A892D5D5-9F2D-4AF2-A966-9891C561F265  
**Description:**  
Demonstration action that uses the [Table Magic](https://github.com/stevecat/table-magic) Markdown table editing library to modify Markdown tables in an advanced HTML Preview.

This tools allows editing of table in forms, CSV, etc. Select an existing Markdown table in the draft before running the action to pre-populate the editor. 


### Synonym
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** signs-alt  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 8584909D-7811-4275-BE68-FE6411AD4FAE  
**Description:**  
TAD-Replace with Synonym


### Fantastically Good Event Parser
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-dates  
**Colour:** red  
**Confirm to Run:** true  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 7FB51E0D-A578-4A89-A747-08196942D12F  
**Description:**  
Split draft into lines and create events for each using Fantastical-style syntax.


### Mac Safari Tab Links (MD)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** 16901BFF-02A7-4026-8790-E2BB8727CBA5  
**Description:**  
A Mac only action that inserts the URLs for all of the open Safari tabs at the current cursor position. The content is formatted as a Markdown list of links.


### Save images in Drafts' Previews folder
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 568-photo  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 7930D729-6C35-4D85-9C79-44C486DD0107  
**Description:**  
This Drafts action + shortcut does the following:

 1. Let the user select the image files and save them in the Drafts Previews folder (iCloud Drive / Drafts / Library / Previews /).
 2. Insert those image links into the draft.

Shortcut
　https://www.icloud.com/shortcuts/567d5d896af24343ac736cb40b0647c2

https://sorashima.hatenablog.com/entry/ObsidianImagePreviewOnDrafts


### Current Inbox Count
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 488BA16F-4E48-466C-82D9-28F3952A3F8E  
**Description:**  
Display an alert with a count of drafts in the inbox currently displayed in the draft list.


### TAD-Auto Document Action Group
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 513-document  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B564BF39-649C-41F5-B842-22923F70A085  
**Description:**  
With a direct install link for an action group on the clipboard, this action processes the details and produces a Markdown formatted summary in a new draft.


### TAD-Toggle Last Two Modified Drafts
**Type:** Action  
**Keyboard Shortcut:** ⇧#TAB  
**Icon:** transfer  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BAA07085-B6EE-43D1-9C36-8C3DCAEE5D6D  
**Description:**  
Switches between the two most recently modified drafts.


### TAD-MD to Plain Message
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_message  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A0B06804-5654-4E3E-B91D-DA2E297F230C  
**Description:**  
Convert Markdown to plain text for messaging.


### In  Development/Ideaing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 82F7C978-FF5A-41D1-867A-E4AF830BC053  
**Description:**  



### Zalgo?
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 40D66F07-4AB0-4FF7-A085-04B2F3996A1B  
**Description:**  



### TAD-Copy Action Group Items (Markdown)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3285D564-231C-4990-8581-AFB9C728F587  
**Description:**  
Create a markdown  structure of the action group on the clipboard.
- Action group name is a level 1 heading.
- Separators are a level 2 heading.
- Actions are bulleted list items.


### Not Functioning/Deprecated
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 7D394BAA-92F4-44ED-9FC2-D53B14FB00B9  
**Description:**  



### Template
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** folder-upload  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 79C84C3D-35B6-49F8-B012-7D3538CED417  
**Description:**  
Runs New Draft with Template


### Copy to Notion
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 319-shipping-crate  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 92B6883A-329D-4B98-814B-7FC9A103CF5C  
**Description:**  
Copy draft and open Notion app to be pasted


### APPLE NOTES
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** apple-bite  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 780692BD-989B-433D-A400-9A3E95D6C779  
**Description:**  
Create a new note in Apple Notes converting the Markdown in Drafts to HTML.

Action uses AppleScript and is only compatible with Mac.


### Tweet and Toot
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 343-scribble  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** CE48F720-0CAA-4F1E-BF92-FEA80112982D  
**Description:**  
This is the same as the built in micro.blog script, but you can add a post title by adding a line with “# ” (include the space) in the first line of the draft. The first line will be the title (minus the pound sign and space) and everything below that will be the content.

If there is no “# “ on the first line, the entire draft is assumed to be the content and no title will be added.


### Simplenote
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 0DA2C1D4-67CE-4980-BD0D-9AE7C2A71CEA  
**Description:**  



### TAD-MD-Lines to Numbered List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list-numbered  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E25E4A0F-6777-41B7-A19D-38E47B7A52F3  
**Description:**  
Markup each line that is part of the selection as a numbered list item using a standard numeric of 1 as the list identifier.


### Terminology Test
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 587-dictionary  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 99FB9F20-E0A7-4912-8D80-93694F103667  
**Description:**  



===
## 🅒🅞🅡🅔

### New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-add  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 53883D96-F638-4CC9-A14B-535659AB2720  
**Description:**  
Create a new draft


### Copy
**Type:** Action  
**Keyboard Shortcut:** ⌃C  
**Icon:** action_clipboard_filled  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 3C1AE3FE-1308-4FCD-AA4A-6837FC3BCEB3  
**Description:**  
Copy draft to clipboard.


### Clean MD lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_markdown  
**Colour:** indigo  
**Confirm to Run:** true  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 82E1D1B7-9F24-40E9-9693-65F2D1B77CF9  
**Description:**  
Normalizes/prettifying Markdown lines, adding and deleting blank lines as needed. 

For example in imported text with single line breaks or excess blank lines. 

Note: Creates new draft, keeping tags and moves original to trash.
Note: Will mess up code blocks!


### Copy as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 470E7386-9366-4C69-B123-A62C4476EDA3  
**Description:**  
Run draft through Markdown conversation and copy HTML to clipboard.


### Email to myself
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 210D3FF2-D437-460C-872E-16B49B2B3149  
**Description:**  
Use this action to send the current draft as a background email, using the first line as the subject and remain text as the body of the email.

The first time this action is run, it will prompt you to enter the target email address for the action, which will be stored for use later as a Credential value. To change the email used by the action, visit Settings > Credentials in Drafts, and “Forget” the “Email to myself” credential which stores the address. The next time the action is run, it will prompt again for a new email address.


### Markdown Mail
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 6A942CBB-4CAB-434A-B006-32E7C8A391EE  
**Description:**  
Open mail message with the first line of the draft as the subject and remaining content as the body converted to HTML via Markdown.  Can be duplicated and modified to create pre-addressed messages, or use templates.


### Message
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chat  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** DFF50428-DE51-40C7-ABEE-B7CAA0DC2090  
**Description:**  
Open iMessage with content of draft pre-filled. Duplicate and modify to create pre-addressed message actions.


### Share
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 70CA1D74-FA53-4786-834E-84E962C689B6  
**Description:**  
Send draft to system share sheet.


### Google Search
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-search-alt  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** C25B272F-5E06-4767-BFEF-F6CCD874A2CB  
**Description:**  
Search the current text selection on Google.


### Event
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-add  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 4CFC7AE9-A072-435A-830C-A47246042DC4  
**Description:**  



### Reminder
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_reminders  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1F9D288F-4C1A-40C4-92B6-33B41818DD1F  
**Description:**  
Send draft to Reminders as a task in the default Reminders list, using first line as task name, and remaining text as note.


### List in Reminders
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_reminders  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 01C67C49-F973-44D2-84BC-97DB013CC0F6  
**Description:**  
Send to Reminders as a list, with each line as one task.


### Print
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_print  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E1E04D56-D694-4F2E-8075-6CB80ABA1A1B  
**Description:**  
Convert Markdown to HTML and print with basic sans-serif style.


### Save to Files
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** DC0A59DC-1FFE-47B8-8970-6578FF217C76  
**Description:**  
Export to files.


### Save to Files as...
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 4994523A-2BF0-4F6B-B206-432E50DC2D3D  
**Description:**  
Export to files, prompting for file name.


### Services
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 1403F657-7A67-423F-9625-D1B791F70EC3  
**Description:**  



### Save to iCloud Drive
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** journal  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 49F21040-89CB-4E2A-84F6-D793609C1C78  
**Description:**  
Save draft to iCloud Drive “Drafts” folder with a timestamp file name.


### Append to iCloud Journal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** journal  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 390F5359-3A61-4DEA-9BF7-389FA8BB7C58  
**Description:**  
Append to rolling monthly “Journal” file in iCloud Drive “Drafts 5” folder.


### Append to Dropbox Journal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_dropbox  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E4995A93-A567-4073-B3A4-7A2DD3959369  
**Description:**  
Append to rolling monthly “Journal” files in Dropbox.


### Save to Evernote
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_evernote  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 73909883-DB92-4AB7-AC3E-7D8BFB73E4E3  
**Description:**  
Convert draft Markdown to HTML and save to a note in Evernote with a timestamp note name.


### Append to Evernote Journal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_evernote  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 05943179-6264-4EB3-A403-1A31963B7092  
**Description:**  
Append draft to monthly journal note in your default Evernote notebook. New note will be created each month, based on the name "Journal-YYYY-MM".


### Evernote as Todos
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_evernote  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 114B82D6-6943-4934-8E2F-F65F3E8053EB  
**Description:**  
Upload the draft to Evernote, using the first line as the note name, and converting any [ ] and [x] drafts task marks to Evernote checkboxes.


### Save to OneDrive
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_onedrive  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 9DDD0DF0-A607-4458-98E5-79B131CFF26A  
**Description:**  
Save to file named with timestamp at the root of your OneDrive.


### Append to OneDrive Journal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_onedrive  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 884EA97C-9699-4606-A3F6-4B3554160C46  
**Description:**  
Append to monthly journal files in OneDrive.


### Save to Google Drive
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_google_drive  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** DDF84C7D-E673-488C-9B61-386BF61A0ABE  
**Description:**  
Save to timestamped file name in Google Drive


### Append to Google Drive Journal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_google_drive  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** CF3B29C1-A1A6-4BD2-98B9-3A404F149D15  
**Description:**  
Append to rolling monthly journal files in Google Drive.


### Apps
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 7D9CFBAD-1445-4911-98AA-2921ADBE0839  
**Description:**  



### Send to Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** notebook  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E42C426B-7562-4E46-9A0E-92694DCE2D9C  
**Description:**  
Send draft to Bear Notes as new note.


### Append to Bear Journal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** notebook  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** F087E6D9-7105-458D-9CFD-56CDE3ED1190  
**Description:**  
Append draft to monthly journal notes in Bear app and return to Drafts.


### Day One
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** journal  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 73346473-A6F0-4AA1-A398-AB8EA19AED94  
**Description:**  
Send draft as new entry in Day One.


### New Note in Evernote
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_evernote  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 5E29E887-5DB2-4C92-AA7C-8B0C2018BF07  
**Description:**  
Send draft to the Evernote app as new note.


### Email (Spark)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 15E39B40-54D0-4958-B634-E185EFED2274  
**Description:**  
Open Spark email with the first line of the draft as the subject and remaining content as the body.


### Fill Markdown Links (Reference Links) (1.2) 
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** link  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 3  
**Unique ID:** CD362944-1EA1-48BE-A428-C45FBF37CC83  
**Description:**  
Description:
Ever been writing and had to stop to look up a link. 

with this action you can leave those links empty like this “[your link text]()”. 

Once you run this action it will look for all of the empty links and then ask you to fill them. 

You can manually enter a url (or whatever text you like, who am I to judge), paste from the clipboard if you’ve been doing some research, or you can open google to search for your link text.  When you go back to your draft you can paste in the text. 

Ver. 1.2.4 Update: 
- FIX: menu message now terminated on new lines. 
- FIX: resolved bug where sometimes updates would overwrite each other. 
- FIX: ensures that reference links and main content have a space between them. 
- FIX: Reference Links will continue sequence if other links already exist. 

Ver. 1.2.3 Update:
- ADD: Title of menu prompt includes link text. 

This is good if you have multiple links in one sentence. If no text, title will indicate that. 


Ver. 1.2.2 Update:
- FIX: loop bug now corrected. If you reach the end on the text without finding punctuation, the action no gets stuck in an infinite loop. 


### Save to OneNote
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** book  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 765292B7-B607-4538-B802-D617AAB5C5D4  
**Description:**  
Save to timestamped note in the “Drafts” section of your default OneNote notebook.


### New Draft with Template
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-add  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** D2E2BE24-149B-4781-A47F-683E3D1F3DB0  
**Description:**  
Prompt to select from a list of existing drafts with the tag “template” assigned, then create a new draft with the content of that template.

To create templates available in this action, simply type your template in a draft, and assigned the tag “template” to that draft. It can be in the archive or inbox. The template can contain [Drafts tags](https://reference.getdrafts.com/topics/templates.html) to insert time stamps or other dynamic data in the template. Also, any tags other than “template” assigned to the template draft will be assigned to the new draft automatically.

If the template contains the string `<|>`, the `<|>` will be removed, and the initial cursor position in the new draft placed at that location.

When run, if “Omit First Line in New Draft” selected in the prompt, the first line will be removed from the template. This allows you to use a friendly name for the template as the first line of the template without having it included in the new drafts created.

> **Note:** This action used functionality which requires a Pro subscription.


### Select Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** DBC49550-A7CB-455A-A31F-7EB8A7552941  
**Description:**  
Prompt to select from a list of available Workspaces, and load the selected workspace.


### Clipboard…
**Type:** Action  
**Keyboard Shortcut:** ⌥C  
**Icon:** 512-paste-clipboard  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** BFEB492C-54F0-4C03-98A0-827ADBE67EC6  
**Description:**  



### Email (Outlook)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 613633FA-E925-49E8-AC01-6EE6B544BE7F  
**Description:**  
Open Outlook email with the first line of the draft as the subject and remaining content as the body.


### JS Comment
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sim-card-off  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 7538CB10-23B5-4C22-AC45-98633FEB0DCE  
**Description:**  
Toggles comments of single or multiple lines.
Sets tags at original indenting.

Note! Will not comment lines on higher blocks (less indented than first selected line)!
Will not work well with mixed indenting (mix of spaces and tabs)


### 
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E9998A59-5540-4A28-8C58-765FE2E88FD6  
**Description:**  
First line : file name with file extension 
Rest lines : contents

Use this action with the following shortcut.:
https://www.icloud.com/shortcuts/5cd542b6496a438ab82189798b7fcb92

---

I also created a shortcut to load a file into Drafts with the filename with the file extension:
https://www.icloud.com/shortcuts/f0276d6ffa214555b6f01b4e8d5b385d


### Export File with file-ext
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 7A4B3608-1E27-4716-8B65-D12F2E710492  
**Description:**  
First line : file name with file extension 
Rest lines : contents

Use this action with the following shortcut.:
https://www.icloud.com/shortcuts/5cd542b6496a438ab82189798b7fcb92

---

I also created a shortcut to load a file into Drafts with the filename with the file extension:
https://www.icloud.com/shortcuts/f0276d6ffa214555b6f01b4e8d5b385d


### Get Link to Reminder
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 428-checkmark1  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 617AE8B0-C472-40BE-A2C4-68A32089193D  
**Description:**  



### Setup Project
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** layout-grid  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 96AD512F-02FC-473B-B74F-CB082B9117D0  
**Description:**  
Create a workspace for a new project with a specific set of tags, and an initial table of contents draft.

After creating this workspace, additional sub-drafts can be added using the example “New Linked Draft” action.


### Undo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_undo  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0908944E-5CC1-45CF-B7C5-DCA973CA4B8C  
**Description:**  
Undo last edit.


### Redo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_redo  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B2337CD0-987D-4294-B5CE-302588694EC1  
**Description:**  
Redo last edit.


### Cursor Movement
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 78705B9F-BD67-40AC-9576-828EA5F724FC  
**Description:**  



### Move left
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 527EC643-A679-44B8-8BE8-3C191ACAA6C7  
**Description:**  
Move cursor left one character.


### Move right
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F49E02B9-548D-42E0-B0D6-7782B8EF8B3A  
**Description:**  
Move cursor to right one character.


### Move cursor back by word
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-left  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** DA198951-35A9-404B-9F2F-9A5FDF80BF4C  
**Description:**  
Move cursor position back one word at a time.


### Move cursor forward by word
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-right  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 360397AD-BE11-4879-AD66-A2CDAAFEF98F  
**Description:**  
Move cursor position forward one word at a time.


### Commands
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 43D2DD4A-4FAE-4074-8847-040044BD0B91  
**Description:**  



### Find
**Type:** Action  
**Keyboard Shortcut:** ⇧⌥F  
**Icon:** search  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** DA660672-DC5A-4DEF-AFFB-31353B00A9BE  
**Description:**  
Open find and replace.


### Tasks
**Type:** Action  
**Keyboard Shortcut:** ⌃T  
**Icon:** 429-checkmark2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F5CD3E1D-B185-4AE5-9BDB-D79762B411A9  
**Description:**  
Toggle task marks on selected lines.


### Insert dictation
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_dictate  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** AC26AB56-DC99-4AEB-806D-A84DC73E6F31  
**Description:**  
Open dictation and insert the result at the current cursor position in the editor.


### Dictate new draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_dictate  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 51DEDC32-94A0-45C6-86ED-1D0A04518000  
**Description:**  
Open dictation and create a new draft with the result of the dictation.


### Copy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 511-copy-documents  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0CBC7428-3EC1-46EB-8C9B-3280FF4E5BA1  
**Description:**  
Copy selected text to clipboard.


### Paste
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 512-paste-clipboard  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 2F9E8480-FB49-4564-8F4E-2BD49350EDE7  
**Description:**  
Paste contents of clipboard.


### Mail
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 88C5A578-AD3C-40D4-8AA0-82A2B1F87B2E  
**Description:**  
Send as email.


### Message
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chat  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 7E841080-7C19-4A8A-A74F-8EB1B8BAB127  
**Description:**  
Send as iMessage.


### Indent
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 7C460635-306F-4BED-AE07-7F9F1B99BB8B  
**Description:**  
Indent the selected line range.


### Outdent
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent-decrease  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 2F794528-0B33-4017-80AC-9F09551A72DF  
**Description:**  
Outdent the selected line range removing one level of nested white space.


### Toggle Theme
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 681-weather-sunny  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** F6FDBB1E-B245-4404-9824-D68DC2953483  
**Description:**  
Toggle between light and dark themes.


### Stats
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** stocks-up  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** AF5FC361-BAB7-4E63-9DBE-271BB9F84ABA  
**Description:**  
Calculate and present preview of common readability statistics for the current draft.


### Drafts Action Shortcuts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 356-signpost  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2C4116B9-1430-4005-9552-3C5C935B03AC  
**Description:**  
Dump details of all actions with shortcuts out to a new draft.


### Family Tech Support Group Message
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chat  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1AB57BB9-AACA-459B-80EF-4206C0D930DD  
**Description:**  
Sends just the Draft Body to the family group chat (I hope.)


### Meta Data < > Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** memo  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 763371CD-ACC7-4894-864E-424A98557202  
**Description:**  
Example action demonstrating how one could auto-create related meta data drafts to enter notes about the current draft, and flip back and forth to that meta data draft using an action or keyboard shortcut.

The first time this action is run on a draft, it will create a new draft with the tag `metadata`, filed in the archive, with front matter like:

```markdown
# Draft Meta Data

Title: <Draft Title>
Source: <Link to Source Draft>

```

You can then enter notes about the draft in this metadata note. 

If this action is run again from the meta data note, it will look for and open the source draft.  If you are on the source draft, and a meta data draft exists already, it will navigate to it for adding additional notes.

In use, assigning a keyboard shortcut to this action would easily allow you to toggle back and forth between the draft and it’s meta data.

The meta data note, once created, could also be opened in a separate window for editing next to the source draft on iPad or Mac.


### Insert Link to Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** link  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 7048EBEF-8CA4-4FD1-B5D9-A2AF5448D9DB  
**Description:**  
Action will prompt to select a draft, and insert a wiki-style `[[Title of Draft]]` link to the draft in the current draft.


### Copy Tags
**Type:** Action  
**Keyboard Shortcut:** ⌃⌥T  
**Icon:** btn_tags_selected  
**Colour:** pink  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** E8AA5709-F030-41A6-8CD3-19485AC3C04B  
**Description:**  
Copies the current Draft’s tags.


===
## Social Web

### Tweet with Twitterrific
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 694B36F7-3F8E-4BFA-9363-8F60F5C7785C  
**Description:**  
Send to Twitterrific compose window.


### Tweet Storm Multi-line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 3  
**Unique ID:** 02A8A196-F7B6-493B-9542-001A14B0F452  
**Description:**  
Based upon Tweet Storm action by agiletortoise. 

Divides up a draft into separate tweets using == as a tweet separator, allowing for multi-line tweets in a thread. Removes tweet numbers. 

Builds a preview of the tweets as they will be posted and displays it. If “Continue” tapped from preview, posts thread.


### Tweet with Twitter app
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 967E86F8-8EF4-4CC1-B0A2-B21D26BBF16B  
**Description:**  
Send draft to the Twitter app compose window.


### Import Twitter Search
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** CAF5C261-CD61-41D6-8629-873B7ACEC338  
**Description:**  
Prompt for a Twitter search query. Can be for any text string and supports the same syntax used in Twitter web search.

Use Twitter API to get a list of tweets matching the search and import them into a new draft as a Markdown list, with screen name and link to the tweet included.

Posted as an example of Twitter API use in Drafts.


### Twitter: Get Likes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** heart  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 74909D40-DBA1-4270-B0E9-9B677B704545  
**Description:**  
Prompt for a Twitter handle, the request a list of their recent likes from the Twitter API. Build a Markdown version of those tweets, put them in a new draft and open it in the editor.

Demonstrates use of the [Twitter object](https://github.com/agiletortoise/drafts-documentation/wiki/Twitter) request method to make arbitrary requests to the Twitter API.


===
## 𝚃 𝙴 𝚂 𝚃

### Send to Bear silently
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** notebook  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 2CABB773-755B-42BB-AF8B-A15B899FF20B  
**Description:**  
Send draft to Bear Notes silently in background.


### Email (Spark)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 3AB018C5-75FA-4E6A-AE26-755DB1DC4C54  
**Description:**  
Open Spark email with the first line of the draft as the subject and remaining content as the body.


### New Draft with Template
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-add  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** AF36F27E-E976-44D7-B2D1-059067C9B9CB  
**Description:**  
Prompt to select from a list of existing drafts with the tag “template” assigned, then create a new draft with the content of that template.

To create templates available in this action, simply type your template in a draft, and assigned the tag “template” to that draft. It can be in the archive or inbox. The template can contain [Drafts tags](https://reference.getdrafts.com/topics/templates.html) to insert time stamps or other dynamic data in the template. Also, any tags other than “template” assigned to the template draft will be assigned to the new draft automatically.

If the template contains the string `<|>`, the `<|>` will be removed, and the initial cursor position in the new draft placed at that location.

> **Note:** This action used functionality which requires a Pro subscription.


### Go To Bookmark
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** journal  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** C40FBBB2-721B-488B-8884-4EE2641B4F23  
**Description:**  
Open a bookmarked draft in the editor.

This action will prompt you to select a draft from all drafts tagged with the “bookmarked” tag. Useful to quickly navigate to specific drafts you use often.

Meant as an example action demonstrating the use of the “Select Draft” prompt combined with a custom, temporary workspace. 

To use a tag other than “bookmarked”, edit the `tag` variable in the ffirst line of the script.


### Insert Workspace Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** layout-grid  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 985CA6C8-A568-4205-8797-AFE8F2DD1BEC  
**Description:**  
Prompt to select a workspace, and Insert a `[[w:Workspace]]` style link to the workspace at the cursor.


### Sum of all Numbers in Draft/Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 438-equals  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** F00DA77B-4C01-4AA1-9D7B-8E5FE1FE61E0  
**Description:**  
Calculates the sum of all numbers in the selection. If there is no selection, the entire draft is used as input. 

The sum is then displayed as notification & copied to the clipboard.

Works with "." or "," as decimal seperators. Also supports with negative numbers, enabling the correct parsing of sequences like `2-4+3` as well.

Caveats: This action does not work with any kind of thousand seperator (".", ",", or space), as they would introduce ambigious cases.


### Refresh Theme or Syntax
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sync  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** A7E4094F-4251-4AAF-8888-C1FD8B6AD680  
**Description:**  
Refresh Drafts’s current theme and syntax.

See https://www.thoughtasylum.com/2021/10/24/drafts-syntax-development-tip/ for details.


### Fake Wordle
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1F8C41BD-DA4E-48D7-B2AB-F789EE7F4A20  
**Description:**  
Extremely naive action to generate a fake [Wordle](https://www.powerlanguage.co.uk/wordle/) result grid based on the number of guesses provided in the prompt.


### FTS
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chat  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 88ABEFD2-1A49-4934-934D-B444D392A8F7  
**Description:**  
Updated action to message the Family Tech Support iMessage group.


### Mail ⇨ David Blue
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** DA517665-8C6D-4D75-976F-681BBB37A295  
**Description:**  



### Post to WordPress
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** inkwell  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 0D30D414-8CB1-42AF-BC94-261FCED56AC6  
**Description:**  
Post to a WordPress site. This basic example creates a new post with “Draft” status (not published). The first time you run this action you will be prompted to enter site credentials.


### WordPress - Get Recent Posts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-down  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** A4C9888D-2490-4519-9BB7-8E09168247A1  
**Description:**  
Use WordPress API to retrieve recent posts from a WordPress blog and make a list of titles and links. Meant as an example only.  More advanced options are available via additional parameters as documented in WordPress XML-RPC API docs.


### WordPress - New Post
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** inkwell  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1C9453A6-D1B8-4081-BC64-1278A9E1A0B1  
**Description:**  
Create a new post on a WordPress blog using XML-RPC API through Drafts scripting.  Additional options can be configured using parameters documented in Wordpress XML-RPC api docs. This example will create the post as a draft.


### Box via WebDAV
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_box  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** DA460E0B-34FA-4A98-9C4B-40AE5F9EA2EA  
**Description:**  
This is a demo WebDAV action step, which can be configured to send to Box.com.

The first time the action is run, you will be prompted for configuration information. Complete the information as follows:

- **Host**: https://dav.box.com/dav
- **User**: Your box account email.
- **Password**: Your box account password.

If you duplicate this action, and reconfigure it you can setup multiple actions to append/pretend/create files as needed which will share the same “Box” credentials.

More details on the [Box WebDAV interface](https://community.box.com/t5/Upload-and-Download-Files-and/WebDav-with-Box/ta-p/310).




===
## 🅐🅤🅣🅞🅜🅐🅣🅘🅞🅝

### todoist project from list
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** database  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 50607E77-9FB6-4137-9594-E6322D8B1021  
**Description:**  

### Todoist project from list

This action creates a new project in your todoist account from a template draft.
The template Draft has to be specified by the UUID, copy this from your template list and configure it in the script step of the action.
The action parses this draft and creates a new project where you can configure the name. A prompt will ask you for the name and the action will append a configurable „list-name“.
My current use case is a packing list. The template with all possible things I need to carry to a trip is stored in a Draft.
I divided the packing list with sub-headings for e.g. „Clothing“ with elements for this category.
The action parses each line, sub-headings will become to bold written parent tasks and all tasks below a sub-heading will become child tasks of this sub-heading.
The required format for a draft which can be parsed by this action looks like this:

```
[any title line]				- this line will be ignored, its just your title for the list
[maybe empty line]				- any empty line in the source draft will be stripped by a regex replacement
## [subheading 1]				- this subheader is the first parent task
- [ ] [item 1 of subheading 1]	- this will be the first subtask of the previous subheading
- [ ] [item x of subheading 1]	- this will be the xth subtask of the previous subheading
[maybe empty line]				- any empty line in the source draft will be stripped by a regex replacement
## [subheading y]				- this subheader is the yth parent task
- [ ] [item 1 of subheading y]	- this will be the first subtask of the subheading y
```

You can of course use several subheadings to create as many parent tasks with subtasks as you want.
If you dont want to use parent tasks at all, don’t create sub-headings in your draft.

Depending on the amount of items in your list, this action will take some time to run.
This is mainly justified by the limits of todoists REST API where the script is only allowed to perform 50 requests per minute. Therefore I implemented a sleep function which adapts dynamically to the amount of tasks in your list. I integrated a roughly estimated calculation for the process time and the user will see an info message from the app every 5 tasks.

If you have any issues please reach out to me in the forum @FLohGro


### Task in Todoist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 56608FF9-CE62-4A6E-9658-AE5354CCF61A  
**Description:**  
Create a task in the Todoist inbox using the first line of the draft. If additional text is present in the draft, add it as a comment to the new task.


### Task in Todoist App
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1F924324-07F2-4C17-9549-0AC4FF40C995  
**Description:**  
Send to Todoist app as new task.


### Task in Todoist Shopping List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 910F4616-6B08-485B-A3BC-C2E37EA7B317  
**Description:**  
Create a task in the Todoist inbox using the first line of the draft. If additional text is present in the draft, add it as a comment to the new task.

The task template in this action includes the `#shopping ` prefix to assign the task to the Project “Shopping” in Todoist. This project must already exist.  The #project name can be changed to fit your needs, it is only intended as an example of how the template can be used to include boilerplate text to assign to a project, labels, priorities, etc. using Todoist quick add notation.


### Tasks in Todoist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 7DF1A499-AEC4-4563-82EC-230420F4DC81  
**Description:**  
Create tasks in the Todoist inbox for each line of the current draft.


### Import Todoist Project
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** F84D177C-1FF0-48CB-BD58-20D3481F9977  
**Description:**  
Import project tasks from Todoist into Markdown list.


### Task in Todoist with options
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** EC48982C-4B02-44F7-A8B7-1BA5C3538CAE  
**Description:**  
Create a task in Todoist first prompting for options.



### Dictate Email to Myself
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_email_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 3  
**Unique ID:** E365AC89-C4C6-4307-B186-69EEBD364013  
**Description:**  
This example action provide a way to hands dictate a passage and have it emailed to yourself. This action does not create a draft, just emails the dictation result.

The first time you run the action you will be prompted to add your email address - which will be remembered for future use.

Using the “Add to Siri” option on this action, combined with the optional timeout in dictation, allows you to create a completely hands free way to send an email to yourself.


### Reminder for Current Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check  
**Colour:** red  
**Confirm to Run:** true  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 4  
**Unique ID:** 734EC920-2CF8-424B-AA10-6CEAF8F5D868  
**Description:**  
Create a reminder from the current line, with the option of using Fantastical-style syntax. Modified from the [Fantastically Good Reminder Parser](http://actions.getdrafts.com/a/1MR).


### Task in Todoist (app)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 5B99CD03-631A-42C4-A3EB-ABF778461A4D  
**Description:**  
Send to Todoist app as new task.


### Task in Todoist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 160B5D76-324F-4B4C-B982-C39455AF925D  
**Description:**  
Create a task in the Todoist inbox using the first line of the draft. If additional text is present in the draft, add it as a comment to the new task.


### Task in Todoist Shopping List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** CCED8F14-E329-48F0-BB3A-BE0ED456B2A7  
**Description:**  
Create a task in the Todoist inbox using the first line of the draft. If additional text is present in the draft, add it as a comment to the new task.

The task template in this action includes the `#shopping ` prefix to assign the task to the Project “Shopping” in Todoist. This project must already exist.  The #project name can be changed to fit your needs, it is only intended as an example of how the template can be used to include boilerplate text to assign to a project, labels, priorities, etc. using Todoist quick add notation.


### Tasks in Todoist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 5AB6AA9E-B9A9-4414-9564-73CA6E027019  
**Description:**  
Create tasks in the Todoist inbox for each line of the current draft.


### Import Todoist Project
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** C2CC7418-B9DC-401B-9214-C1FA77C950AF  
**Description:**  
Import project tasks from Todoist into Markdown list.


### Task in Todoist with options
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 0C7F79C7-57C9-41B3-9A24-A0DE87CC2229  
**Description:**  
Create a task in Todoist first prompting for options.



### crosslink Todoist task & DTTG document
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 645-link  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** F1F86E3E-2CF0-48D4-824D-DA24517B74EB  
**Description:**  
## crosslink to DTTG document and Todoist

- this action will create a new markdown item in DTTG (DEVONthink To Go) from the content of the current draft
- the first line of the draft will be used as title of the DT item
- the DT item will be created in the global inbox. While directly creating the item in another group is possible, I didn’t include it here since it would need individual configuration - this can be added easily if you need it - just reach out in the Drafts forum
- after creating the DT item, the action will add a new taks to the inbox of your Todoist account. the title of the draft will be the name of the task with a click-/tapable link to the craft document
- after the task in todoist is created, the action will prepend a link to the todoist task into the previously created DT item.
- known "issue": if you quickly open the link to the todoist task after the action prepended the link to the task to the DT item, your todoist app may show an error telling you that the task could not be found. The reason for this is, that todoist needs to sync the created task to your app first (the task is created via the REST API). After the task was synced, the error won't occur again.

### Configuration

- there is no configuration needed this action just works if you have DTTG installed on your iOS / iPadOS device

if you find this useful you can <a href="https://www.buymeacoffee.com/flohgro" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


### Send Markdown To-dos to Todoist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** FA735CF1-BEA9-4DF4-8EB8-1B06006119AE  
**Description:**  
Create a to-do in Todoist for each found Markdown style to-do in the draft with a permalink back to the draft.

You can also include Todoist context options like #project, @tags, due dates, priority, and reminders.
// All context options must be at the end of the line and after ‘//‘ (e.g. - [ ] task name // #project @tag 1pm p1).

The Todoist tag @drafts is automatically added to all created to-dos for easier tracking in Todoist.

Sample To-dos:
- [ ] Update website header // #WEB mon 1pm
- [ ] Reorder retail bags // #STORE @buy
- [ ] Biz dev metting review // #MGMT p1 in 30 days


### todoist project from list
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** database  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** CB95CA71-CDF2-4CFB-9C6B-FACD6FD72460  
**Description:**  

## Todoist project from list

This action creates a new project in your todoist account from a template draft.
The template Draft has to be specified by the UUID, copy this from your template list and configure it in the script step of the action.
The action parses this draft and creates a new project where you can configure the name. A prompt will ask you for the name and the action will append a configurable „list-name“.
My current use case is a packing list. The template with all possible things I need to carry to a trip is stored in a Draft.
I divided the packing list with sub-headings for e.g. „Clothing“ with elements for this category.
The action parses each line, sub-headings will become to bold written parent tasks and all tasks below a sub-heading will become child tasks of this sub-heading.
The required format for a draft which can be parsed by this action looks like this:

```
[any title line]				- this line will be ignored, its just your title for the list
[maybe empty line]				- any empty line in the source draft will be stripped by a regex replacement
## [subheading 1]				- this subheader is the first parent task
- [ ] [item 1 of subheading 1]	- this will be the first subtask of the previous subheading
- [ ] [item x of subheading 1]	- this will be the xth subtask of the previous subheading
[maybe empty line]				- any empty line in the source draft will be stripped by a regex replacement
## [subheading y]				- this subheader is the yth parent task
- [ ] [item 1 of subheading y]	- this will be the first subtask of the subheading y
```

You can of course use several subheadings to create as many parent tasks with subtasks as you want.
If you dont want to use parent tasks at all, don’t create sub-headings in your draft.

Depending on the amount of items in your list, this action will take some time to run.
This is mainly justified by the limits of todoists REST API where the script is only allowed to perform 50 requests per minute. Therefore I implemented a sleep function which adapts dynamically to the amount of tasks in your list. I integrated a roughly estimated calculation for the process time and the user will see an info message from the app every 5 tasks.

If you have any issues please reach out to me in the forum @FLohGro


### Append comment to Todoist task
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-back  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 62B07BEF-5CC8-42B3-B6CB-AE0A1D49DDEE  
**Description:**  



### crosslink Todoist task & Craft document
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 645-link  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** FFA138A3-3C1D-4FEE-811C-659EB3E7A53C  
**Description:**  
## crosslink to Craft and Todoist

- this action will create a new Craft Document from the content of the current draft
- the first line of the draft will be used as title of the Craft Document
- after creating the Craft Document, the action will add a new taks to the inbox of your Todoist account. the title of the draft will be the name of the task with a click-/tapable link to the craft document
- after the task in todoist is created, the action will prepend a link to the todoist task into the previously created craft document.
- known "issue": if you quickly open the link to the todoist task after the action prepended the link to the task to the Craft document, your todoist app may show an error telling you that the task could not be found. The reason for this is, that todoist needs to sync the created task to your app first (the task is created via the REST API). After the task was synced, the error won't occur again.

### Configuration

- to make this action work, you need to configure the spaceId.
- You can get it by copying the deepplink of a document in this space. Paste the link into a new draft and extract the combination like "2159f404-e3ed-4d8a-fbe1-6c36499c8f3" after spaceId= in the link. 
- replace "unconfigured" with this id in the spaceID variable of the script (attention: only replace the unconfigured in line 5!).

if you find this useful you can <a href="https://www.buymeacoffee.com/flohgro" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


### Send to Bear & Todoist
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** notebook  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 5  
**Unique ID:** BC3D63B9-8830-4E6C-A664-C6A30AAF427C  
**Description:**  
Send draft to Bear Notes as new note with tags assigned in Drafts converted to #hashtags in the content. Then create a Todoist task with the title and a link to the Bear note in comments.


### Append to Selected Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list-numbered  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 161946F6-DC92-42D4-8F34-EA636F4FF31F  
**Description:**  
Add line numbers (followed by a colon and two spaces) to either the selected text or, if there’s no selection, the entire draft.


### Markdown to Notes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** B77D3FE5-D955-42DF-AC28-E8D6D4179AB1  
**Description:**  
Create a new note in Apple Notes converting the Markdown in Drafts to HTML.

Action uses AppleScript and is only compatible with Mac.


===
## NeoCities

### Push Draft to Root as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 81C89DC8-F26E-4644-87D7-BF454B345C24  
**Description:**  
Push the current draft to the /drafts directory as an HTML file by the draft’s `display_title`.


### Push Draft to /drafts as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 34A59A1C-95A8-42A9-9C23-677E9731EFC8  
**Description:**  
Push the current draft to the /drafts directory as an HTML file by the draft’s `display_title`.


### Draft to Root as Text Timestamp
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** alarm  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** EFF08ADA-81B6-49C3-B132-5DB477A95685  
**Description:**  
Push the current draft to the root directory as an HTML file titled by timestamp.


### Draft to Root as UUID.html
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** ABAA6A02-806F-4B45-BEA6-E9D5F8D32236  
**Description:**  
Push the current draft to the root directory as an HTML file titled by its UUID.


### Draft to /drafts as UUID.html
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 9C9FCDA8-687C-475A-8213-A8185CEFEE4D  
**Description:**  
Push the current draft to the /drafts directory as an HTML file titled by its UUID.


### Draft to /drafts/{title} as index.html
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 5555699A-B3A6-432D-9A20-ECA78F6A5D88  
**Description:**  
Push the current draft to drafts/[[display_title]] as index.html


### Append Draft body to existing /drafts/UUID file
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** add  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 62493DEB-0952-444E-832E-F5741F03D8DE  
**Description:**  
[NOT WORKING]]


### Push clipboard .txt to clipboard/timestamp
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 98AF9E4B-1D48-4F95-8D2D-C879FE16BE40  
**Description:**  
Push contents of the clipboard to the /clipboard directory as a .txt file.


### Open pushed /drafts file by UUID.
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** idea  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** BADE45C1-AEC4-46A6-B4BE-7B88B2357C04  
**Description:**  



===
## Workspace Switcher

### Written Workspace
**Type:** Action  
**Keyboard Shortcut:** ⌘2  
**Icon:**   
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 93340C6A-9562-4E59-8500-EB18E5E71DF8  
**Description:**  



### Documentation Workspace
**Type:** Action  
**Keyboard Shortcut:** ⌘3  
**Icon:**   
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 323F801E-E7AB-4C05-80A9-8DA5864E9E21  
**Description:**  



### Hole Workspace
**Type:** Action  
**Keyboard Shortcut:** ⌘9  
**Icon:**   
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** A57A8898-DB7F-48A0-8FCB-E4F4B703162A  
**Description:**  
Loads my workspace “Hole.”


===
## ThoughtAsylum

### Library
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C90E87AD-FBDB-4C79-B239-92D04A7C110A  
**Description:**  



### TAD-Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** E03477D8-EA97-4092-9109-9672FAC8F13F  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210508


### TAD-Setup/Refresh
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 519-tools-1  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 2  
**Unique ID:** CD75EE06-0829-4C60-BEA1-1C93DA48B20A  
**Description:**  
This action should be run before the first use of this action group. It will retrieve the latest version of the JavaScript libraries that this action group makes use of.


### TAD-Toggle Auto Library Update
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 306-light-switch  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 2ABAFC30-8241-4AFF-9899-C7A72C7AF1B0  
**Description:**  
Toggles a file setting to determine if every time the `TAD` action is called, a check should be done to see if a library update is required and appleis it.


### TAD-Browse Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 14A0CE4D-9B4E-48C1-AC32-5D70549222DA  
**Description:**  
This action will open a web page giving the last full listing of the actions in this action group. Each listing entry includes the description, so it can sometimes make browsing a bit easier where there are multiple similar actions to choose from.


### TAD-About TADpoLe
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** newspaper-alt  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 3E18BF5E-D76F-4C82-B229-439FB3723F33  
**Description:**  
This action will open a web page that provides additional information about the ThoughtAsylum Drafts Library (TADpoLe) that this action group uses for the majority of actions. It includes links to posts about some of the more complex actions.


### TAD
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** script  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 7  
**Unique ID:** 9AE827B2-0775-4BB0-9093-B5D3742A58F6  
**Description:**  
This action loads in content for other actions that want to use the library. Simply include this action at the start.


### TAD-Display Settings
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_gear1  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A669AF52-4D7F-4BF2-8E82-5B02DAD0564B  
**Description:**  
Show a menu of options for displaying library settings, then display the settings in a pop-up.


### TAD-Copy Settings
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 665-gear  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7E981421-2B14-4103-B02A-ABF0A04075E4  
**Description:**  
Show a menu of options for copying library settings to the clipboard. You can then paste them into a new Draft, or perhaps into a JSON processing app like JAYSON.


### TAD-Check TADpoLe Version
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 451-help-symbol2  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D6746291-6772-4D7C-8B45-430D4AB8CF75  
**Description:**  
Checks the version of TADpoLe available locally to Drafts versus the version available online.  This is based on the version number published online and the one available in the code.


### TAD-Update TADpoLe on New
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** rotate  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7BA61228-6647-43E5-BA9E-33C2956F3DA4  
**Description:**  
Checks the version of TADpoLe available locally to Drafts versus the version available online.  This is based on the version number published online and the one available in the code. If there is a new version available, it will queue up the TAD-Setup/Refresh action.  This is a nice simple one to schedule to be run on a device if you want to always have the latest copy, but only grab it if a newer version is available. Note that it will also trigger a Beautifier library file update as well at the same time.


### ThoughtAsylum Suite
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 415C49F2-6AB5-4C36-99A7-A14AAF4D0E8D  
**Description:**  



### TAD-Install (Core)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** EADD78E8-08A9-485F-BFF5-E518A9E99014  
**Description:**  
Open the Action directory page for the ThoughtAsylum (Core) Action Group - the one this action is distributed in and where you can download updates.


### TAD-Install Writing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 3E1824DB-A108-4497-8CA6-16E1A4029B46  
**Description:**  
Open the Action directory page for the ThoughtAsylum - Writing Action Group


### TAD-Install Management
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** ACBC19F2-325D-4EF7-8D03-0D0AF67F452C  
**Description:**  
Open the Action directory page for the ThoughtAsylum - Management Action Group


### TAD-Install Export/Import/Share
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B1CDCF7A-752D-4447-B367-EFFCE2BDC8C9  
**Description:**  
Open the Action directory page for the ThoughtAsylum - Export/Import/Share Action Group


### TAD-Install Trove
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 72C68169-F00D-4C92-BD18-AF8C12FF711F  
**Description:**  
Open the Action directory page for the ThoughtAsylum - Trove Action Group


### TAD-Install Tasks & Lists
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 004C6750-A3AC-4011-AA51-C4CA08891D71  
**Description:**  
Open the Action directory page for the ThoughtAsylum - Tasks & Lists Action Group


### TAD-Install Power User
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B4A860B7-B14F-41AE-9D46-FA01C2826203  
**Description:**  
Open the Action directory page for the ThoughtAsylum - Power User Action Group


### Action Group Load
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 6F9B8D59-E831-40C6-A3A9-B9315806172E  
**Description:**  



### TAD-Load Action Group - ThoughtAsylum - Power User
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0EDB2338-6103-40BA-BB08-9B87F8364310  
**Description:**  
Load the ThoughtAsylum - Power User action group into the action list.


### TAD-Load Action Group - ThoughtAsylum - Tasks & Lists
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CDAE4C96-C4F3-4DE0-BE82-45647F865441  
**Description:**  
Load the ThoughtAsylum - Tasks & Lists action group into the action list.


### TAD-Load Action Group - ThoughtAsylum - Trove
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E8267806-6CC9-43F7-B59D-0AD90B4BFB74  
**Description:**  
Load the ThoughtAsylum - Trove action group into the action list.


### TAD-Load Action Group - ThoughtAsylum - Export/Import/Share
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1414E844-768C-4D4E-9529-00C1D6C83E32  
**Description:**  
Load the ThoughtAsylum - Export/Import/Share action group into the action list.


### TAD-Load Action Group - ThoughtAsylum - Management
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 29F5808D-C954-41B7-BF68-841CB67D50DA  
**Description:**  
Load the ThoughtAsylum - Management action group into the action list.


### TAD-Load Action Group - ThoughtAsylum - Writing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1A9ADBBE-273C-4B2B-A688-6A653F55FAA5  
**Description:**  
Load the ThoughtAsylum - Writing action group into the action list.


### TAD-Load Action Group - ThoughtAsylum
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 506-castle  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F44A20D8-4BAE-4D47-9E35-14BBEDC072D2  
**Description:**  
Load the ThoughtAsylum action group into the action list.


### Action Control
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 890C2BF1-FC49-4500-A760-3E783322C823  
**Description:**  



### TA-Action Set (Info)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_gear2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** C2EC9D11-46BE-470A-A0F2-09BABB4D1190  
**Description:**  
Displays a list of actions in the ‘info’ set of actions defined in the library settings.  When an action is selected (by button/alias), the action is then queued up to run.


### TAD-Repeat an Action
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sync  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9B717AD7-E342-4F82-8370-01EB0106394D  
**Description:**  
Repeat an action based on input from the user.  The user enters the name of an action and the number of times to repeat it.  The action will then   queue up the action that many times.


### TAD-Code Looper
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sync  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 495BA0ED-04A6-42C0-8530-61463E1C6483  
**Description:**  



### TAD-Null Action
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 433-x  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 0  
**Unique ID:** 8B7681B6-6A7D-4961-8C5B-71724E5F32C7  
**Description:**  
This action does nothing. It can actually be quite useful if you want to dynamically set an action up to be queued, but one of the options you need is to do nothing.


### Helper Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** E8AE8902-9B42-4F97-AFC5-3DDBA0A592FC  
**Description:**  



### TAD-Reload Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 609-rotate  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 3A2D0CF4-6D2A-4632-B86E-D268B9C935E9  
**Description:**  
Used for forcing a reload of a draft in the editor.  This can be useful for example, when tags are modified through scripting on the current draft.  By queueing up a reload of the draft, we can ensure that metadata is correctly displayed.


### TAD-Get Drafts & System Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 442-information-symbol1  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1D7FE9C4-B55B-49C7-A5FF-6B8020F0E76D  
**Description:**  
Get Drafts and system information and place it into custom template tags.  The action doesn’t do anything with the tags; the intent is that this action would be called by another that could then insert it into a text, mail, etc.


### TAD-Action Menu
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 665-gear  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** DD0EE6CD-14D2-40DB-8739-CEAB939DFD38  
**Description:**  
This is a helper action called from another action that sets up several template tags to populate the menu.

There is an example action in the ThoughtAsylum - Power User action group called `TAD-Info Menu` that you can clone to build your own action menu.

It uses `actiondisplaynames` and `actionnames` template tags to list the buttons and the actions they trigger (first line in one maps to first line in other, etc.

It uses `prompttitle` and `promptmessage` template tags to specify the name and message for the prompt the user chooses from for which action to run.


### TAD-Prime Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 514-document-2  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 5  
**Unique ID:** E159B8AA-801C-4F7A-8BBC-4F0CE15DABBB  
**Description:**  
This prime preview action supports custom CSS, draft transclusion, draft template tag expansion, base64 encoded images, syntax highlighting, mermaid diagram blocks, Font-Aweseome, Drafts/GitHub style check box conversion, critic strikethrough (GFM rendering only), and both MutiMarkdown and GitHub Flavour Markdown rendering options.  It should not be run directly, and will issue an error if it is, but rather included from another action which sets the CSS tag (`css`) and the rendering engine template (`engine`) as MultiMarkdown (MMD), or GitHub Flavour Markdown (GFM).


### TAD-Do Not Run on Mac
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 691-iphone-4  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 4B67B3AD-0B16-42D5-9449-64EC377297D9  
**Description:**  
This is a helper action intended to be included in other actions. When it is executed, it checks to see if the device the action is being run on is a Mac. If it is, it will display an error message and cancel the action.


### TAD-Run Only on Mac
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 700-imac  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 86BFCDC1-BD98-424F-A4AF-DB39344A0732  
**Description:**  
This is a helper action intended to be included in other actions. When it is executed, it checks to see if the device the action is being run on is a Mac. If it is not, it will display an error message and cancel the action.


===
## ThoughtAsylum - Export/Import/Share

### Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 2F027DF6-4AEC-43CA-A6D3-C7DA5A919E08  
**Description:**  



### TAD-Instructions (Export/Import/Share)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** 08626621-7293-4B98-A330-A6EFEC7B56B2  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210508


### Populate Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 292FBB35-D417-4C17-8283-F68801ADE2D1  
**Description:**  



### TAD-Copy Current Line(s)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 437-minus  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BD4DBE96-892A-4852-899D-D211C3FD756E  
**Description:**  
Copies the lines that are part of the current selection to the clipboard.


### TAD-Cut Current Line(s)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** minus  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8A15CD34-1ACE-4A63-BAEB-AC95105B0903  
**Description:**  
Cuts the lines that are part of the current selection to the clipboard.


### TAD-Copy Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2AA3A153-A3A5-4F5C-9964-187B9E8CB450  
**Description:**  
Copies the line prior to the current selection if there is one.  The current selection is retained.


### TAD-Cut Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8D7594F7-A357-46A6-B9EA-5CDC7D66B29A  
**Description:**  
Cuts the line prior to the current selection if there is one.  The current selection is retained.


### TAD-Copy Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 31FD30A3-F08F-4BDE-BFC9-3978CB521AE5  
**Description:**  
Copies the line after the current selection if there is one.  The current selection is retained.


### TAD-Cut Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EB6DF387-D1E7-4CCB-89B7-DA1186078292  
**Description:**  
Cuts the line after the current selection if there is one.  The current selection is retained.


### TAD-Copy Title
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 28FC387C-0793-4950-96DB-CD4735A968CF  
**Description:**  
Copies the title (first line) of the current draft to the clipboard.


### TAD-Copy Body
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 70954A97-B746-4715-984D-063126F56720  
**Description:**  
Copy the body (all but first line) of the current draft to the clipboard.


### TAD-Copy All
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 429C987E-E2E3-4F1B-9D05-A1D8DB9741A2  
**Description:**  
Copy all of the current draft content to the clipboard.


### TAD-Copy All as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** D28C8D7B-5D8D-4A1D-A310-CECD479BFE0B  
**Description:**  
Copy an HTML conversion of the current draft content to the clipboard.


### TAD-Copy Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags_selected  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 077947EC-F1FD-4865-B543-593C7EBE097F  
**Description:**  
Copy all of the tags for the current draft to the system clipboard as a comma separated list of tags.


### TAD-Copy UUID
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 655-barcode  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** DE8A2F83-4FD3-4E73-AA0D-F29D9F3093CA  
**Description:**  
Copy the unique ID of the draft to the clipboard.


### TAD-Copy MD Headings
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 62E051F1-D933-41E0-A725-DB31CF483D1C  
**Description:**  
Copy a list of Markdown headings from the current draft to the clipboard, in order, with each heading on a separate line.


### TAD-Copy Draft Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0DB1003D-DFF8-4031-B8CD-C193129EE59A  
**Description:**  
Copy a (Drafts URL) link to the current draft to the system clipboard.


### TAD-Copy Current Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 8BDBDBC6-B932-4F80-B350-71FFCB5B1168  
**Description:**  
Copies the current latitude and longitude as a comma-space separated pair of numbers to the clipboard.
This action requires location services to be accessible by Drafts.


### TAD-Copy Draft Creation Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** D251D0EF-66A8-4ADE-828F-985694211D3A  
**Description:**  
Copy the latitude and longitude as a comma-space separated pair of numbers for where the draft was created to the clipboard.
This action requires location services to be accessible by Drafts.


### TAD-Copy Draft Modified Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F1C2C554-EC2A-42DB-AAC9-607853862E05  
**Description:**  
Copy the latitude and longitude as a comma-space separated pair of numbers for where the draft was modified to the clipboard.
This action requires location services to be accessible by Drafts.


### TAD-Copy Drafts Version
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** C5322C2B-8B07-44B1-AAA6-240823FC3AE7  
**Description:**  
Copy the Drafts app version to the clipboard.


### TAD-Copy Drafts & System Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 442-information-symbol1  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A9930CC9-46F8-41F8-A7A5-65080C7DEC31  
**Description:**  
Copy Drafts and system information to the clipboard.


### TAD-Copy Drafts & System Info MD
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 452-information-symbol2  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0FC9D201-863C-4F3A-92B3-9A9B86C0B19D  
**Description:**  
Copy Drafts and system information to the clipboard with titles formatted for bold in Markdown.


### TAD-Copy Recent Draft Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** crystal-ball  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 439A632B-7EB1-4DF3-9264-D2D4CF6E930F  
**Description:**  
Allows the user to select a recently modified draft (configured by default to be up to the last 10), and get some information about it based on Drafts' template tags system.  A list of common standard tags are displayed, but the user also has the option to specify tags ad hoc which allows tags with variable parts (e.g. date formatting, line numbers) or multiple tags, to be specified.  The result is copied to the clipboard.


### TAD-Convert Clipboard from Markdown to HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 331-download  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0B40F8FC-C259-418E-8687-76B71538305B  
**Description:**  
Convert clipboard Markdown contents to HTML, using Draft’s default Markdown to HTML settings.


### TAD-Extended Copy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** pages  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 21C32EFC-3E26-4944-91BD-13F276AD50D3  
**Description:**  
Copy the selection as normal, but if there is no selection, copy the line the cursor is currently on to the clipboard.


### TAD-Extended Cut
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** cut  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 48317431-728A-4B88-B01B-B8B376337358  
**Description:**  
Cut the selection as normal, but if there is no selection, cut the line the cursor is currently on to the clipboard.


### TAD-Copy as Rich Text
**Type:** Action  
**Keyboard Shortcut:** ⌃⌥C  
**Icon:** newspaper  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DF6E1492-0FC3-400F-9E98-EF5964942AEE  
**Description:**  
Converts Markdown to rich text and places it on the clipboard. If no text is selected, the content of the entire draft will be converted and copied. If a text selection is made, then only that selected text will be converted and copied to the clipboard. The styling is based on the definition of the STYLE template tag.


### Share as Content
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 22E4F519-6123-423E-A718-376DA68D9622  
**Description:**  



### TAD-Share as Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 228C6299-A8E8-4B9E-B5F2-98979816ACA1  
**Description:**  
Share draft content as text


### TAD-Share as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 2536C08E-9FE2-4C96-A0FA-6EF997521A6D  
**Description:**  
Run the draft content through the Markdown processor to convert it ot HTML, and share the resulting HTML.


### TAD-Share Selection/Draft (Text)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5CAF80B8-4726-428D-84EF-20EC8130470D  
**Description:**  
Shares the selection, or the whole draft if nothing is selected.
Shares as Text.


### TAD-Share Selection/Draft (HTML)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 891656A3-84F6-4BA9-A05A-0F73B49E3DDB  
**Description:**  
Converts the selection, or the whole draft if nothing is selected from Markdown to HTML using the Markdown processor, and then shares the resulting HTML.


### TAD-Share Current Section
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** CA989A65-9B9E-4501-8716-B25C9A7B3255  
**Description:**  
Shares the current section based on standard navigation markers for the Draft syntax.


### Share as File
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 734C9C9A-2B69-45A2-9FD0-406D05A29259  
**Description:**  



### TAD-Share as File: Generic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** DCEF9306-4C8B-4B39-AC18-1DE4FE33BED9  
**Description:**  
Share draft as a file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will not be set by default and should be specified in the filename by the user.


### TAD-Share as File: Syntax
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 9C8467C1-C2BD-4FA4-97A8-6B69F1606033  
**Description:**  
Share draft as a file of a type based on the syntax of the draft.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be based on the syntax specified for the draft.


### TAD-Share as File: Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 713143EB-5EF8-41A2-9E25-542B161B04DC  
**Description:**  
Share draft as a text file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .txt if not included.


### TAD-Share as File: Markdown
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃S  
**Icon:** action_export  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 85574877-FCF7-47FC-9B14-66B23FEE79CA  
**Description:**  
Share draft as a Markdown file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .md if not included.


### TAD-Share as File: Multi-Markdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EFF1D831-1B0E-4037-8C0A-AF2B295ED870  
**Description:**  
Share draft as a Multi-Markdown file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .mmd if not included.


### TAD-Share as File: HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9DEF5737-B143-49F0-BC1C-A2118768A8E8  
**Description:**  
Share draft as an HTML file.  This involves Drafts converting the file from some from of Markdown using Drafts’ amrkdown to HTML processor.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .html if not included.


### Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 54F5C54F-C949-420B-9F0B-75AF14D3031B  
**Description:**  



### TAD-Clear Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-cancel  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2D782DAD-2D65-4768-8A4A-EB6C21BD9FA3  
**Description:**  
Set the clipboard to an empty string


### TAD-Prepend Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 102E79AA-20D2-439A-A0DD-95C0C6E9FECA  
**Description:**  
Prepend the selection to the clipboard.
This action will insert a new line character between entries to separate them


### TAD-Append Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 23CC0F08-B4C2-4503-B729-5A3AE60E276E  
**Description:**  
Append the selection to the clipboard.
This action will insert a new line character between entries to separate them


### File Import
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 937980AD-6D0C-41EE-ADC3-790503816061  
**Description:**  



### TAD-File Import With Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** upload  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9E14DC91-1488-4715-A11B-0AC3466CEC4B  
**Description:**  
Import files into Drafts, transferring file creation and modification timestamps, as well as specifying and importing simple front matter tags.


### Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 190BBE08-CC3C-4608-AB28-7A0003FFAE44  
**Description:**  



### TAD-Copy Bear Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2925DFEC-6381-437B-AFEC-492F7F1A630A  
**Description:**  
Copies all Bear tags to the clipboard with each tag on a different line.


### TAD-Export Selection to Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_unchecked  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 12D5E12D-D859-41F7-B71D-92F54372653C  
**Description:**  
Export the current text selection to Bear. If no selection is made, the entire content of the draft will be exported.


### TAD-Export Draft to Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E6C9D6A5-6109-4C83-9E6A-6870CB8895D5  
**Description:**  
Export the current draft to Bear. Any tags on the current draft will also be applied to the new note in Bear.


### TAD-Import Note From Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-down  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 051C6BA4-21A9-4621-867B-1ACB6CFBB244  
**Description:**  
Enter the ID of the Bear note to import and specify any additional tags that should be applied to it. All Bear tags will be copied across as drafts tags. The creation date will also be copied across.


### TAD-Import Notes From Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-in  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 681EE0C1-FCE7-49D8-9A32-5AAEBFEF25F7  
**Description:**  
Enter a set of search criteria to run against Bear.  All matching (non-trashed) notes will be (bulk) imported into Drafts. All Bear tags on a note will be copied across along with the content of the note. The creation date will also be copied across.


### TAD-Bear Grab Selected URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** download  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 79524D96-0A8D-4552-8FF3-7C37CB54B062  
**Description:**  
Send a request to Bear to grab the content of the URL that is currently selected in Drafts.


### TAD-Bear Grab Clipboard URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-download  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2ED6A15F-0AE4-4A1F-BAE5-129C1E732D66  
**Description:**  
Send a request to Bear to grab the content of the URL that is on the clipboard.


### GitHub
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 94527152-6C7F-4C59-ADC1-4A5C7012FFE0  
**Description:**  



### TAD-Push Draft to GitHub Repo
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃G  
**Icon:** 488-github  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 85BAAD53-9C2A-436B-89F2-0096D279CA6B  
**Description:**  
Push a draft to a GitHub repo. You can run this action stand alone, but you can also include it and call it with some template action steps set for the GitHub user ID (`account`) and the repository name (`repo`).


### TAD-Fetch GitHub Repo File
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3CCF3F6C-A474-4FEE-9313-3BA32C48C4A6  
**Description:**  
Fetch the content of a file in a GitHub repo to a new draft. You can run this action stand alone, but you can also include it and call it with some template action steps set for the GitHub user ID (`account`), the repository name (`repo`), and the file path (`path`).


### TAD-Create GitHub Gist from Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AF69BE59-4C97-49B8-94EC-71BEDFFB7930  
**Description:**  
Create a new GitHub gist from the current draft. You can run this action stand alone, but you can also include it and call it with a template action step set for the GitHub user ID (`account`).


### TAD-Fetch GitHub Gist Files
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9E246624-3F2D-49A8-B6BE-260A6976D2A7  
**Description:**  
Fetch the content of a GitHub gist to new drafts - one draft per file. You can run this action stand alone, but you can also include it and call it with a template action step to set for the GitHub user ID (`account`). The action includes a window that lets you select a gist by description.


### Safari (Mac)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** FE6FC9B2-3B7F-430A-8CA7-4B5CFB30D08B  
**Description:**  



### TAD-Mac Safari Tab Links
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** 79DCF116-E13D-4167-B47A-A555AEB26190  
**Description:**  
A Mac only action that inserts the URLs for all of the open Safari tabs at the current cursor position. Each URL is placed on a successive line.


### TAD-Mac Safari Tabs and Links
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** 42665C5D-F58F-49C2-8CAF-89660D9243CC  
**Description:**  
A Mac only action that inserts the tab names andURLs for all of the open Safari tabs at the current cursor position. Each tab has its URL placed on the line beneath


### Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 9958D1B3-641C-4829-BBA7-897F8B4353FF  
**Description:**  



### TAD-Public Post Draft Content to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F9E16B5E-A271-4F6C-B098-29FDF4EABE22  
**Description:**  
Post the current draft’s content to Pastebin as a public paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Public Post Draft Body to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D19F83A3-5C65-47FA-A90A-61E303F3292F  
**Description:**  
Post the current draft’s body to Pastebin as a public paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Unlisted Post Draft Content to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8F456932-0109-4215-BDFB-A8C978E8FB40  
**Description:**  
Post the current draft’s content to Pastebin as an unlisted paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Unlisted Post Draft Body to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FC2B34CB-52A2-4362-A9DC-EAD8A8944E45  
**Description:**  
Post the current draft’s body to Pastebin as an unlisted paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Private Post Draft Content to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6483F2CB-A353-4C0A-8703-8F93B8D71235  
**Description:**  
Post the current draft’s content to Pastebin as a private paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Private Post Draft Body to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 23EC6DD6-CEF3-49B8-A566-99209BDFC82F  
**Description:**  
Post the current draft’s body to Pastebin as a private paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


===
## ThoughtAsylum - Management

### Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C78B0C3A-2E61-412D-BC00-103F2D9C7A66  
**Description:**  



### TAD-Instructions (Management)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** C5995846-FEE6-4C41-AF84-6CF762616B33  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210318


### Draft Status
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 376DCF03-6F4C-4F9D-B0F5-3778923E19D1  
**Description:**  



### TAD-Trash Note
**Type:** Action  
**Keyboard Shortcut:** ⌃-  
**Icon:** trash  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 0  
**Unique ID:** 564172CA-D446-415A-88E7-658DCB3D21A7  
**Description:**  
Move a draft to trash.


### TAD-Archive Note
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** box-bankers  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 0  
**Unique ID:** 3818D4AD-C153-46A0-8074-A88D22D9427A  
**Description:**  
Move a note to archive.


### Draft Syntax
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 569E8674-340D-477E-84D9-AC8FCE609BDD  
**Description:**  



### TAD-Set Syntax
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 790BF977-5184-4EED-B133-54C28AC3032A  
**Description:**  
Switch draft syntax types. 


### TAD-Set Syntax - Plain Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B0EB9583-C4B3-4F06-A9F0-E2B9371721BC  
**Description:**  
Set the current draft’s syntax to Plain Text.


### TAD-Set Syntax - Simple List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** CDD23D8F-61EC-468F-8CF3-D051D7A8730F  
**Description:**  
Set the current draft’s syntax to Simple List.


### TAD-Set Syntax - Markdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** AE05C98B-B5A0-4F46-BA50-8C0CFD0B2F12  
**Description:**  
Set the current draft’s syntax to Markdown.


### TAD-Set Syntax - MultiMarkdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** FBEC0658-4291-4B13-B910-9CA1D58EED1C  
**Description:**  
Set the current draft’s syntax to MultiMarkdown.


### TAD-Set Syntax - GitHub Markdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F07F90D1-A803-4BCF-B411-5D662E774892  
**Description:**  
Set the current draft’s syntax to GitHub Markdown.


### TAD-Set Syntax - Taskpaper
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B6F6C683-FE28-4DF1-800B-5B4702D1BD55  
**Description:**  
Set the current draft’s syntax to Taskpaper


### TAD-Set Syntax - JavaScript
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 592-compose  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 670BFFD1-CEFD-42FD-86EF-337DBFFEC63E  
**Description:**  
Set the current draft’s syntax to JavaScript.


### Mass Processing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 67C3566A-8F17-4081-800F-88048DC1787C  
**Description:**  



### TAD-Blank Drafts to Trash
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 636-trash  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5CB61DE4-9C0B-4870-8AAA-A06FF378D10F  
**Description:**  
Any drafts that are blank are set to be trashed.


### Tag Management
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B5808FFE-4485-41BF-870E-7C252247382D  
**Description:**  



### TAD-Display Tag List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** browser  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 992524EA-7707-45E2-A665-20E95253E172  
**Description:**  
Display a sorted list of all current drafts tags.


### TAD-Copy Tag List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** B34C1803-A626-4C0D-96CC-B44E0C37B1AB  
**Description:**  
Copy a sorted list of all current drafts tags to the clipboard.


### TAD-Insert Tag List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** B930F057-3E46-422B-9761-E28084336906  
**Description:**  
Insert a sorted list of all current drafts tags at the current cursor position, replacing any current selection.


### TAD-Set Tags for Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags_selected  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** D7F9F047-6A5D-4909-BE58-D30F0F0AD876  
**Description:**  
Presents a list of all existing tags in use with the ones used by the current draft pre-selected.
On OK, the draft will be updated to match the tag selection.


### TAD-Remove All Tags From Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 4787B68D-29EF-40E0-B288-839043AB5E96  
**Description:**  
Removes all tags from the current draft.


### TAD-Rename Any Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags_selected  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 23218BB8-9C9E-4732-B7FD-B543D8BE965B  
**Description:**  
Renames a selected tag across all drafts.  The list of tags presented to the user is all tags available in the system.


### TAD-Rename Recent Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags_selected  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AFC68C3D-4F4B-4586-A974-A68539A6E556  
**Description:**  
Renames a selected tag across all drafts.  The list of tags presented to the user is the standard 'recently used' tags available in the system.


### TAD-Delete Any Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 2BD87F4E-2813-47F1-861A-C7C362185C0E  
**Description:**  
Removes a single selected tag from all drafts.  The list of tags presented to the user is all tags available in the system.


### TAD-Delete Recent Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 6FF4F465-028D-4A9C-A731-00ADD9668508  
**Description:**  
Removes a single selected tag from all drafts.  The list of tags presented to the user is the list of 'recently used' tags in the system.


### TAD-Remove Run Tag from Archived Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** pencil-off  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 54A9464A-0647-4BFB-8366-BC78E62D3122  
**Description:**  
Quickly remove the run tag from any archived drafts.


### TAD-Add Bear Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 87A6E07E-9480-4ADE-A9F6-6FFB7EC8E5B8  
**Description:**  
Adds a tag from Bear to the current draft.


### Recent Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** ECB01AC3-F2A4-4ACC-8C93-858A1D67D135  
**Description:**  



### TAD-Load Last Created Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9821E648-FEDB-4223-AE3D-E2A689B2140D  
**Description:**  
Load the draft with the most recent creation date, excluding those in the trash.


### TAD-Load Last Modified Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A4061E2D-9B22-49CB-90FD-C9701110BD30  
**Description:**  
Load the draft with the most recent modification date, excluding those in the trash.


### TAD-Load Last Created Draft (Incl. Trash)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B4282290-1318-42E7-99A1-E437261F8E67  
**Description:**  
Load the draft with the most recent creation date, including those in the trash.


### TAD-Load Last Modified Draft (Incl. Trash)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 99D9FD43-CEF4-440E-80E7-0F8F27A2F1D7  
**Description:**  
Load the draft with the most recent modification date, including those in the trash.


### TAD-Today's Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2BFEC935-D45B-489D-89BB-E2198596D023  
**Description:**  
Load a draft created today.


### TAD-Yesterday's Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AF232918-1FF3-4AF2-8710-864AF632AB25  
**Description:**  
Load a draft createed yesterday.


### TAD-Last 2 Days' Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DF44FFEB-F601-4184-9151-7A139A64E43B  
**Description:**  
Load a draft created today or yesterday.


### TAD-This Week's Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B5038574-2F81-4E91-BED0-D864A24A9C98  
**Description:**  
Load a draft created in the last 7 calendar days, including today.


### TAD-Last Week's Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AD728A1F-35F9-4092-A84D-641C07E3D92C  
**Description:**  
Load a draft created in the last 8 to 14 calendar days inclusive.


### TAD-Last 2 Weeks' Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 83EC28CA-C4CC-4A74-BDAD-A77219581745  
**Description:**  
Load a draft created in the last 14 calendar days, including today.


### TAD-Last 4 Weeks' Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8C9A2454-AD9C-459B-9DAB-2C1A40D2AB3B  
**Description:**  
Load a draft created in the last 28 calendar days, including today.


### TAD-This Month's Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 155AF357-A607-4E74-B92A-CB007E904D8D  
**Description:**  
Load a draft created in the previous calendar month.


### TAD-Last Month's Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 563-calendar  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3D82604B-D2E6-417F-92DC-9EB991EDC6A2  
**Description:**  
Load a draft created in the previous calendar month.


### Workspaces
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 7D4C8FA5-836C-4C6D-B522-AF154A2F50E5  
**Description:**  



### TAD-Load Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** folder-check  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2AE8CB93-2C37-4B17-97E0-C95E6D38F2C3  
**Description:**  
Displays a prompt listing all workspaces as buttons in the order the workspaces exist within Drafts.
Tapping on a workspace button loads the workspace.


### TAD-Load Workspace & Open Draft List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** folder-check  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9266280A-60C1-45A7-9757-E3551318EF5F  
**Description:**  
Displays a prompt listing all workspaces as buttons in the order the workspaces exist within Drafts.
Tapping on a workspace button loads the workspace and opens the draft listing pane.


### TAD-Load Previous Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** folder-upload  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8844BBB4-F203-46D5-B44C-A454F4611D74  
**Description:**  
Loads the previous workspace in Draft’s workspaces list, or the first on if no named workspace was loaded (or could not be found).


### TAD-Load Next Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** folder-download  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 68147F37-1244-4080-AD78-6912E2E30DC6  
**Description:**  
Loads the next workspace in Draft’s workspaces list, or the first on if no named workspace was loaded (or could not be found).


### TAD-Copy Workspace List to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** folders  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 254AD458-28DC-4016-918A-0E647D347F83  
**Description:**  
Copies a list of workspaces in order to the system clipboard, with each workspace name being presented on a separate line.


### Templates
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** FD16B854-4962-46FB-93EF-9686118E88E1  
**Description:**  



### TAD-Template from Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 337-flip  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3E028791-31D5-4D92-9683-A51D1ECFB7EC  
**Description:**  
Load a template from a template stored in a draft.


### TAD-Template from File
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** file-code  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0515BAC9-C7F7-4726-9D5B-561327912455  
**Description:**  
Load a template from a template stored in a template file.


### Linking
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 396E9666-DEB7-4F32-BED5-AD49B8BE2490  
**Description:**  



### TAD-Link for Draft (Title)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 777749CE-FE1F-44E2-9573-849807482B80  
**Description:**  
Create a cross-link for a draft based on the draft title. Markdown heading markers are stripped from the start of the link for improved readability.


### TAD-Link for Draft (Title+BL)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B731CBE6-2B73-4F97-B6AC-9D0FE0033AF5  
**Description:**  
Create a cross-link for a draft based on the draft title. Markdown heading markers are stripped from the start of the link for improved readability.

A back link is also added to a back link section in the linked draft.


### TAD-Link for Draft (UUID)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2BA1E1DA-2982-424D-B348-6941396EA1A0  
**Description:**  
Create a cross-link for a draft based on UUID.


### TAD-Link for Draft (UUID+BL)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-alt  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 61BB5A80-09BF-4AD5-B35F-85EF4E844B11  
**Description:**  
Create a cross-link for a draft based on the draft UUID.

A back link (based on UUID) is also added to a back link section in the linked draft.


### TAD-Link for Draft Section
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1D962E0B-B731-47C5-A8C3-645679F2E4FB  
**Description:**  
Create a cross-link for a draft based on the draft title and a section. Markdown heading markers are stripped from the start of the link for improved readability.


### TAD-Link for Draft Section (BL)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7D574FCF-D56E-4C05-9BB5-968B1924ECF4  
**Description:**  
Create a cross-link for a draft based on the a draft title and a section within the draft. Markdown heading markers are stripped from the start of the link for improved readability.

A back link is also added to a back link section in the linked draft.


### TAD-Load a Linked Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** map-search  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 61743002-8C09-4036-ADD7-D4DA40363658  
**Description:**  
Generates an ad hoc list of back linked drafts - i.e. any draft that includes any type of draft wiki-style link (title, display title, with or without the ‘d’ identifier, or a UUID link). Drafts are displayed in last modified order along with a set of information to help you distinguish similarly or identically named drafts.  Selecting a draft will load it into the editor.


### TAD-Link for Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 363-3up  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 096A2E0A-C441-4996-9104-A171BF4BF586  
**Description:**  
Create a cross-link for a workspace.


### TAD-Link for URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode-selected  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B4956C41-4A77-43F4-90E5-3B4BA2232087  
**Description:**  
Create a cross-link for a URL.


### TAD-Link for Drafts Action
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 665-gear  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DEDCD56D-DADD-4E22-A24D-F605EDEB197B  
**Description:**  
Create a cross-link to run a drafts action.


### TAD-Link for Draft Search
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** search  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 710A861B-DF19-47E2-B410-3FF4F772DF97  
**Description:**  
Create a cross-link for a draft search. If you enter or cancel, an empty search will be inserted.


### TAD-Link for Google Search
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_google_drive  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 78A404C7-A244-46B3-AB81-45944ED79827  
**Description:**  
Create a cross-link for a Google search. If you enter or cancel, an empty search will be inserted.


### TAD-Link for Wikipedia Page (Name)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** book  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DA83BA20-2059-4180-920B-4D7187C42685  
**Description:**  
Create a cross-link for a Wikipedia page, by name.


### TAD-Link for Bear Note (Name)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 348-bold  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0B175AE9-B086-4F35-A7ED-8B2D925406F5  
**Description:**  
Create a cross-link for a Bear note, by name.


### TAD-Select and Process Cross-Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** stack  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EDE0ACEF-DBF9-4F16-9204-1EFE4C90BD78  
**Description:**  
Display a list of available cross-links in the current draft.  The user selects a cross link, and the action will attempt to process it. The action supports title and UUID based draft links, searches, workspace, URLs, Google Searches, Wikipedia searches and Bear note links.  The user selection of links is sorted alphabetically and is deduplicated.


### TAD-Select and Process MD Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** stack  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A2C7B43A-8D93-4943-8815-9404CA103B41  
**Description:**  
Display a list of available Markdown links in the current draft.  The user selects a link title, and the action will attempt to process it.  The user selection of links is sorted is deduplicated.


### TAD-Process Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** radio-button-active  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2A447ED6-156E-4066-A62B-821AE243D2CF  
**Description:**  
Taking the start of any selection as the cursor location, this action will attempt to identify any Markdown or wiki-style cross-link that the cursor is within.  The action will then process that link as though it was a link the user had manually activated.  If you favour the keyboard as your primary Drafts interaction device, consider creating an action that calls this one and assign it a keyboard shortcut.


### TAD-Process URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode-selected  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7CB71C5E-DCAC-4DFF-ADBC-B12E460A1201  
**Description:**  
Open a URL located under the cursor. Will also open Markdown links from positioning the curosr anywhere within the link block.


### TAD-Before Previous Wiki Link End
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4B36E981-D220-4811-B7BE-917C350651FE  
**Description:**  
Move the cursor to just after the last character inside the previous wiki link. If there are no wiki links beyond the curent cursor position, the cursor will remain where it is.


### TAD-After Previous Wiki Link Start
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5BC0557B-B3F0-4801-BF77-16D9558DED81  
**Description:**  
Move the cursor to just before the first character inside the previous wiki link. If there are no wiki links beyond the curent cursor position, the cursor will remain where it is.


### TAD-Before Next Wiki Link End
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AAD86757-5F38-4D64-A4B4-27BF67BC61C3  
**Description:**  
Move the cursor to just after the last character inside the next wiki link. If there are no wiki links beyond the curent cursor position, the cursor will remain where it is.


### TAD-After Next Wiki Link Start
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F6CE563D-E45B-49B3-99F8-D15273C9A13D  
**Description:**  
Move the cursor to just before the first character inside the next wiki link. If there are no wiki links beyond the curent cursor position, the cursor will remain where it is.


### Link Note
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 14D530BC-14BA-4AE0-B0E6-D5BD68437CC0  
**Description:**  



### TAD-Insert Ref & Copy URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9BFBC4BC-EE6C-457E-80F2-3AA9A86CBF24  
**Description:**  
Prompts the user for a note. This note is then placed into the current draft at the cursor along with a unique identifier and some strings to delimit and separate the content.

The unique identifier is essentially made of the unique ID of the draft plus an epoch time index.

Once inserted, the action also copies an x-callback URL to the clipboard that can be used to jump back to this insertion; by way of the second action.

For more information, see https://forums.getdrafts.com/t/url-link-to-a-spot-in-a-draft/2412/3


### TAD-OpenRef
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** E90FF0CF-1279-4A98-AAFB-2AFD631A7F27  
**Description:**  
The URL generated by the TAD-Insert Ref & Copy URL action will trigger Drafts to open with a piece of text and run this action. The text is the unique identifier in our earlier draft. The action splits the identifier, opens the draft specified by the UUID and locates the position of the unique position identifier and sets the cursor to the start of the identifier.

For more information, see https://forums.getdrafts.com/t/url-link-to-a-spot-in-a-draft/2412/3


### Draft Embedding
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 9BE1D60C-2B69-4975-8127-787DE3723F0C  
**Description:**  



### TAD-Embed a Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 331-download  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 05028DB4-6691-4EB8-817F-2238042E7546  
**Description:**  
Create a refreshable embed block in a draft that includes another draft’s content.


### TAD-Refresh Embeds of this Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 408-screen-sharing  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F4311EAE-3579-44CD-A448-D36E1A86AC47  
**Description:**  
Searches all other non-trashed drafts for an embed block for the current draft and refreshes them to include the current content of the draft.


### TAD-Refresh Embeds in this Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 368-code-sync  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4E72C9A5-8E8E-4DC7-A7A0-5B05C7041458  
**Description:**  
Refreshes the content of all embed blocks in the current draft.


### Load Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 614EEE3A-36C6-497C-8AFE-9CF743D2B933  
**Description:**  



### TAD-Open Draft by Clipboard UUID
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 599-door-open  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** C0F3B02F-F834-41F0-AEA5-9794C4B4B936  
**Description:**  
Given a UUID on the clipboard, open a Draft


===
## ThoughtAsylum - Trove

### Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** FEEA468A-30F5-4C25-AD75-A0FE8FDC58BF  
**Description:**  



### TAD-Instructions (Trove)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** 6F6C9016-8D2E-4507-8512-03BA1731B6F9  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210508


### Dictation
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 3D8E2CD7-F656-45C0-BEEF-3ED6323BF499  
**Description:**  



### TAD-Dictate to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_dictate  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A9997CE8-876E-45F4-99E4-DB23FAFCE042  
**Description:**  
Use Drafts to capture dictated text, and then place that text on the system clipboard when ‘create’ is selected. Note, this action does not create a new draft.


### TAD-Dictate Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_dictate  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 58181C1F-ECA5-412B-8A47-661A8E0A245A  
**Description:**  
Use Drafts to capture dictated text, to a time stamped log entry at the current cursor position.


### TAD-Dictate Simple List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 429-checkmark2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A2353E42-2C16-4121-AE27-BC090B63E2F8  
**Description:**  
Dictate entries to a new simple list format in a new draft, which is loaded into the editor.  You can use the dictation phrase “newline” to splt entries.


### TAD-Dictate Taskpaper List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 427-todo-list  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 85E9DA14-F086-4AAB-B831-A0A9153DFEB2  
**Description:**  
Dictate entries to a new Taskpaper format in a new draft, which is loaded into the editor.  You can use the dictation phrase “newline” to splt entries.


### TAD-Dictate Markdown List
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_reminders  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1C4D2916-DD5D-4EA0-AB0D-AF35D5CFED85  
**Description:**  
Dictate entries to a new Drafts Markdown list format in a new draft, which is loaded into the editor.  You can use the dictation phrase “newline” to splt entries.


### Reader Mode
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** BAF760B5-DF83-48E6-8EA2-349B0133EEF0  
**Description:**  



### TAD-Enable Reading Mode
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 534-eye  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6320A206-4304-41E3-B119-DB0CEABF73B8  
**Description:**  
Enable reading mode.


### TAD-Disable Reading Mode
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 534-eye  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BEB4B4CA-605C-4881-8373-BFF5D229E70D  
**Description:**  
Disable reading mode.
This action is set to turn all options off (the implicit defaults), but you could duplicate to create your own to keep your preferred settings. The options are link mode, focus mode, and idle disabled mode.


### TAD-Display Reading Mode Settings
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 534-eye  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6A80B3E2-E450-4194-8846-1CBD3F53A78E  
**Description:**  
Display details of the settings for reader mode.


### Mac Audio
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** E45538EA-045C-437A-B4DF-D56B9F0C2DC8  
**Description:**  



### TAD-Play MP3 From Data
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 615-sound-2  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** 156D1859-1829-4B5B-9B64-5A95BAF41B8B  
**Description:**  
Plays a base64 encoded MP3 using a preview window. The base64 content of the sound has been specified in a tag definition.


### TAD-Play System Sound
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 615-sound-2  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** 124C7D4C-4766-49A2-9A2A-BF5CEBE9A0EB  
**Description:**  
Play a local audio file using a shell script. The file path is specified by defining a template tag.


### App Control
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 80243CE9-92B0-4224-AA22-7D1A0766AA95  
**Description:**  



### TAD-Quit Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** cancel  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 994902F7-E666-4E72-AE7E-8394DE5F952E  
**Description:**  
Close the Drafts app.
Mac only as uses AppleScript.


### TAD-Toggle App Theme
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 336-reloop  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2280E03D-92C8-4224-832F-CD0B5AE7CE8C  
**Description:**  
Switch the app theme to light or dark, changing the theme it is in now. This will switch the theme out of system/automatic.


### TAD-Toggle Typewriter Mode
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 341-keyboard  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 6372097B-EAC1-47FC-A53F-1F41BF459E19  
**Description:**  
Toggle the typewriter mode on and off


### TAD-Toggle Idle
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 393-sofa  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FBC96171-7CD6-42BB-B5CA-8A80AAB0772B  
**Description:**  
Toggle Drafts’ idle mode.  This will not have any effect on macOS.


### TAD-Search Actions
**Type:** Action  
**Keyboard Shortcut:** ⌘/  
**Icon:** 359-binoculars  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 251EAD82-E6A9-4004-A20D-11AFC6E533FE  
**Description:**  
Opens a URL to search the actions list, placing the cursor in the search field. Link to this and assign it a keyboard shortcut.


### App Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** BE35AF42-0316-4BA6-A556-F638426E2910  
**Description:**  



### Draft Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 9B23682B-93E3-43E1-BD08-2D3DB47494BE  
**Description:**  



### TAD-Display Random Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 623-dice-3  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** E8D0C963-9BD4-442D-9183-E876F508CB2A  
**Description:**  
Display a randomly selected line from the current draft.  It will ignore blank lines (lines that have no content or just whitespace), and will notify you if your draft has no displayable content.


### Web
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B6FF0234-C8AE-454C-8479-F103E74A33C9  
**Description:**  



### TAD-Fetch URL Content to New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 401-globe  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 800726DC-242A-45B4-9189-86FCF9992835  
**Description:**  
Fetches the content of the URL on the clipboard and puts the content into a new draft.


### TAD-Fetch & Load URL Content to New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 401-globe  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5F3BE766-C042-4326-A695-5E01E0CDBBA2  
**Description:**  
Fetches the content of the URL on the clipboard, puts the content into a new draft, and loads the draft into the editor.


### TAD-Google Selected Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** search  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** D197FB85-462B-4C93-8252-F7563B400E1D  
**Description:**  
Open a Google search using the selected text.


### Online Information
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 7EC9A111-A0DE-4B4A-A463-A6CCB9BA1C2A  
**Description:**  



### TA-Display External IP
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 552-flag-1  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7734DDFF-8FDE-4BD2-9D9D-E90B20096E6F  
**Description:**  
Displays the external IPv4 address.


### TA-Insert CSNRG Number
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 625-dice-5  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 37CFE0B9-9364-4653-B653-59C5C538148E  
**Description:**  
Insers a random whole number between 1 and 500 (inclusive) based on an API call to csrng.net, a NIST FIPS 140-2 certified random number generator.

CSRNG = Cryptographically Secure Random Number Generator


### Control Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** A4F6EEC2-0839-4155-AE57-A1765D6F5AA2  
**Description:**  



### TAD-Bear Set Font
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** typography  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 962E6B8E-0D53-4AF3-9A7B-293F21174406  
**Description:**  
Set the font in Bear.


### TAD-Bear Set Theme
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 568-photo  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6A5668B8-39A9-43A7-98FD-FEB2447F5008  
**Description:**  
Set the theme in Bear.


### TAD-Bear Select Locked
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 381-locked  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4B9ADD6C-05B1-487E-B18C-4EB46ACEAA9E  
**Description:**  
Set the sidebar selection in Bear to locked notes.


### TAD-Bear Select Today
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-date  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0F2BD264-965C-44D7-9DEF-EE57DA319BC3  
**Description:**  
Set the sidebar selection in Bear to today’s notes.


### TAD-Bear Select Todo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** checkbox-active  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1168827E-FB92-4517-AECA-0FEFEA40AEBC  
**Description:**  
Set the sidebar selection in Bear to todo notes.


### TAD-Bear Select Untagged
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** inbox-full  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B690EA76-CDA9-4558-A0F9-099D085C4EC3  
**Description:**  
Set the sidebar selection in Bear to untagged notes.


### TAD-Bear Select Archive
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 351-bankers-box  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 53885C17-8080-41B0-8F60-D5DDC9D09184  
**Description:**  
Set the sidebar selection in Bear to archived notes.


### TAD-Bear Select Trash
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 636-trash  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7EF9A289-4E2B-42D1-8BA5-CFDD4C4E50B6  
**Description:**  
Set the sidebar selection in Bear to trashed notes.


### TAD-Delete Bear Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 433-x  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 86E78B60-BE62-4C29-9A69-192667A7CB8E  
**Description:**  
Select and delete a Bear tag in the Bear app. Notes tagged with this will be left in place, but if the tag belongs to any locked notes, the tag cannot be deleted.


### TAD-Rename Bear Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-rotate  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7312B7EE-A5DF-4DDC-81E8-EDC0F20D4D19  
**Description:**  
Select and rename a Bear tag in the Bear app. 


### TAD-Show Tag in Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-search-alt  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AED880D1-6C19-49A2-AB31-F8EA517FE9F5  
**Description:**  
Open the Bear app and select the tag.


### Conversion
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 8115B83F-F636-4E2E-8035-60F47547FFE5  
**Description:**  



===
## ThoughtAsylum - Export/Import/Share

### Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B8A71BE4-F6B2-4E5C-964D-C9D7BCE8F7D1  
**Description:**  



### TAD-Instructions (Export/Import/Share)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** 5B9EF932-37E9-492C-82F2-170B66F6AE8E  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210508


### Populate Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** EC892914-AA25-4746-8390-D795D31B3D62  
**Description:**  



### TAD-Copy Current Line(s)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 437-minus  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 48D0658E-BD5B-49DF-8BFB-4C465EE49CB8  
**Description:**  
Copies the lines that are part of the current selection to the clipboard.


### TAD-Cut Current Line(s)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** minus  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6779F895-4FEF-415F-9F59-814193332366  
**Description:**  
Cuts the lines that are part of the current selection to the clipboard.


### TAD-Copy Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3AD4133C-BE6A-4412-B852-D3DC2E915137  
**Description:**  
Copies the line prior to the current selection if there is one.  The current selection is retained.


### TAD-Cut Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1A9F05B1-06FF-40D0-B73F-9AE3DD2E18DB  
**Description:**  
Cuts the line prior to the current selection if there is one.  The current selection is retained.


### TAD-Copy Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BFFAF2A2-A1EF-4C76-93BB-8B00DCBE503D  
**Description:**  
Copies the line after the current selection if there is one.  The current selection is retained.


### TAD-Cut Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BD69C09C-3C8B-4B58-A9BD-0E90ADCD49E6  
**Description:**  
Cuts the line after the current selection if there is one.  The current selection is retained.


### TAD-Copy Title
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 93F79992-B8F3-490D-AD34-1445F00ADD69  
**Description:**  
Copies the title (first line) of the current draft to the clipboard.


### TAD-Copy Body
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** C680DF7D-F7FC-4954-B4EC-1B9D7401B308  
**Description:**  
Copy the body (all but first line) of the current draft to the clipboard.


### TAD-Copy All
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 941244AF-0C3E-4852-A109-DB37BBE4A0CF  
**Description:**  
Copy all of the current draft content to the clipboard.


### TAD-Copy All as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** CB12A809-D6E7-4C54-B45E-81A9EADCF142  
**Description:**  
Copy an HTML conversion of the current draft content to the clipboard.


### TAD-Copy Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags_selected  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** EF6C5108-30CF-4688-BE17-711C352E43E8  
**Description:**  
Copy all of the tags for the current draft to the system clipboard as a comma separated list of tags.


### TAD-Copy UUID
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 655-barcode  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** EED0B252-8A38-42B7-86D2-B1A905245C82  
**Description:**  
Copy the unique ID of the draft to the clipboard.


### TAD-Copy MD Headings
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4D527CCC-4EB7-457B-82F6-AD154F83ED88  
**Description:**  
Copy a list of Markdown headings from the current draft to the clipboard, in order, with each heading on a separate line.


### TAD-Copy Draft Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** CEA5CB01-CA99-40D3-A6E5-1B839F843813  
**Description:**  
Copy a (Drafts URL) link to the current draft to the system clipboard.


### TAD-Copy Current Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 89B65D42-D54C-4BE0-9C67-AAF678645F9E  
**Description:**  
Copies the current latitude and longitude as a comma-space separated pair of numbers to the clipboard.
This action requires location services to be accessible by Drafts.


### TAD-Copy Draft Creation Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 57301213-DB55-4DB3-AFD9-23135A8BCBFE  
**Description:**  
Copy the latitude and longitude as a comma-space separated pair of numbers for where the draft was created to the clipboard.
This action requires location services to be accessible by Drafts.


### TAD-Copy Draft Modified Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 1C7E7B26-F2F5-492F-8A2E-8F7A3ACD6CFE  
**Description:**  
Copy the latitude and longitude as a comma-space separated pair of numbers for where the draft was modified to the clipboard.
This action requires location services to be accessible by Drafts.


### TAD-Copy Drafts Version
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** E09435AA-A2DE-4916-91CC-5436146A2E12  
**Description:**  
Copy the Drafts app version to the clipboard.


### TAD-Copy Drafts & System Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 442-information-symbol1  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 56883B84-5F0C-434D-9AB9-E3A3888B45BB  
**Description:**  
Copy Drafts and system information to the clipboard.


### TAD-Copy Drafts & System Info MD
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 452-information-symbol2  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 83C7B6BA-FFD9-420F-950D-437474A4E506  
**Description:**  
Copy Drafts and system information to the clipboard with titles formatted for bold in Markdown.


### TAD-Copy Recent Draft Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** crystal-ball  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 893CABC7-8125-4911-8F7D-FB894A07B507  
**Description:**  
Allows the user to select a recently modified draft (configured by default to be up to the last 10), and get some information about it based on Drafts' template tags system.  A list of common standard tags are displayed, but the user also has the option to specify tags ad hoc which allows tags with variable parts (e.g. date formatting, line numbers) or multiple tags, to be specified.  The result is copied to the clipboard.


### TAD-Convert Clipboard from Markdown to HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 331-download  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 433CBBBB-D721-4D07-90EA-93C8E9F4BEB8  
**Description:**  
Convert clipboard Markdown contents to HTML, using Draft’s default Markdown to HTML settings.


### TAD-Extended Copy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** pages  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 49ECFBFC-EF80-49EF-9B4E-FB9BC9758B54  
**Description:**  
Copy the selection as normal, but if there is no selection, copy the line the cursor is currently on to the clipboard.


### TAD-Extended Cut
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** cut  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EBBF9217-C618-46C5-92DC-B8807A980474  
**Description:**  
Cut the selection as normal, but if there is no selection, cut the line the cursor is currently on to the clipboard.


### TAD-Copy as Rich Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** newspaper  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6EE0EEEE-2529-4829-A121-FA5ADB8E4CC4  
**Description:**  
Converts Markdown to rich text and places it on the clipboard. If no text is selected, the content of the entire draft will be converted and copied. If a text selection is made, then only that selected text will be converted and copied to the clipboard. The styling is based on the definition of the STYLE template tag.


### Share as Content
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C4153F43-DE4A-4549-9B25-F74B62EA4351  
**Description:**  



### TAD-Share as Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** C78E3247-67C6-43D6-87BE-7F8B91CFC072  
**Description:**  
Share draft content as text


### TAD-Share as HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** D6264BDE-241A-47EA-934F-3E4DDF36D37E  
**Description:**  
Run the draft content through the Markdown processor to convert it ot HTML, and share the resulting HTML.


### TAD-Share Selection/Draft (Text)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 269D2FCD-C7FB-4121-AB91-80A508F9219A  
**Description:**  
Shares the selection, or the whole draft if nothing is selected.
Shares as Text.


### TAD-Share Selection/Draft (HTML)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DB23CC4F-C83A-494F-BEE5-6884AEFEF887  
**Description:**  
Converts the selection, or the whole draft if nothing is selected from Markdown to HTML using the Markdown processor, and then shares the resulting HTML.


### TAD-Share Current Section
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_share  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 228602BF-1CF2-4B05-AC9C-1D66FF68EBEB  
**Description:**  
Shares the current section based on standard navigation markers for the Draft syntax.


### Share as File
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 1E52B4A1-677A-4F7A-AC08-B1B1D9D594ED  
**Description:**  



### TAD-Share as File: Generic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 5E07BE78-D927-4410-9355-C3147A3FB215  
**Description:**  
Share draft as a file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will not be set by default and should be specified in the filename by the user.


### TAD-Share as File: Syntax
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 4A1D9DB3-9AAD-4D1F-966F-4E69FC9728F0  
**Description:**  
Share draft as a file of a type based on the syntax of the draft.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be based on the syntax specified for the draft.


### TAD-Share as File: Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F2640D3E-AA87-4DC7-B078-DFAE9B738644  
**Description:**  
Share draft as a text file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .txt if not included.


### TAD-Share as File: Markdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EBE201C6-CC53-4776-A80D-3803ABAA38AC  
**Description:**  
Share draft as a Markdown file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .md if not included.


### TAD-Share as File: Multi-Markdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9C58D21F-253A-4306-B3DE-A3C98E38EFBE  
**Description:**  
Share draft as a Multi-Markdown file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .mmd if not included.


### TAD-Share as File: HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0A96C517-40FC-4489-9467-CCB3E065137D  
**Description:**  
Share draft as an HTML file.  This involves Drafts converting the file from some from of Markdown using Drafts’ amrkdown to HTML processor.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .html if not included.


### TAD-Share as File: Taskpaper
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F1E73868-5A6C-4196-A2E8-301B779E2A89  
**Description:**  
Share draft as a Taskpaper file.
A default file name is set based on a safe draft title or a time stamp if no title is present.
The file extension will be set as .taskpaper if not included.


### Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 75F69027-CF4C-404E-AF2F-46A0CEF9E4D9  
**Description:**  



### TAD-Clear Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-cancel  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DB1310FB-494A-43A3-A303-17DD8DD1ACD1  
**Description:**  
Set the clipboard to an empty string


### TAD-Prepend Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D98C6F4D-2790-450A-8B1E-9FD63BF4A355  
**Description:**  
Prepend the selection to the clipboard.
This action will insert a new line character between entries to separate them


### TAD-Append Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7D93EB10-2B3A-41C7-B20F-22ABD14B53B3  
**Description:**  
Append the selection to the clipboard.
This action will insert a new line character between entries to separate them


### File Import
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 6BAEBF2E-124D-4131-B2BD-B90675C27E78  
**Description:**  



### TAD-File Import With Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** upload  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7317A58C-744A-4809-B8B0-F238524D0A3D  
**Description:**  
Import files into Drafts, transferring file creation and modification timestamps, as well as specifying and importing simple front matter tags.


### Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 981CE3A5-EA67-4721-8C98-2AE3FEC1A7D2  
**Description:**  



### TAD-Copy Bear Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 839F64A3-4963-4FC1-A163-6DC7071F7916  
**Description:**  
Copies all Bear tags to the clipboard with each tag on a different line.


### TAD-Export Selection to Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_unchecked  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3A28EAFC-E4E1-4EC5-9744-1221F5A5E9E2  
**Description:**  
Export the current text selection to Bear. If no selection is made, the entire content of the draft will be exported.


### TAD-Export Draft to Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_export  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D1F706A6-9303-4ACE-BF96-18F2DD451E6C  
**Description:**  
Export the current draft to Bear. Any tags on the current draft will also be applied to the new note in Bear.


### TAD-Import Note From Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-down  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FEEBCA59-D04A-4218-890E-FD98826C9F0D  
**Description:**  
Enter the ID of the Bear note to import and specify any additional tags that should be applied to it. All Bear tags will be copied across as drafts tags. The creation date will also be copied across.


### TAD-Import Notes From Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-in  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C6DA9402-8E1B-469A-AD20-F6191CB140E9  
**Description:**  
Enter a set of search criteria to run against Bear.  All matching (non-trashed) notes will be (bulk) imported into Drafts. All Bear tags on a note will be copied across along with the content of the note. The creation date will also be copied across.


### TAD-Bear Grab Selected URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** download  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E7398DB9-1A0C-4B39-87D7-844A2B5A4049  
**Description:**  
Send a request to Bear to grab the content of the URL that is currently selected in Drafts.


### TAD-Bear Grab Clipboard URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-download  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5888B630-9C5C-4C4B-BBDB-913031CA2EC9  
**Description:**  
Send a request to Bear to grab the content of the URL that is on the clipboard.


### GitHub
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 7C305729-93FC-4099-AD65-8100EAAF3865  
**Description:**  



### TAD-Push Draft to GitHub Repo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BB1EBD69-15A1-41DC-899A-ADF904362660  
**Description:**  
Push a draft to a GitHub repo. You can run this action stand alone, but you can also include it and call it with some template action steps set for the GitHub user ID (`account`) and the repository name (`repo`).


### TAD-Fetch GitHub Repo File
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BFB72963-E92E-4DC2-9A9B-DEAAC3D89A16  
**Description:**  
Fetch the content of a file in a GitHub repo to a new draft. You can run this action stand alone, but you can also include it and call it with some template action steps set for the GitHub user ID (`account`), the repository name (`repo`), and the file path (`path`).


### TAD-Create GitHub Gist from Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 80BDAE08-A4A2-4451-93E0-D1B7E799C77F  
**Description:**  
Create a new GitHub gist from the current draft. You can run this action stand alone, but you can also include it and call it with a template action step set for the GitHub user ID (`account`).


### TAD-Fetch GitHub Gist Files
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 488-github  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 091F4AD5-61E7-4269-9440-945BAC42E26F  
**Description:**  
Fetch the content of a GitHub gist to new drafts - one draft per file. You can run this action stand alone, but you can also include it and call it with a template action step to set for the GitHub user ID (`account`). The action includes a window that lets you select a gist by description.


### Safari (Mac)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C0D92608-C6E8-4098-9225-5C28299E4159  
**Description:**  



### TAD-Mac Safari Tab Links
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** E906C401-C7B6-4A58-99C3-CC2B58A0B330  
**Description:**  
A Mac only action that inserts the URLs for all of the open Safari tabs at the current cursor position. Each URL is placed on a successive line.


### TAD-Mac Safari Tabs and Links
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** B8752E7B-05CD-4082-A2F1-0C2C4CF62A1C  
**Description:**  
A Mac only action that inserts the tab names andURLs for all of the open Safari tabs at the current cursor position. Each tab has its URL placed on the line beneath


### TAD-Mac Safari Tab Links (MD)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_url  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** FD5BFD85-84DF-4FA0-9E6F-ADE5AB6E8443  
**Description:**  
A Mac only action that inserts the URLs for all of the open Safari tabs at the current cursor position. The content is formatted as a Markdown list of links.


### Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 18399F6B-B113-4D99-8C24-47F97288E233  
**Description:**  



### TAD-Public Post Draft Content to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A4B21746-AF22-406F-A841-3A83E832BC43  
**Description:**  
Post the current draft’s content to Pastebin as a public paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Public Post Draft Body to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D9FFAA5F-CED3-4004-8EA7-8D309D5F182E  
**Description:**  
Post the current draft’s body to Pastebin as a public paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Unlisted Post Draft Content to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C74978B4-FD58-4A95-BE9B-67D3E6A97968  
**Description:**  
Post the current draft’s content to Pastebin as an unlisted paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Unlisted Post Draft Body to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6F8E6517-D915-4309-866A-803EAC346358  
**Description:**  
Post the current draft’s body to Pastebin as an unlisted paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Private Post Draft Content to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2193E408-9289-4937-8AEB-9927AE828DB7  
**Description:**  
Post the current draft’s content to Pastebin as a private paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.


### TAD-Private Post Draft Body to Pastebin
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6D3EA95D-B758-43AD-90C6-39935B4CDE4F  
**Description:**  
Post the current draft’s body to Pastebin as a private paste, with the draft title as the title of the paste.

The URL of the post will be placed on the clipboard.

This action requires your Pastebin developer API key from your Pastebin account; see https://pastebin.com/doc_api.

===
## ThoughtAsylum - Writing

### Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 8225CA8D-4688-466F-8A7F-C058E1EA48F7  
**Description:**  



### TAD-Instructions (Writing)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** EA2E47B3-95FD-4B73-A1F1-263EE6D321CE  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210508


### Whitespace Removal
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** E6D36D67-309E-4919-B701-3AE90167BB94  
**Description:**  



### TAD-Remove Blank Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7B15AABC-2429-4E72-AE88-A48BA9FD0E61  
**Description:**  
Remove any blank lines from the draft.
Blank lines may have no content or they may have whitespace only.


### TAD-Remove Empty Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F408990C-FB2B-42C8-8D0B-AD4D29D1847D  
**Description:**  
Remove any empty lines from the draft.
Empty lines may have no content, whitespace counts as content.


### TAD-Remove Leading Whitespace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7EE23879-8E5A-4B60-A79E-2404E6F63985  
**Description:**  
Removes any whitespace from the start of lines.  If a line is empty, it will be removed entirely.


### TAD-Remove Trailing Whitespace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4D0E757B-DA74-41E9-87AA-9CAE2C085F22  
**Description:**  
Removes any whitespace from the end of lines.  If a line is empty, it will be removed entirely.


### TAD-Remove Leading & Trailing Whitespace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7817DE9B-DA03-448F-914C-FB780D66B8DB  
**Description:**  
Removes any whitespace from the start and end of lines.  If a line is empty, it will be removed entirely.


### TAD-Remove Leading Spaces & Tabs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 76CB62A3-9D51-46D0-9358-7D89D6AB750B  
**Description:**  
Remove all spaces and tabs from the start of lines.


### TAD-Remove Trailing Spaces & Tabs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 903D3DCE-EEB6-4C83-932E-65568E3E1ACE  
**Description:**  
Remove all spaces and tabs from the end of lines.


### TAD-Remove Leading & Trailing Spaces & Tabs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FAF3BF10-318C-463D-B1FB-2E5B7626EEBC  
**Description:**  
Remove all spaces and tabs from the start and end of lines.


### TAD-Convert Sentence End 2-2-1 Spaces
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-shrink  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 00F78E32-4B00-4CF4-9E3D-A66318F4655D  
**Description:**  
Convert all double spaced sentence ends to single spaced.


### TAD-Compress Spaces and Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** transfer-alt  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 8429DFBC-0201-483B-9DF4-4FA9F513CBC1  
**Description:**  
Compress multiple spaces, blank lines and empty lines.


### Sort & Permute Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C5AE00C4-B1C6-4639-BEFE-61FC0A846745  
**Description:**  



### TAD-Sort All - Alphabetic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 421-sort-a-to-z  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B2420BFF-0125-4670-A460-C5567D414677  
**Description:**  
Sort all lines alphabetically.

Example sort:
réservé
reserve
RESERVE
Reserve



### TAD-Sort All - Reverse Alphabetic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 422-sort-z-to-a  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7CB36EF3-5523-478C-95BC-7F3806533278  
**Description:**  
Sort all lines alphabetically.

Example sort:
Reserve
RESERVE
reserve
réservé


### TAD-Sort Selected Lines - Alphabetic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 421-sort-a-to-z  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F74D1D4C-BD07-4E08-9509-48D1E192FADC  
**Description:**  
Sort selected lines alphabetically.


### TAD-Sort Selected Lines - Reverse Alphabetic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 422-sort-z-to-a  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2A6E0D70-6036-43E9-B351-9A12745D19AA  
**Description:**  
Sort selected lines reverse alphabetically.


### TAD-Sort All - Numeric
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down-circle  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8FF7902E-B33D-44C7-A005-EE44189F0F00  
**Description:**  
Sort all lines by numeric value, ascending.

Example sort:
1
02
21
22
123


### TAD-Sort All - Reverse Numeric
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up-circle  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C32AA870-C337-4A60-8DE9-41709FE23855  
**Description:**  
Sort all lines by numeric value, descending.

Example sort:
123
22
21
02
1


### TAD-Sort Selected Lines - Numeric
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down-circle  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2278EEB7-F407-4260-AF71-704D25D76922  
**Description:**  
Sort selected lines by numeric value, ascending.

Example sort:
1
02
21
22
123


### TAD-Sort Selected Lines - Reverse Numeric
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up-circle  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E6201C93-1A72-4B37-93CA-A08270A41A42  
**Description:**  
Sort selected lines by numeric value, descending.

Example sort:
123
22
21
02
1


### TAD-Sort All - Random
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** transfer  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 122518CC-E614-4C96-A955-F2A385B8DA8F  
**Description:**  
Sort all lines into a random order.


### TAD-Sort Selected Lines - Random
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** transfer  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 20CE69B2-426A-49FE-9E39-18D35FD33756  
**Description:**  
Sort selected lines into a random order.


### TAD-Deduplicate All (Lines)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-merge  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7149E5B1-E9F6-471E-980C-3286C5431023  
**Description:**  
Deduplicates lines in the order they occur.  i.e. only the first instance of the line will be retained.
This action does *not* sort the content.


### Delete
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B8A4B70C-D375-41A9-8A03-036BAE9666FE  
**Description:**  



### TAD-Delete Next Char
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-off  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** ADCBC521-3FC5-4118-988E-B8065674F6F6  
**Description:**  
Reproduces the delete key (not backspace) for when you don't have a physical keyboard with one.
Any text selection will be removed.  If no text selection is present, the character after the cursor will be deleted.


### TAD-Delete Current Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-off  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 913ED55A-B10F-41D5-8FCF-F64618A43DF7  
**Description:**  
Deletes the current line. If more than one line is selected, the deletion will extend to all such lines. If the selection includes some of line 1, all of line 2 and some of line 3, all of lines 1, 2 and 3 will be deleted.


### TAD-Delete Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 74E6ADE8-C801-42C5-A9DC-1F6EB99C6167  
**Description:**  
Deletes the line prior to the current selection if there is one.  The current selection is retained.


### TAD-Delete Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4A949F3C-8F6F-4E68-B558-3FC8A2A134A4  
**Description:**  
Deletes the line after the current selection if there is one.  The current selection is retained.


### TAD-Delete Last Line of Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-off  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 16228B8E-21FC-42F1-91F5-208BCF5A2F8B  
**Description:**  
Delet the last line of the selection


### TAD-Delete First Line of Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-off  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5007794A-1E45-4E25-8417-3D1764CECA3F  
**Description:**  
Delet the first line of the selection


### Select
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** F775254B-A77B-46F5-86AA-02564714A6DA  
**Description:**  



### TAD-Extend Selection Left
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-left  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4A51B169-CECA-42D1-8472-E34DCBED2FCF  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will extend one character to the left.


### TAD-Reduce Selection Left
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-down-right  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BD934C59-08E4-46F6-9A00-AC6A388AA1E9  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will be reduced one character to the left.


### TAD-Extend Selection Right
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-right  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4F04CC1C-9807-4A38-A322-EB33A0FF5EBF  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will extend one character to the right.


### TAD-Reduce Selection Right
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-down-left  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EA730AD1-4B8B-4A89-87C1-0DD9485001F5  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will be reduced one character to the right.


### TAD-Select Word
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** transfer-alt  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 82F28642-B3A5-4735-B631-09179E7FD9D4  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will extend to encompass the largest unbroken sequence of alphanumeric characters (includes underscores, hyphens, en-dash and em-dash too!).


### TAD-Select Current Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 439-left-right  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FDD610C9-72AD-4437-9473-A364114329B2  
**Description:**  
Extend the current line selection to the start and end of the selected lines.


### TAD-Select Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-up  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 77E6C7C3-60E0-4937-8C87-A35EB6A7D626  
**Description:**  
Selects the line before the curent selection. This is not an extension of a selection, but a re-selection. If the current line is the first line, it will be reselected.


### TAD-Select Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-down  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3A76C035-5AB5-4032-9782-0177D26E6D6E  
**Description:**  
Selects the line after the curent selection. This is not an extension of a selection, but a re-selection. If the current line is the last line, it will be reselected.


### TAD-Select First Line of Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 439-left-right  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 725BA1D8-B6A6-43D8-BAC9-A252B62C1652  
**Description:**  
Set the selection to the line of the start cursor position of the current selection


### TAD-Select Last Line of Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 439-left-right  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B5C81416-B90D-433B-86CA-A8158D9F65AD  
**Description:**  
Set the selection to the line of the end cursor position of the current selection


### TAD-Select Paragraph
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-expand  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D61CE376-2857-4E6D-BA69-9CAAF8375CE1  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will change to be that paragraph as delimited by any combination of a sequence of two new line characters, the start, and the end of the draft.  i.e. it will select multiple lines until it encounters an empty line in either direction of searching.


### TAD-Select All Content
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 631-infinity  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 920DF3ED-56C1-4BB4-8430-0217449A5194  
**Description:**  
Select all content shown in the editor.


### Move Cursor
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B9602A16-5940-43AE-A9B3-A199AE41FCF0  
**Description:**  



### TAD-Move Cursor Left
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-left  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7F273925-F3BB-4F00-AB50-D7B81CD84883  
**Description:**  
Move the cursor one character left.


### TAD-Move Cursor Right
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-right  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 36DD9F24-01A2-4EE4-AA26-5F922BA0160F  
**Description:**  
Move the cursor one character right.


### TAD-Jump to Start of Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3F0144E9-1877-490E-9E65-57305C14C9AA  
**Description:**  
Move the cursor to the start of the line for the start of the current selection. Also activates the editor and returns the cursor position.



### TAD-Jump to End of Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A09DB7A0-2BE2-4A30-8ED0-1F258679E7C6  
**Description:**  
Move the cursor to the end of the line for the end of the current selection. Also activates the editor and returns the cursor position.


### TAD-Jump to End of Previous Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 475-rewind2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E72736B2-38FB-4691-88FB-5A13843537D9  
**Description:**  
Places the cursor at the end of the line before the line the cursor is currently on.


### TAD-Jump to Start of Next Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 476-fast-forward2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 86DDF48A-4449-4AAA-ACCB-6F9C72E7EB0E  
**Description:**  
Places the cursor at the start of the line after the line the cursor is currently on.


### TAD-Jump to Start of Next Sentence
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 476-fast-forward2  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 09045A61-9666-4277-AC9D-FA0CC62AAAEF  
**Description:**  
Places the cursor at the start of the next sentence.


### TAD-Jump to Start of Current Sentence
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 480-eject2  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 406054F6-6E0C-4561-AAC3-53526A289BF4  
**Description:**  
Places the cursor at the start of the current sentence.


### TAD-Jump to Start of Previous Sentence
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 475-rewind2  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1E95651D-DE0A-49F3-82AC-3CCA79EB5B44  
**Description:**  
Places the cursor at the start of the previous sentence.


### TAD-Jump to Paragraph Start
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6259D1BE-EC13-42CB-8AB6-4A71E4781561  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will change to be that of the start of the current paragraph as delimited by any combination of a sequence of two new line characters, the start, and the end of the draft.


### TAD-Jump to Paragraph End
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C9BC661C-F6BD-4604-B622-7AE509A5A421  
**Description:**  
Based on the line the cursor/start of the current selection is on, the editor text selection will change to be that of the end of the current paragraph as delimited by any combination of a sequence of two new line characters, the start, and the end of the draft.


### TAD-Jump to Start of Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C8D186DB-92FF-41D2-9D9D-CB82AFD6EA35  
**Description:**  
Places the cursor at the start of the Draft


### TAD-Jump to End of Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3CF333AB-6673-4BA7-93DA-314A4EA1F6DA  
**Description:**  
Places the cursor at the end of the Draft


### Insert Content: General
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** D0287862-FBE8-43AF-BD03-359D8C474869  
**Description:**  



### TAD-Insert Tab
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-right  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5E11C6D9-F583-45B1-BA93-E50E210F409E  
**Description:**  
Type tab character.


### TAD-Tab
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5095897F-D452-4E26-8C9B-C66B21B90208  
**Description:**  
Based on the selection, this action tries to intelligently apply an untab.


### TAD-UnTab
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent-decrease  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6752A48B-FFED-4898-B34F-1610AB44981B  
**Description:**  
Based on the selection, this action tries to intelligently apply an untab.


### TAD-Indent
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2CC8FF41-8BCA-4CC2-A4AC-7BA445F9FD8F  
**Description:**  
Based on the selection, this action tries to intelligently apply an indent.


### TAD-Outdent
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** indent-decrease  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D6EAA3B9-021F-4E8D-B750-E9EED988586C  
**Description:**  
Based on the selection, this action tries to intelligently apply an unindent/outdent.


### TAD-Insert Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2D793DD6-88F2-4C41-9BB5-8236E9E12528  
**Description:**  
Insert the contents of the system clipboard.


### TAD-Insert Middle Dot
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 434-o  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 67B340F0-EF99-4E44-A9B1-93D08E5960A6  
**Description:**  
Insert • character


### TAD-Insert Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_tags_selected  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DE3091CA-A032-4EC2-AF9A-2D4B87354924  
**Description:**  
Insert all of the current draft's tags, separated by commas


### TAD-Insert Tags as Hash Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 9FADEC49-D20F-48D3-9E1A-054E2C6B662D  
**Description:**  
Insert hash tags at the current cursor position for each of the current drafts’ tags.


### TAD-Append Tags as Hash Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** A36E5E6C-08DB-43B4-B72F-2380B13F6B92  
**Description:**  
Insert hash tags at the end of the current draft for each of the current drafts’ tags.


### TAD-Insert Draft UUID
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 655-barcode  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 49A649BD-BB50-49D8-A087-C53E1159E0E8  
**Description:**  
Insert the UUID of the current draft


### TAD-Insert Draft Link
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 878711BE-1EC8-4F21-B7F0-A3695AF8EA9C  
**Description:**  
Insert the link to the current draft


### TAD-Insert Current Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F50335EB-627B-472F-B120-37B8BA455C5F  
**Description:**  
Insert the current latitude and longitude as a comma-separated pair of numbers.

This action requires location services to be accessible by Drafts.


### TAD-Insert Draft Creation Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 71348BEB-1478-42ED-B916-0FF0D62F34D5  
**Description:**  
Insert the latitude and longitude as a comma separated pair of numbers for where the draft was created.

This action requires location services to be accessible by Drafts.


### TAD-Insert Draft Modified Latitude & Longitude
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 311-waypoint-flag  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 43126C81-B327-40CC-8C6A-DB50367867E0  
**Description:**  
Insert the latitude and longitude as a comma-separated pair of numbers for where the draft was modified.

This action requires location services to be accessible by Drafts.


### TAD-Insert Drafts Version
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F659C7E3-5DF0-46F7-853D-9A94FC7F33EB  
**Description:**  
Insert the Drafts app version.


### TAD-Insert Drafts & System Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 442-information-symbol1  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DD160977-DFF6-4E89-80E4-1C085C672A1A  
**Description:**  
Insert Drafts and system information.


### TAD-Insert Drafts & System Info MD
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 452-information-symbol2  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 790090DE-3D08-4A30-9EA0-CD87E5C142D7  
**Description:**  
Insert Drafts and system information with titles formatted for bold in Markdown.


### TAD-Insert Recent Draft Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** crystal-ball  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4B7C659A-B357-4800-9BE4-5B208947D040  
**Description:**  
Allows the user to select a recently modified draft (configured by default to be up to the last 10), and get some information about it based on Drafts' template tags system.  A list of common standard tags are displayed, but the user also has the option to specify tags ad hoc which allows tags with variable parts (e.g. date formatting, line numbers - no “[[“ and “]]” required) or multiple tags, to be specified.  The result is inserted at the current cursor position.


### TAD-Insert New UUID
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 623-dice-3  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2090772F-B78B-41AC-865F-BCE784210DC0  
**Description:**  
Insert a generated UUID.


### Insert Content: Current Date/Time
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 03DEC179-EEB6-4832-AD2D-65E68B46C898  
**Description:**  



### TAD-Insert yyyy-mm-dd-HH.MM.ss
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-time  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 175350A0-36C0-4BD0-AFB1-80E52EE70AC2  
**Description:**  
Insert a date-timestamp in the format yyyy-mm-dd-hh.mm.ss format.


### TAD-Insert yyyy-mm-dd
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-date  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0BA719B4-640A-4B8F-A770-73A889D27A8E  
**Description:**  
Insert a date stamp in the format yyyy-mm-dd


### TAD-Insert HH.MM.ss
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clock  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0B17050B-CEB6-4C85-90E6-9CB1F1BEA6B4  
**Description:**  
Insert time as hh.mm.ss


### TAD-Insert HH.MM
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** time  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F2BB121A-8062-44AB-8528-97B8A0BD4A1F  
**Description:**  
Insert time as hh.mm


### TAD-Insert yyyymmddHHMMss
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-time  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** E7F0E516-06BD-448A-88E4-2000ACA26255  
**Description:**  
Insert a date-timestamp of the format yyyymmddhhmmss


### TAD-Insert yyyymmdd
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-date  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 00D81F15-8BC9-4523-8E9D-AA86C43679D9  
**Description:**  
Insert a datestamp in the format yyyymmdd


### TAD-Insert HHMMss
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clock  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0D4D78E7-B715-415A-9E06-FAAE32C46026  
**Description:**  
Insert timestamp in the format hhmmss


### TAD-Insert HHMM
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clock  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 7CAF82E3-D9E7-4A0E-92CE-66ED43B5A578  
**Description:**  
Insert timestamp in the format hhmm


### TAD-Insert Week Number
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-15  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** DAEECE7C-8882-466B-9B66-54F4C0C94999  
**Description:**  
Insert the week number for the currentweek of the year. Based on a week beginning on Monday.


### TAD-Insert DDDD dd/mm/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-next  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 84781D0D-32E7-400F-BE7F-097230271B54  
**Description:**  
Insert today’s date in the format {day of week} dd/mm/yyyy.


### TAD-Insert DDD dd/mm/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-next  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** D31CAE6F-AD2C-4681-874D-CBABCA96FBEF  
**Description:**  
Insert today’s date in the format {day of week abbreviation} dd/mm/yyyy.


### TAD-Insert DDDD mm/dd/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-previous  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 473DFEFC-8AEF-4D34-88F4-7E247C38CBBC  
**Description:**  
Insert today’s date in the format {day of week} mm/dd/yyyy.


### TAD-Insert DDD mm/dd/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-previous  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 769DC760-9D47-4436-A882-C42F8F30C691  
**Description:**  
Insert today’s date in the format {day of week abbreviation} mm/dd/yyyy.


### TAD-Insert dd/mm/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-dates  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 09F8D3F4-4C32-41D8-9DA3-933F290F95C5  
**Description:**  
Insert today’s date in the format dd/mm/yyyy.


### TAD-Insert dd.mm.yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 60E035FA-C23F-44C7-B3EF-1233EE5B27B8  
**Description:**  
Insert today’s date in the format dd.mm.yyyy.


### TAD-Insert dd-mm-yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-snooze  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 0506602A-A126-409B-8D8B-1CEC02FBBE41  
**Description:**  
Insert today’s date in the format dd-mm-yyyy.


### TAD-Insert mm/dd/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-dates  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 41C347D7-D374-49E1-973B-9C1DEF92F8F1  
**Description:**  
Insert today’s date in the format mm/dd/yyyy.


### TAD-Insert mm.dd.yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** C13A1826-1E7B-4F2E-B588-79B63F7A1B68  
**Description:**  
Insert today’s date in the format mm.dd.yyyy.


### TAD-Insert mm-dd-yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-snooze  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B19171E8-2F15-4620-AEAC-DDFE82F4C27D  
**Description:**  
Insert today’s date in the format mm-dd-yyyy.


### TAD-Insert dd/{mm}/yyyy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-dates  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EB514F0A-B6FA-43D3-8543-A93BFA8E6D04  
**Description:**  
Insert today’s date in the format dd/{mm}/yyyy, where the month is expressed as a lower case Roman numeral.


### TAD-Insert dd/{mm}/yy
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** calendar-dates  
**Colour:** pink  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1C9C3F5F-A881-4392-87C2-9D7559124B19  
**Description:**  
Insert today’s date in the format dd/{mm}/yy, where the month is expressed as a lower case Roman numeral.


### Duplicate
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 48581037-C523-4FCA-8F45-606F509A4126  
**Description:**  



### TAD-Duplicate Draft and Load
**Type:** Action  
**Keyboard Shortcut:** ⌃D  
**Icon:** pages  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 3A4E2F9B-41A8-4A76-8879-5EEB86A67E11  
**Description:**  
Duplicate the current draft and load it into the editor.


### TAD-Duplicate Draft in Background
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** pages  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** B508D162-74A2-4A61-A0DA-0D8631D1ABFA  
**Description:**  
Duplicate the current draft without loading it into the editor.


### TAD-Duplicate Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 54D5329E-395C-4DD2-B64F-4D4BBD8E078A  
**Description:**  
Duplicates the line the cursor is currently on.  The duplicate line is placed beneath the current line and the cursor is placed at the end of the duplicated line.


### TAD-Repeat Duplicate Line
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 9F4EC0BB-F2C8-48EF-93C8-0EC963544374  
**Description:**  
Duplicates the line the cursor is currently on a number of times specified by the user.  The duplicate lines are placed beneath the current line and the cursor is placed at the end of the block of duplicated lines.


### Markdown
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** F57E2FE9-9232-4541-BAFE-68DBE06B7976  
**Description:**  



### TAD-MD-Script Block
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sim-card  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F3217B89-D441-4318-A303-2216DE6BE36B  
**Description:**  
Put the selected text in a Markdown script block


### TAD-MD-Link Selected URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 087E0B86-B19B-4AA2-9F72-5546A2543580  
**Description:**  
Create a Markdown format link from the selected URL. The URL is replaced by the a link containing the title of the page being linked to, and the URL is included as the link.


### TAD-MD-Link Clipboard URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode-selected  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1C468FB8-1C5E-4A5A-8B6A-E75761222591  
**Description:**  
Create a Markdown format link from a URL on the system clipboard. The URL is replaced by the a link containing the title of the page being linked to, and the URL is included as the link.


### TAD-MD-Link Unlinked
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** link  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2D6D4F66-43E6-4006-AF3B-06CDC4657FED  
**Description:**  
Convert unlinked URLs to Markdown linked URLs. The URL is replaced by a Markdown link using the URL’s page title as the link text. This action will leave HTML source URLs and existing linked URLs unchanged.


### TAD-MD-Wrap Paragraph Italic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B8E41351-A7F9-415E-A5E5-5ADF8D3736EE  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with Markdown for italics.


### TAD-MD-Wrap Lines Bold
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-bold  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AC89D5BF-0C61-4969-8D87-93D4EC06ED57  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with Markdown for bold.


### TAD-MD-Wrap Lines Italic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3A418316-82E2-4BD5-91FB-F8C6E1C65684  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with Markdown for italic.


### TAD-MD-Wrap Lines Rule
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 437-minus  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5D945773-A224-42A8-973A-0B6A47EA6FD0  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with Markdown for horizontal rules.


### TAD-MD-Wrap Lines Code
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sim-card  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3CADC059-B23E-462B-9959-17DF41EB98FB  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with Markdown for a code block.


### TAD-MD-Wrap Paragraph Code
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sim-card  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4599FC76-E683-4BF4-A578-1F029CEDBBB3  
**Description:**  
Wrap the paragraph the cursor is in, or a text selection begins in with Markdown for a code block.

Note, a paragraph is defined for these purposes as a set of characters delimited by any combination of draft start, draft end and a sequence of two new consecutive line characters, a single newline constituting a line break rather than a paragraph break.


### TAD-MD-Delimit Lines Bold
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-bold  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5002036E-020A-4CD7-BA0C-1BE8329FD0A4  
**Description:**  
Wrap each selected line independently with Markdown bold tags.


### TAD-MD-Delimit Lines Italic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 47338CD9-25CE-46E7-B45A-27B9308F4402  
**Description:**  
Wrap each selected line independently with Markdown italic tags.


### TAD-MD-Prefix Lines Quote
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 648-paper-airplane  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2DE783C3-0C9A-4193-A461-798F28DF941B  
**Description:**  
Prefix each selected line independently with Markdown quotation tag.


### TAD-MD-Lines to Bullet List (*)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C04FEB5E-A8C4-48C9-A9F1-88C5E66E7FC5  
**Description:**  
Markup each line that is part of the selection as a bulleted list item using an asterisk as the list identifier.


### TAD-MD-Lines to Bullet List (-)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 400-list2  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 05CA010E-2EB3-4DED-887F-10718664BF57  
**Description:**  
Markup each line that is part of the selection as a bulleted list item using a hyphen as the list identifier.


### TAD-MD-Simple Renumber Selected Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** list-numbered  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DB312CA7-872D-4DA9-A2E1-A32E6D038453  
**Description:**  
Renumbers a continuous list of Markdown numbered items. It does not change sub-lists, or numbered lists that do not start at the root level (i.e. no leading whitespace). If multiple lists are selected, the numbering will continue across them.

Bottom line, this really is just renumbering for simple cases.


### TAD-MD-Heading Cycle
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 04318160-B495-4E23-857A-EFD84A70D9A6  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be the next level Markdown heading from where it currently is.  No heading becomes level 1, level 1 becomes level 2, …, level 6 becomes no heading.  The current text selection will remain intact.


### TAD-MD-Heading 0
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 14F57971-5B09-4826-9467-4C49FB9AF783  
**Description:**  
For the current selection, remove any initial hashes that signify a Markdown heading.  The current text selection will remain intact.


### TAD-MD-Heading 1
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 53224F22-FE0C-4845-B0E8-640E99DFD9AF  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be a level 1 Markdown heading from where it currently is.  The current text selection will remain intact.


### TAD-MD-Heading 2
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2D4EE849-6813-4E81-9131-881A28356675  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be a level 2 Markdown heading from where it currently is.  The current text selection will remain intact.


### TAD-MD-Heading 3
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6E2B453C-253F-4ABD-8418-EAD3E1BA9678  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be a level 3 Markdown heading from where it currently is.  The current text selection will remain intact.


### TAD-MD-Heading 4
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 037520CB-E8ED-4A77-B01E-33B93A886BA4  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be a level 4 Markdown heading from where it currently is.  The current text selection will remain intact.


### TAD-MD-Heading 5
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5AE3D690-3302-49B4-BFE5-934DA285852F  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be a level 5 Markdown heading from where it currently is.  The current text selection will remain intact.


### TAD-MD-Heading 6
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 21867934-CF8F-4E7F-BFAB-CBB971C9830E  
**Description:**  
For the current selection, convert the line at the beginning of the selection to be a level 6 Markdown heading from where it currently is.  The current text selection will remain intact.


### Drafts Markup
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** DEB19AEA-877A-4031-BEBA-2B2089B63464  
**Description:**  



### TAD-Drafts-Lines Check Boxes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 428-checkmark1  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AC4B1980-8945-4603-8C65-E49D19FAE9FE  
**Description:**  
Markup each line that is part of the selection with a leading empty Drafts checkbox ([ ]).


### TAD-Drafts-Lines Bulleted Check Boxes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-square  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 78B7BCD5-34A9-4603-A1E1-40667143299C  
**Description:**  
Markup each line that is part of the selection with a leading Markdown list identifier empty Drafts checkbox and (-[ ]).


### TAD-Drafts-Bulleted Check Boxes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** check-circle  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 39715D14-5987-4BE2-BDCD-466287EE1534  
**Description:**  
Markup all non-blank lines in the draft as bulleted check boxes (-[ ]).


### HTML
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** CBF2A4AD-F963-4F92-9FAF-4BA32107759B  
**Description:**  



### TAD-HTML-Wrap Line Pre Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1BE5AEFB-84F3-477F-A621-C3EC0F69176C  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with HTML for a preformatted block.


### TAD-HTML-Wrap Paragraph Pre Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C8F6AE4B-176F-4EAF-8517-78073154DF60  
**Description:**  
Wrap the paragraph the cursor is in, or a text selection begins in with HTML for a preformatted block.

Note, a paragraph is defined for these purposes as a set of characters delimited by any combination of draft start, draft end and a sequence of two new consecutive line characters, a single newline constituting a line break rather than a paragraph break.


### TAD-HTML-Wrap Line Paragraph Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3F7EF93B-C464-403D-8F37-64C84EDBBDC2  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with HTML for a paragraph block.


### TAD-HTML-Wrap Paragraph Pre Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 25851E7D-8CA1-4DDA-B42D-722DCADBC79C  
**Description:**  
Wrap the paragraph the cursor is in, or a text selection begins in with HTML for a paragraph block.

Note, a paragraph is defined for these purposes as a set of characters delimited by any combination of draft start, draft end and a sequence of two new consecutive line characters, a single newline constituting a line break rather than a paragraph break.


### TAD-HTML-Wrap Line Division Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** border-all  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8A2DF57A-170D-4C6A-A930-53FD94C68227  
**Description:**  
Wrap the line the cursor is on, or lines of any text selection, with HTML for a division block.


### TAD-HTML-Wrap Paragraph Division Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** border-all  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9E82B026-78A4-48C9-92A1-C1BE8E64F258  
**Description:**  
Wrap the paragraph the cursor is in, or a text selection begins in with HTML for a division block.

Note, a paragraph is defined for these purposes as a set of characters delimited by any combination of draft start, draft end and a sequence of two new consecutive line characters, a single newline constituting a line break rather than a paragraph break.


### TAD-HTML (Bold)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-text-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6BE11C2A-AE7A-4FEE-A9BE-5B497B11BA9B  
**Description:**  
Insert bold


### TAD-HTML (Strong)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-text-alt  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7CB21853-4FA4-4403-B140-6B3B5BF4893B  
**Description:**  
Insert strong


### TAD-HTML (Italic)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 96496E20-54E2-45A2-B4D8-55A574A35540  
**Description:**  
Insert italic


### TAD-HTML (Emphasis)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AD104C52-B10F-42E1-8ACE-39B2E0A561CE  
**Description:**  
Insert emphasis


### TAD-HTML (Citation)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 346-pentool  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 14436EA2-47B9-4C92-BF4B-E8242C5FB062  
**Description:**  
Insert citation


### TAD-HTML (Strikethrough)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-strikethrough-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2819A49A-6002-4B3E-97A6-F82E6629CF79  
**Description:**  
Insert strikethrough


### TAD-HTML (Paragraph)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 14B5766F-F8CE-48FE-BF5A-674B2099D42F  
**Description:**  
Insert pargraph


### TAD-HTML (Division)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 29BD71FA-A4C4-4942-9DE0-AC1FB96AB595  
**Description:**  
Insert division


### TAD-HTML (Span)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 40CC407F-F5DD-4481-A7A5-0CEFC1869747  
**Description:**  
Insert span


### TAD-HTML (Abbreviation)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** ampersand  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0D63A774-DF76-46EA-9133-9517F418DAED  
**Description:**  
Insert abbreviation


### TAD-HTML (Code)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** terminal  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 192647A5-960F-4CDC-820A-09B978096362  
**Description:**  
Insert code


### TAD-HTML (Preformatted)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** layout-grid  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 82BB4CF8-09E2-47C3-9C19-6B995363F3C8  
**Description:**  
Insert preformatted


### TAD-HTML (Data)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** database  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 049BCF25-37FB-4A0E-A1C2-A7E044F2C0A5  
**Description:**  
Insert data


### TAD-HTML (Variable)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 620-fuzzy-dice  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F3E6DB84-42C3-44A0-8D6A-27416B1C2A44  
**Description:**  
Insert variable


### TAD-HTML (Definition)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A20444FD-CC8A-4F9E-A739-785F85A7C669  
**Description:**  
Insert definition


### TAD-HTML (Quotation - Inline)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-close  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1829ED20-3917-4160-B5C0-18C71ED6ADB4  
**Description:**  
Insert inline quotation


### TAD-HTML (Quotation - Block)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-close  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FA35EF2A-B850-4FFD-8581-2E8C1ADFA169  
**Description:**  
Insert block quotation


### TAD-HTML (Keyboard)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 341-keyboard  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0C6253E8-ABE3-4391-810F-387760B63475  
**Description:**  
Insert keyboard element


### TAD-HTML (Mark)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** bookmark  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 22B52EB1-D8B1-4EB3-963A-84E2A781EE9E  
**Description:**  
Insert mark (highlight)


### TAD-HTML (Sample)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** memo  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9D826BD5-9656-412E-B6F0-D7364B734530  
**Description:**  
Insert sample output


### TAD-HTML (Small)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 404-microscope  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6BC58805-DAD9-4037-AFDE-067AC2068F6B  
**Description:**  
Insert small


### TAD-HTML (Subscript)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** subscript  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DF4A162D-1BF9-4FD0-8064-80840239DA1E  
**Description:**  
Insert subscript


### TAD-HTML (Superscript)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** superscript  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B14A0526-BD15-4DB3-AE17-37B86BE55CB4  
**Description:**  
Insert superscript


### TAD-HTML (Line Break)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 435-bounce  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CE86276B-E237-47B0-8FFF-E2DDBFDD35C6  
**Description:**  
Insert line break


### TAD-HTML (Word Break)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** pages-insert  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 81FD1A8D-4CC0-4DF1-8421-527D64C42535  
**Description:**  
Insert word break opportunity


### TAD-HTML (Horizontal Rule)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** minus  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 23815EEF-C660-4344-8709-FADC643FCEFB  
**Description:**  
Insert horizontal rule line


### Discourse
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** CBBDD519-4374-472B-829F-38B6649253B9  
**Description:**  



### TAD-Discourse Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** e-reader  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6E210BF1-8601-4A3F-B371-CC2300E7F601  
**Description:**  
Sets up a draft for use as a draft for a Discourse post. Discourse is the forum software used by the Drafts community and this action just sets up a draft based on settings specified within the library settings.  If a non e-mpty draft is selected, the user is prompted with an option to convert the current draft or create a new one. The Discourse draft is ready for editing when the action completes.


### TAD-Discourse-Hide Details
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_preview  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3452DDDA-52C9-4080-9F7F-FE9384732A0C  
**Description:**  
Insert the text to create a hidden section in a Discourse post.


### TAD-Trash Active Discourse Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** trash-cancel  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 11D1826F-F691-4D06-9D85-1E5A2448DC13  
**Description:**  
Any Discourse draft in the inbox will be marked as trashed.


### TAD-Archive Active Discourse Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_archive1  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** A18E3CD6-F4A5-45A8-8EAE-A9D49C8A6251  
**Description:**  
Any Discourse draft in the inbox will be marked as archived.


### Create Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 854A2ADF-47F0-4DCA-B7D2-E4F9A083D84B  
**Description:**  



### TAD-New Draft from Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 68B091CD-FB05-4EB1-B01E-9B4867894265  
**Description:**  
Creates a new draft from the selected text.
An equivalent operation is available by long pressing on the new button, but by having an action defined, we can assign a keyboard shortcut, or call it from another action.  In fact because it is a script function, you could simply embed the function call in your own script action.


### TAD-Load New Draft from Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4547BAA7-DB80-42C5-AFD4-42C3C2F08601  
**Description:**  
Creates a new draft from the selected text and loads it.


### TAD-New Draft from Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 784ED65C-802A-4BDF-AB55-12B49B09FB93  
**Description:**  
Creates a new draft from the clipboard.
An equivalent operation is available by long pressing on the new button, but by having an action defined, we can assign a keyboard shortcut, or call it from another action.  In fact because it is a script function, you could simply embed the function call in your own script action.


### TAD-Load New Draft from Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 79526531-18B0-4167-9860-64053784AB53  
**Description:**  
Creates a new draft from the clipboard and loads it.


### TAD-Split Draft Load Part 1
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** share-alt  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CD3E7BB7-274A-4DED-BA5A-E9D943559108  
**Description:**  
Split the draft at the start of the current selection.
Original draft contains everything before the split.
New draft contains everything after the split.
Original draft is leftloaded.


### TAD-Split Draft Load Part 2
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** share-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7712DE6E-C789-45BC-B828-865A0ABED27C  
**Description:**  
Split the draft at the start of the current selection.
Original draft contains everything before the split.
New draft contains everything after the split.
New draft is automatically loaded.


### TAD-Split Lines to New Drafts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 876D7241-EDF0-414B-98E6-F34B9381F9A5  
**Description:**  
Splits a line to new Drafts.

A new draft is created for every non-blank line, with that line as its content.


### TAD-Split Lines to New Drafts With Specified Tag Example
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 422FB45A-D39E-40BC-8991-609978A8335F  
**Description:**  
This action is an example of how to specify a tag for the `TAD-Split Lines to New Drafts With Specified Tag` action and call the action.


### TAD-Split Lines to New Drafts With Specified Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 897AC403-9953-4B21-AC95-8704D052482C  
**Description:**  
Splits a line to new Drafts.

A new draft is created for every non-blank line, with that line as its content.

A tag is also added to each draft as specified by the value of the define template tag step in the action that calls this. i.e. it should not be called on directly.


### TAD-Split Lines to New Drafts With Entered Tag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 358EE98C-C764-4A32-BDD9-A24CDABF2A80  
**Description:**  
Splits a line to new Drafts.

A new draft is created for every non-blank line, with that line as its content. The user is also prompted to enter a single tag which is automatically added to each new draft.


### TAD-Split Lines to New Drafts With Current Tags
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 9EBB581D-BEA2-4A82-A0C6-E9202A388A68  
**Description:**  
Splits a line to new Drafts.

A new draft is created for every non-blank line, with that line as its content. Each new Drafts has the same tags as the original draft.


### TAD-Quick Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** add  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AEDBC1CA-416E-4A93-94A1-98E9606867E0  
**Description:**  
Pop up a quick entry prompt that allows a new draft to be created without navigating away from the current one or opening a new window. The draft may be flagged and tags added as well as adding content.


### Edit
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C43E3450-3199-4769-A510-1D5B8C2CDD6D  
**Description:**  



### TAD-Undo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_undo  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 9E8F9F0A-F142-4FD9-AB51-CBCEE2D9CFE0  
**Description:**  
Undo last changes.


### TAD-Redo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_redo  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 745D2E3E-3E4A-4C45-9110-DADA1E169D2B  
**Description:**  
Redo last undo.


### TAD-Load Most Changed Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 601-enter  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 51E70401-1B31-46FB-B7A3-E0985E778863  
**Description:**  
Load a draft with the highest number of versions.


### Previewing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 821065E7-6CCB-4EFB-A17F-9543037ACF31  
**Description:**  



### TAD-Prime Preview MMD
**Type:** Action  
**Keyboard Shortcut:** ⌃P  
**Icon:** 514-document-2  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** D1F15803-2310-48B9-927A-97B377E25D11  
**Description:**  
Calls the prime preview action to preview MultiMarkdown converted to HTML.  The action supports, draft transclusion, draft template tag expansion, base64 encoded images, syntax highlighting, mermaid diagram blocks, Font-Aweseome (Internet connection required), and Drafts/GitHub style check box conversion,


### TAD-Prime Preview GFM
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 514-document-2  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 216AA2E1-C8DE-47A6-BA2A-4B2AD1BB955D  
**Description:**  
Calls the prime preview action to preview Github Flavour Markdown converted to HTML.  The action supports, draft transclusion, draft template tag expansion, base64 encoded images, syntax highlighting, mermaid diagram blocks, Font-Aweseome (Internet connection required), critic strikethroughs, and Drafts/GitHub style check box conversion,


### TAD-Preview with Syntax Highlighting
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** sim-card  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** B2CE07BE-68BA-4C57-B288-B5649C52B9CE  
**Description:**  
Standard preview (converts Markdown to HTML)  that includes integration to ‘highlight’ online library for syntax highlighting.


### TAD-Exploded Markdown Preview
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 514-document-2  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 4  
**Unique ID:** A66DCD22-6C72-4816-BECF-F3D2183713DA  
**Description:**  
Preview of Markdown content that includes numerous reference expansions. The function will expand standard template utility tag inclusions (as well as other tag inclusions), a single level of wiki-style tags linked to other drafts, and local images where a Base 64 version of the image has been co-located and stored in a .b64.txt file.


### TAD-Preview with Marked2
**Type:** Action  
**Keyboard Shortcut:** ⇧⌃⌥P  
**Icon:** btn_focus  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 6A00B599-5364-4080-8E0E-3A1D430E3206  
**Description:**  
Opens Marked2 app (Mac) for streaming preview.

Visit https://marked2app.com for more details about this Mac application.


### TAD-Preview Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 356590E0-DB83-43F8-9032-5F87FAA40BD8  
**Description:**  
Run a preview on the clipboard instead of the draft content


### TAD-Preview Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_focus  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 7F33B11F-9D2B-4C64-8B37-FA995882CBE2  
**Description:**  
Run a preview on the current selection instead of the draft content


### Editor Insertions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** A93CDFF0-A863-4830-8EA9-C40E82EF213A  
**Description:**  



### TAD-Prepend Text in Editor
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 327C3ABD-55AB-4511-BEF5-C5C3FCBD66CE  
**Description:**  
Enter some text to prefix the current editing session with.  The current selection will be maintained.


### TAD-Append Text in Editor
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 81F6645F-C18D-400B-AF0D-B4D2EEA33F90  
**Description:**  
Enter some text to suffix the current editing session with.  The current selection will be maintained.


### TAD-Prepend Line in Editor
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 467-skip-backward1  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9EB02F03-EBF1-4694-94B5-11375EAB2C62  
**Description:**  
Enter some text to prefix the current editing session with.  The current selection will be maintained. The inserted text will be followed by a new line as a separator.


### TAD-Append Line in Editor
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 468-skip-forward  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 71CCADBB-8B03-47A7-9DDA-81331BF4C50B  
**Description:**  
Enter some text to suffix the current editing session with.  The current selection will be maintained. The inserted text will be followed by a new line as a separator.


### TAD-Prepend to Section
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CEEA957A-CE41-4414-BA2A-D8A0721C8F8F  
**Description:**  
Prepend some text to a section defined by a navigation marker.


### TAD-Append to Section
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 32C70BDB-6EEB-47F7-9C83-A50918C3FE4D  
**Description:**  
Append some text to a section defined by a navigation marker.


### Text Modifiers
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** A65A491A-4411-44EB-96AC-9B8B875F43E2  
**Description:**  



### TAD-Prefix Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 165E5680-2CDF-4AA1-9015-D9117F11DAD6  
**Description:**  
Prefix each line of the selected lines with some text.


### TAD-Suffix Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 7E864231-874C-40C1-B592-4E6D01FA89D0  
**Description:**  
Suffix each line of the selected lines with some text.


### TAD-Camel Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-text-alt  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8D07B2AF-8DBF-42DF-ACB7-9DFBCB8AE258  
**Description:**  
Convert the selection to Camel Case.
Prepares with a normaliser.


### TAD-Kebab Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-text-alt  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A349348F-6A6D-424A-A6DA-7C135DB22253  
**Description:**  
Convert the selection to Camel Case.
Prepares with a normaliser.


### TAD-Train Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 525-train  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3172B950-B1FE-426E-8B30-9D8443BE8760  
**Description:**  
Convert the selection to Train Case.
Prepares with a normaliser.


### TAD-Snake Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** tilde  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C50C7ADF-73CB-4E5B-A42C-A9AE0CCCEF48  
**Description:**  
Convert the selection to Snake Case.
Prepares with a normaliser.


### TAD-Screaming Snake Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** tilde  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A1C04372-F02C-4D16-9F48-AD1F0C74A801  
**Description:**  
Convert the selection to Screaming Snake Case.
Prepares with a normaliser.


### TAD-Upper Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 459FE816-9C87-4944-9482-C5233A43A53C  
**Description:**  
Convert the selection to Upper Case.
Prepares with a normaliser.


### TAD-Lower Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 001C3049-35C9-44A2-B2E3-F4165F66B27C  
**Description:**  
Convert the selection to Lower Case.
Prepares with a normaliser.


### TAD-Sentence Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F35EBC56-2F37-4125-A670-45941FCE32D4  
**Description:**  
Convert the selection to Sentence Case.
Prepares with a normaliser.


### TAD-Title Case Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FA1CDEE5-C4E7-41A4-8728-4BDD3436A5F3  
**Description:**  
Convert the selection to Title Case.
Prepares with a normaliser.


### TAD-Capitalise Selection Words
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A8F8C0AC-D456-4914-A3BC-8E49DA3D7E1F  
**Description:**  
Convert the selection’s words to be capitalised.


### TextExpander
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 54C98141-0C93-4F96-9139-54EA880C3791  
**Description:**  



### TAD-Draft to TextExpander Snippet
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-double  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 988C1C3F-FD06-43B4-86BE-551FECC9CBDD  
**Description:**  
Creates a snippet in TextExpander
Set to use the group "_Inbox". This must exist in TextExpander for this action to work.
The snippet abbreviation is the draft title.
The snippet content is the draft body.


### TAD-Update TextExpander
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_runworkflow  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F44C637A-E275-4528-AB04-3A9C19A7859F  
**Description:**  
Used on iOS and iPadOS to refresh TextExpander snippets in the Drafts app.  On the Mac, this is not necessary as TextExpander is not sandboxed in the same way and can work in any app.


### Word Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 24140388-5D5E-4F3C-8D89-6C4FA7D0FB78  
**Description:**  



### TAD-Get Definition
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 587-dictionary  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 936054C5-FF43-48FD-853A-EE94D451A3DE  
**Description:**  
Get the definition for a word or phrase. If no selection is made, you will be prompted to enter one.


### TAD-Replace with Synonym
**Type:** Action  
**Keyboard Shortcut:** ⌃⌥S  
**Icon:** book  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 57805891-4C06-4CDB-BED6-A28424471C39  
**Description:**  
Choose a synonym for a word or phrase and replace the existing selection. If no selection is made, you will be prompted to enter a word or phrase and the selected synonym will be inserted at the cursor position.


### Matched Line Removals
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 130FAD78-A8EB-483E-A792-0ACE99CD1522  
**Description:**  



### TAD-Remove Lines Starting
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-left  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CE99D5CE-2094-4184-AFEA-ADF9994AD725  
**Description:**  
Prompts the user to enter a case sensitive string of text. A new draft is then created and populated with the text of the current draft, but with all lines that start with the specified string removed.


### TAD-Remove Lines Not Starting
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-left  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BA53A61E-0C38-4256-91CD-1F67E9AA2AE3  
**Description:**  
Prompts the user to enter a case sensitive string of text. A new draft is then created and  populated with the text of the current draft, but with all lines that do not start with the specified string removed.


### TAD-Remove Lines Ending
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-right  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7CC0EF24-05D1-4674-972B-43506CB1CF52  
**Description:**  
Prompts the user to enter a case sensitive string of text. A new draft is then created and populated with the text of the current draft, but with all lines that end with the specified string removed.


### TAD-Remove Lines Not Ending
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-right  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 47AD8625-4E51-42A3-BA3C-D4EF853B6234  
**Description:**  
Prompts the user to enter a case sensitive string of text. A new draft is then created and  populated with the text of the current draft, but with all lines that do not end with the specified string removed.


### TAD-Remove Lines Containing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** transfer  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B71D8631-027F-426F-89EA-0047343A4D6F  
**Description:**  
Prompts the user to enter a case sensitive string of text. A new draft is then created and populated with the text of the current draft, but with all lines that contain the specified string removed.


### TAD-Remove Lines Not Containing
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** transfer  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EE182370-1B41-4388-8A2E-4DE818322156  
**Description:**  
Prompts the user to enter a case sensitive string of text. A new draft is then created and  populated with the text of the current draft, but with all lines that do not contain the specified string removed.


### MediaWiki Syntax
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 87F3A0B7-977A-47B2-9854-75517039DC6D  
**Description:**  



### Comma Separated Lists
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** E2FCF891-B99C-4166-AB17-B4071F437EAB  
**Description:**  



### TAD-CSV Items to MD Bold
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-bold  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DCB4B7AE-99EF-48AB-B1EC-B727251D1568  
**Description:**  
Takes an existing selection as a comma separated set of values and wraps each element in bold Markdown syntax. If each value is delimited by double quotes, the Markdown will be added between the double quotes.


### TAD-CSV Items to MD Italic
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** format-italic  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** FECFE982-ED1E-42A8-879B-6819C7E7FD0B  
**Description:**  
Takes an existing selection as a comma separated set of values and wraps each element in italic Markdown syntax. If each value is delimited by double quotes, the Markdown will be added between the double quotes.


### TAD-CSV Items to MD Code
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AD4DC693-B808-4997-AEB8-C9D3A917C800  
**Description:**  
Takes an existing selection as a comma separated set of values and wraps each element in code block Markdown syntax. If each value is delimited by double quotes, the Markdown will be added between the double quotes.


### TAD-CSV Items to Double Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-close-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2FAD5E15-8E86-4DCC-9AF3-AA873F376EDC  
**Description:**  
Takes an existing selection as a comma separated set of values and wraps each element in double quotes. Existing double quoted items should not be affected, and will remain as being double quoted (not getting any additional double quotes).


### Format Markdown List Headers
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** EA515354-4790-4AF1-A67D-393F23E40537  
**Description:**  



### TAD-Format MD List Headers
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 344-paintbrush  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 5  
**Unique ID:** C12300C4-4502-4223-87BB-FB8C1D0A33D2  
**Description:**  
The various MD list header formatting actions are a little awkward to name, so this action gives you a list of what is available to help you pick one.


### TAD-Format MD Numbered List Bold Heading Into Colon
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 389-flash  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F4186491-3CBF-47A9-A78A-D51CCE2F1835  
**Description:**  
This action is used for reformatting numbered lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown numbered list. It then applies Markdown bolding of the text the follows, up to and including a colon, which is then followed by a space.


### TAD-Format MD Numbered List Italic Heading Into Colon
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 389-flash  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2DCBE176-BDB9-47A0-8BC4-C72085214F43  
**Description:**  
This action is used for reformatting numbered lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown numbered list. It then applies Markdown italic to the text that follows, up to and including a colon, which is then followed by a space.


### TAD-Format MD Numbered List Bold Heading Up To Hyphen
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 389-flash  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1CE36208-9FB1-4E30-82E7-12A20E9987E7  
**Description:**  
This action is used for reformatting numbered lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown numbered list. It then applies Markdown bolding of the text the follows, up to and including a colon, which is then followed by a space.


### TAD-Format MD Numbered List Italic Heading Up To Hyphen
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 389-flash  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2092E535-8CA8-4BD6-B88C-E1CFDA3D7EDC  
**Description:**  
This action is used for reformatting numbered lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown numbered list. It then applies Markdown italic to the text that follows, up to but excluding a space-hyphen-space.


### TAD-Format MD Numbered List Code Heading Up To Hyphen
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 389-flash  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9F2F96B6-7528-4E29-AE00-EDA23F03287C  
**Description:**  
This action is used for reformatting numbered lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown numbered list. It then applies Markdown code syntax to the text that follows, up to but excluding a space-hyphen-space.


### TAD-Format MD Bulleted List Bold Heading Into Colon
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_circle2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D75720E2-F6DE-463A-B5FC-B9F37A6A95C9  
**Description:**  
This action is used for reformatting bulleted lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown bulleted list. It then applies Markdown bolding of the text the follows, up to and including a colon, which is then followed by a space.


### TAD-Format MD Bulleted List Italic Heading Into Colon
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_circle2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 068891A0-B1EF-469A-BB52-AC3E51CAF24B  
**Description:**  
This action is used for reformatting bulleted lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown bulleted list. It then applies Markdown italic to the text that follows, up to and including a colon, which is then followed by a space.


### TAD-Format MD Bulleted List Bold Heading Up To Hyphen
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_circle2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B2F94A92-E4D3-474C-9684-E3F31129579F  
**Description:**  
This action is used for reformatting bulleted lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown bulleted list. It then applies Markdown bolding of the text the follows, up to and including a colon, which is then followed by a space.


### TAD-Format MD Bulleted List Italic Heading Up To Hyphen
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_circle2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 195EC648-0756-44EF-9063-AF89AA13A58A  
**Description:**  
This action is used for reformatting bulleted lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown bulleted list. It then applies Markdown italic to the text that follows, up to but excluding a space-hyphen-space.


### TAD-Format MD Bulleted List Code Heading Up To Hyphen
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_circle2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 91AB8DDD-DC34-4785-817B-A15FA9FB1980  
**Description:**  
This action is used for reformatting bulleted lists to add in some styling to make what might be termed a line heading stand out.

This action extends the current selection to cover all lines, even those partially selected. It takes each line in turn examining it for a pattern match to a Markdown bulleted list. It then applies Markdown code syntax to the text that follows, up to but excluding a space-hyphen-space.


### Quotation Marks
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 2561FBC7-85EB-4976-AC10-80B946307551  
**Description:**  



### TAD-Convert Selection - Quotes Dumb to Smart
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 379794F3-1172-4B5E-8BBD-956E12FCEF72  
**Description:**  
Converts the current selection from dumb quotes to smart quotes.


### TAD-Convert Selection - Quotes Smart to Dumb
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B987A5C8-842E-443D-A7F6-823939C44041  
**Description:**  
Converts the current selection from smart quotes to dumb quotes.


### TAD-Convert Selection - Quotes Guillemets to Dumb Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left-double  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 499331E7-595A-4C6F-9943-CCE41B5BB265  
**Description:**  
Converts the current selection from guillemet quotes (« ») to dumb quotes (“ ”).


### TAD-Convert Selection - Quotes Guillemets to Smart Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left-double  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BE3E9F71-BCEE-492E-8525-E8D62B4411EF  
**Description:**  
Converts the current selection from guillemet quotes (« ») to smart quotes (“ ”).


### TAD-Convert Selection - Quotes Dumb Quotes to Guillemets
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left-double  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 96A6A5F7-74C4-4AF8-888F-B0167CD95505  
**Description:**  
Converts the current selection from dumb quotes (“ ”) to guillemet quotes (« »).


### TAD-Convert Selection - Quotes Smart Quotes to Guillemets
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left-double  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F7AAD093-527D-4850-8287-52EAEF341258  
**Description:**  
Converts the current selection from smart quotes (“ ”) to guillemet quotes (« »).


### TAD-Convert Selection - Quotes Swiss to Dumb Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 34A54530-97CE-4E70-AD83-B3896C77BA10  
**Description:**  
Converts the current selection from Swiss quotes (« »/‹ ›) to dumb quotes (“ ”/‘ ’).


### TAD-Convert Selection - Quotes Swiss to Smart Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A1D15274-5591-42CC-B7D5-1F1658C7C10B  
**Description:**  
Converts the current selection from Swiss quotes (« »/‹ ›) to smart quotes (“  ”/‘ ’).


### TAD-Convert Selection - Quotes Dumb Quotes to Swiss
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** ECF26330-7C2C-4B2D-A68E-0284C9357226  
**Description:**  
Converts the current selection from dumb quotes (“ ”/‘ ’) to Swiss quotes (« »/‹ ›).


### TAD-Convert Selection - Quotes Smart Quotes to Swiss
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-left  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4F4CA7D4-81C0-472D-B9DA-B6CB3169740B  
**Description:**  
Converts the current selection from smart quotes (“  ”/‘ ’) to Swiss quotes (« »/‹ ›).


### TAD-Convert Selection - Quotes Inverted Guillemets to Dumb Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-double  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E198B809-9D48-41F2-B4A9-F0A0233059C0  
**Description:**  
Converts the current selection from inverted guillemet quotes (» «/› ‹) to dumb quotes (“ ”/‘ ‘).


### TAD-Convert Selection - Quotes Inverted Guillemets to Smart Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-double  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EDA969EF-33E0-408C-A1C3-719DBC0357A6  
**Description:**  
Converts the current selection from inverted guillemet quotes (» «/› ‹) to smart quotes (“ ”/‘ ’).


### TAD-Convert Selection - Quotes Dumb Quotes to Inverted Guillemets
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-double  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3F0F7E74-B020-45DA-8A77-4A9DF7E07205  
**Description:**  
Converts the current selection from dumb quotes (“ ”/‘ ‘) to inverted guillemet quotes (» «/› ‹).


### TAD-Convert Selection - Quotes Smart Quotes to Inverted Guillemets
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-double  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A415E8A0-F476-438C-BF6D-65CD1FF3F477  
**Description:**  
Converts the current selection from smart quotes (“ ”/‘ ’) to inverted guillemet quotes (» «/› ‹).


### TAD-Convert Selection - Quotes High to Dumb Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CF4DE1B6-7CDD-475B-96A8-D5BBC8FA6ADB  
**Description:**  
Converts the current selection from high quotes („ “/‚ ‘) to dumb quotes (“ ”/‘ ‘).


### TAD-Convert Selection - Quotes High to Smart Quotes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open-alt  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CDE2D073-DD76-4B79-9648-298A6E8356D3  
**Description:**  
Converts the current selection from high quotes („ “/‚ ‘) to smart quotes (“ ”/‘ ’).


### TAD-Convert Selection - Quotes Dumb Quotes to High
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open-alt  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EC022125-2B1A-4EA3-A8B9-8F219E7C63F5  
**Description:**  
Converts the current selection from dumb quotes (“ ”/‘ ‘) to high quotes („ “/‚ ‘).


### TAD-Convert Selection - Quotes Smart Quotes to High
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** quote-open-alt  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5BEC5E67-5E24-4221-9AA6-35B93B5085BE  
**Description:**  
Converts the current selection from smart quotes (“ ”/‘ ’) to high quotes („ “/‚ ‘).


### Move Content
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 0801AD97-538B-4B4B-B990-9F11B1FB497D  
**Description:**  



### TAD-Move Line Selection Up
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-up-double  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E2C7ED01-5F5D-4977-B8F8-880552FFB3CF  
**Description:**  
Move the lines spanned by the curent selection up in the editor while retaining the existing selection.


### TAD-Move Line Selection Down
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-down-double  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 21DD77DE-8C0B-4393-9547-D35C9ABB984D  
**Description:**  
Move the lines spanned by the curent selection down in the editor while retaining the existing selection.


### TAD-Move Line Selection to Start
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 06311834-50DE-41AE-847C-E3643AD2A495  
**Description:**  
Move the lines spanned by the curent selection to the start of the text in the editor while retaining the existing selection.


### TAD-Move Line Selection to End
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 93CA21A7-AF6D-4887-9486-B1EE2EAF320A  
**Description:**  
Move the lines spanned by the curent selection to the end of the text in the editor while retaining the existing selection.


### Boxes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** CDA4E68A-0EA8-4DC9-A093-DE7AF6F1C701  
**Description:**  



### TAD-Box Selected Lines (Single)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_unchecked  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C3ECA6C7-8B7E-4BB4-8FED-3C051F6BA6DC  
**Description:**  
Place a set of characters around the currently selected lines to form a box constructed of a single line.


### TAD-Box Selected Lines (Double)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** checkbox  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 86B06D0A-4FF3-4310-8423-350B0EF050E0  
**Description:**  
Place a set of characters around the currently selected lines to form a box constructed of two lines.


===
## ThoughtAsylum - Power User

### Instructions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 135F6EF1-374E-4A73-AAAE-801809F7A268  
**Description:**  



### TAD-Instructions (Power User)
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** info  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 3  
**Unique ID:** D7544EA1-BFD0-40D8-B815-35AA1DA8E981  
**Description:**  
Information about The ThoughtAsylum Action Group and the TADpoLe Library
VERSION:20210508


### Scripting
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 0E91B5CE-0325-489D-BA86-2C85E362AA17  
**Description:**  



### TAD-Make Draft Executable
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 464-record1  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2AB32E58-9461-49B3-87D5-BA851C3A8839  
**Description:**  
Set the currently selected draft as executable by the TAD-Execute Draft action.


### TAD-Load Executable Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-in  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E3D4BF0E-8EBD-4EED-BB0A-F8432126350C  
**Description:**  
Load the most recently modified draft that matches the excution criteria specified in the TADpoLe library settings.


### TAD-Execute Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 461-play1  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DAE5150B-D786-46FA-90DC-8D81F9306C26  
**Description:**  
Run the most recently modified draft that matches the draft execution criteria specified in the TADpoLe library.


### TAD-Execute Test Function
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 471-play2  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 834D0A33-EF8D-4BC8-BF18-51A86421E362  
**Description:**  
Execute the TA_Test() function from the test libraries specified for the library (see settings).


### TAD-Execute Current Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-circle  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 371592FB-DFC7-4DC4-8E4F-9D4F44B08330  
**Description:**  
Execute the current draft rather than the draft tagged for execution. Useful for quick tests.


### TAD-Execute Current Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7FE0D920-18FE-41AA-95FA-91641305A196  
**Description:**  
Execute the current text selection rather than the draft tagged for execution. Useful for quick standalone tests.


### TAD-Execute Current Lines
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** caret-right-double  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3872081E-F639-4A9F-B946-85F4C0479AB7  
**Description:**  
Execute the content of the lines that are currently included in the text selection. If you have a partial line selection, that fully encompassed the subsequent line, and a partial selection of a third line, the combined content of the three lines together (not just the selection) will be evaluated.


### TAD-Beautify JavaScript
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 680-emoticon-shades  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 2C9F188F-4A99-45EF-B1ED-32ECAF46E95E  
**Description:**  
Apply JS Beautifier to Javascript to reformat it to default format settings, or your own custom ones.  Default settings taken from library will be overridden by the settings in the beautifier settings file (defaults to /Library/Scripts/beautifier.json’). See TA_devBeautifyJS() documentation at https://tadpole.thoughtasylum.com for more information.


### TAD-Format JSON Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 667-gear3  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 1CE321C2-200B-4149-A3CC-99D0DD4DFF66  
**Description:**  
Takes a draft of JSON content and performs some basic formatting on it.


### TAD-Scripting Docs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** books  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 5029707F-E6D9-4DB4-B9E5-0A37E5C06385  
**Description:**  
This action will open the documentation site for Drafts scripting.


### TAD-TADpoLe Docs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** books  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 85D9AF2E-2CC5-475E-A7B3-40BE1D3EDBA5  
**Description:**  
This action will open the documentation site for the TADpoLe library. This is the library utiised by this action group and you can easily re-use it for your own actions too. There are actually many more functions in the library than are used in the actions in this action group.


### TAD-Fix Discourse JavaScript on Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 519-tools-1  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AF5F275C-98C6-41B5-B7E5-00614DA2D1C9  
**Description:**  
New users on Discourse forums often do not realise that they should wrap their code in triple back ticks. The forum then removes formatting and substitutes in smart quotes. This action attempts to undo that and replace the clipboard with fixed code.


### Information
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 9C419719-1F5A-490F-883D-66E84A0961CC  
**Description:**  



### TAD-Display Drafts Counts
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 355-equalizer  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6922FBF0-4192-449A-8D63-3FB72E03C161  
**Description:**  
Displays some stats about your drafts.


### TAD-Selection Character Count
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chart-bar  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 58C2C81F-C678-4C16-892A-2725A08AAD6C  
**Description:**  
Displays a count of the number of currently selected characters, including an additional figure that excludes new lines.


### TAD-Selection Word Count
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chart-bar  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E7F5402C-9AF5-49C5-9356-3ED6056961A1  
**Description:**  
Displays a count of the number of currently selected words.


### TAD-Selection Line Count
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chart-bar  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7871B54F-53A3-439B-B56F-A46A6EA142E1  
**Description:**  
Displays a count of the number of currently selected lines.
A partially selected line counts as one line.
If there is no selection, then it will display that zero lines are selected.


### TAD-Selection Count Information
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chart-bar  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A14A0F45-2461-4B7B-B171-2E9E3017E275  
**Description:**  
Displays a count of the number of currently selected characters, including an additional figure that excludes new lines.

Displays a count of the number of currently selected words.

Displays a count of the number of currently selected lines.
A partially selected line counts as one line.
If there is no selection, then it will display that zero lines are selected.


### TAD-Display Drafts and System Information
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 442-information-symbol1  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3AA564FC-50DD-4621-9BF6-E4226511B05C  
**Description:**  
Displays informtion about the Drafts app and the device it is running on.


### TAD-Show Draft Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 442-information-symbol1  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 4558B212-B070-412D-B03B-381D85059E82  
**Description:**  
Display the information panel for any draft without navigating away from the current draft.


### TAD-Info Menu
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 669-radar  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 5  
**Unique ID:** E2ACB2A1-CF64-4E53-90EB-C0E3A29DFC84  
**Description:**  
An example menu that shows how to initialise the `TAD-Action Menu` to display a list of actions to choose from to be run.


### TAD-Export Action Shortcut Keys
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 356-signpost  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C578C7D7-7C08-4C01-ADF6-A0469BE877D5  
**Description:**  
Export the name of an action, along with it’s shortcut key into a new draft, effectively building a list of all of your shortcut keys and what actions they will trigger.


### TAD-Check random.org Quota
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** chart-pie  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AAE73DC0-58E3-404A-8439-F911AAD30E92  
**Description:**  
Check the currently remaining quota on the API at random.org for the current IP address.


### TAD-Display Device UUID for Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 557-passport  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 151D6277-9756-47B2-8F39-43179930C866  
**Description:**  
Display the UUID that TADpoLe will use for Bear on the local device.


### TAD-Copy Device UUID for Bear
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** binary  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 57BD112C-6CCF-4E60-A759-37BF8978D9B4  
**Description:**  
Copies the UUID that TADpoLe will use for Bear on the local device to the clipboard.


### Slash Command
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B17846DA-6CB0-4D76-B35A-A726C8539AF8  
**Description:**  



### TAD-Slash Command Prompt
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 632-command-symbol  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AC4FFF48-5ECD-4C3F-AEF8-1B246054244D  
**Description:**  
Use a pop-up to capture and run a slash command.


### TAD-Slash Command In-Situ
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 632-command-symbol  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E525967C-C61D-4614-9EF6-9DD525D5597C  
**Description:**  
Find the last forward slash in the current line in the editor, and attempt to interpret that as a slash command.


### Persistent Variable Examples
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** D243BE35-AF5C-4782-BBDD-FEE521C5EF34  
**Description:**  



### TAD-Display Counter
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-search-alt  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3513CC45-847D-4C9A-AC56-B0E2E6FAA291  
**Description:**  
Display the value of a persistent counter variable in an alert.


### TAD-Zero Counter
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** radio-button  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8F96AF12-A309-479C-ADA6-C1685E43FA21  
**Description:**  
Set a persistent counter variable to zero.


### TAD-Set Counter
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_unchecked  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 374D591A-A9E2-4999-B165-8FFB56FD976F  
**Description:**  
Set the value of a persistent counter variable.


### TAD-Increment Counter
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-up  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9CCBC924-078A-4A94-A597-DDF1433A97C4  
**Description:**  
Increment the value of a persistent counter variable by one.


### TAD-Decrement Counter
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-down  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 65A0C355-E7FD-4B28-9C44-949FB3D109A5  
**Description:**  
Decrement the value of a persistent counter variable by one.


### TAD-Display Text Variable
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-search-alt  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 608698C0-A50A-4E7C-9D45-A0579C063F64  
**Description:**  
Display the value of a persistent text variable in an alert.


### TAD-Clear Text Variable
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** radio-button  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C4B55C9E-42FD-4EBA-9EBD-520253D8457D  
**Description:**  
Set a persistent text variable to an empty string.


### TAD-Set Text Variable
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn_unchecked  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** AAB3C0D3-3A30-42E8-A716-25AB3BB36812  
**Description:**  
Set the value of a persistent string variable.


### TAD-Prefix Text Variable
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_left  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 96ED01BB-6094-4F3C-9877-A0AE46D3EF2D  
**Description:**  
Prefix the value of a persistent string variable with a user specified string.


### TAD-Suffix Text Variable
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_right  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 3  
**Unique ID:** 1ADE5C1D-20C6-4E62-9E74-224171781FC9  
**Description:**  
Suffix the value of a persistent string variable with a user specified string.


### Action Groups
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 47136FD4-D7C6-4290-BFB3-AC417F162146  
**Description:**  



### TAD-Select and Display Action Group Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** align-justify  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8770F5C6-17CD-44F7-9B13-8567D74C36A1  
**Description:**  
Display a list of action group action names from a user chosen action group.


### TAD-Select and Display Action Group Separators
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** align-justify  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CFC7EEAC-0175-49BE-BDBA-2A2501F65BD6  
**Description:**  
Display a list of action group separator names from a user chosen action group.


### TAD-Copy Action Group Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4EFFF161-D3CF-4CE0-B9F3-E2B195A6F8E0  
**Description:**  
Copy a list of action group action names from a user chosen action group. Each name will be on a separate line.


### TAD-Copy Action Group Separators
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 224B9ED7-132C-4B5D-8E9A-159B9B9A060B  
**Description:**  
Copy a list of action group separator names from a user chosen action group.


### TAD-Select and Display Sorted Action Group Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** align-justify  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EFBBA2C2-491C-4582-AAA3-AC173CA42185  
**Description:**  
Display a list of action group action names from a user chosen action group. The list will be alphabetically sorted.


### TAD-Select and Display Sorted Action Group Separators
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** align-justify  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0BC4694C-A9C4-408B-9121-46AD5DABFAFB  
**Description:**  
Display a list of alphabetically sorted action group separator names from a user chosen action group.


### TAD-Copy Sorted Action Group Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A0E6A0D7-2BD8-4922-BE1E-AA3C956A04F8  
**Description:**  
Copy a list of alphabetically sorted action group action names from a user chosen action group. Each name will be on a separate line.


### TAD-Copy Sorted Action Group Separators
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F79666B5-5BD6-44F3-B070-0B50CA4DC241  
**Description:**  
Copy a list of alphabetically sorted action group separator names from a user chosen action group.


### Action Groups - From Install URL
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** E1398FD8-DE1B-4D61-BA5A-C43DFB88289C  
**Description:**  



### TAD-Display Action Group Actions
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5AD37EA7-A015-4344-AABC-5907DF00BE1F  
**Description:**  
Display a list of action group action names from an installation link on the clipboard.


### TAD-Display Action Group Separators
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AF07987C-428D-41AD-9A97-4F2F4F9F9757  
**Description:**  
Display a list of action group separator names from an installation link on the clipboard.


### TAD-Display Action Group Item Names
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** menu  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 09EAC987-079A-4564-BB55-EB8C95CC17D4  
**Description:**  
Display a list of action group action & separator names from an installation link on the clipboard.


### TAD-Display Action Group Info
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 452-information-symbol2  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 7E7DF9E6-7D23-4881-8692-2F0510263878  
**Description:**  
Display a set of information about the action group defined by the installation link on the clipboard.


### Sample Content
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 1F9CE028-8630-4C8F-8039-CE2981DA4C25  
**Description:**  



### URL Encoding/Decoding
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 01AFF646-8A3D-48C2-ABE1-AEF3EF68EA20  
**Description:**  



### TAD-URL Encode Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_gear1  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 9D0E48FE-03C0-4DE8-9D6A-89F7C31B41F3  
**Description:**  
Replace the selected text with a URL encoded version.


### TAD-URL Decode Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_gear1  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** F58A41F4-F547-449E-A848-E12B1D325441  
**Description:**  
Replaced the selection with URL decoded text.


### TAD-URL Encode Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** FC1F5175-018F-4F69-BC6B-FF93F862CBAE  
**Description:**  
URL encode the selected text and place the results on the clipboard


### TAD-URL Decode Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_clipboard_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** D8B2E2B7-11FA-4798-8543-D21C474A9075  
**Description:**  
URL decode the selected text and place the results on the clipboard


### TAD-URL Encode Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 605DD355-F838-42DE-9663-2AD209D658A2  
**Description:**  
URL encode the clipboard contents


### TAD-URL Decode Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-add  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 99A3D47D-C370-4D75-8C91-DEDAD11A0D61  
**Description:**  
URL decode the clipboard contents


### TAD-Insert URL Encoded Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-pencil  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 60A35AE0-9C98-453F-8AC4-009E25581021  
**Description:**  
URL encode the clipboard contents and insert them at the current cursor position.


### TAD-Insert URL Decoded Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-pencil  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** CAB4C410-8B21-485E-9F51-EB1FBCEBBC2D  
**Description:**  
URL encode the clipboard contents and insert them at the current cursor position.


### TAD-URL Encode Draft to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E2D8EECD-A145-4B60-9E71-0D30AE764B43  
**Description:**  
URL encode the entire content of the draft and place it on the clipboard.


### TAD-URL Encode Draft Body to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** e-reader  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** 18B07C6D-E05E-431F-9EAF-E8DBD0B829F0  
**Description:**  
URL encode the body of the draft and place it on the clipboard.


### TAD-URL Encode Draft Title to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-minus  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 1  
**Unique ID:** ECBB20BF-AB40-4FE3-9259-F1C4C1D463FF  
**Description:**  
URL encode the title (first line) of the draft and place it on the clipboard.


### TAD-URL Encode Draft Link to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-linkmode  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EE0A919A-F73D-4410-9A3D-70CF6F72B0D6  
**Description:**  
URL encode the link to the current draft and place it on the clipboard.


### Advanced Logging
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** CF114C17-0EC4-4920-8802-D2D3A12EA17B  
**Description:**  



### TAD-Generate Fake Log
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 536-disguise  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 15319DBD-98B1-4D22-9AAA-7BB48919181E  
**Description:**  
This action clears the log entries from the default advanced log and adds a set of 60 new random entries.

It is useful if you just want to see how the related functions work and haven’t yet incorporated the logging into your own scripts.


### TAD-Preview Full Log
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** browser-alt  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E10D5493-0A96-426B-8A14-580368448C9B  
**Description:**  
This action displays the full default advanced log in the Datatable based preview. This will include the timestamp, entry type, entry code, and log entry.


### TAD-Preview Simple Log
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** browser-alt  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A5B0DF1E-D491-45E6-9E32-FF7FE6F01475  
**Description:**  
This action displays the simplified default advanced log in the Datatable based preview. This will include only the timestamp and the log entry.


### TAD-Log to Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-content  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 86ACC925-3943-49AC-8ABA-9DC161CB0E92  
**Description:**  
This action exports the log entries to the draft.


### TAD-Log to Draft Include INFO Entries
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-check  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0AE3530B-B317-432D-9828-7F235BFDDE0E  
**Description:**  
This action exports the log entries to the draft which have a type of “ERROR”.


### TAD-Log to Draft Exclude INFO Entries
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-cancel  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AEE81DFC-AB51-4B1A-A981-8779416B9FDA  
**Description:**  
This action exports the log entries to the draft which do not have a type of “INFO”.


### TAD-Clear Log
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-cancel  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8A0CCD01-63EF-4651-BC95-B30E86F9EEA0  
**Description:**  
This action clears the log entries from the default advanced log.


### TAD-Display First Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3116851E-6741-40EE-94F1-333CE0500343  
**Description:**  
Display the first entry chronologically in the default advanced log.


### TAD-Display Last Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 45EAC1AD-BB69-45F6-8222-9B7F95C7D2E9  
**Description:**  
Display the last entry chronologically in the default advanced log.


### TAD-Display First Info Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2E9355AB-BCF0-4B49-912C-62D56D47198D  
**Description:**  
Display the first info entry chronologically in the default advanced log.


### TAD-Display Last Info Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 79AFFDB9-B825-413B-A987-406680ADEE7B  
**Description:**  
Display the last info entry chronologically in the default advanced log.


### TAD-Display First Warning Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0880E969-4A47-4D0E-AEC1-C2FC825E6554  
**Description:**  
Display the first warning entry chronologically in the default advanced log.


### TAD-Display Last Warning Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** AAFFF1D1-237D-4208-A0C3-233086B601DE  
**Description:**  
Display the last warning entry chronologically in the default advanced log.


### TAD-Display First Error Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 477-skip-backward2  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B1FE4F25-CE39-4638-8E19-82B39CF16EE0  
**Description:**  
Display the first error entry chronologically in the default advanced log.


### TAD-Display Last Error Log Entry
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 478-skip-forward2  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6EE77F86-0FDF-4B1B-8E84-C37198108716  
**Description:**  
Display the last error entry chronologically in the default advanced log.


### Meta Based File Management
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** B3C94021-0702-4138-9B3B-70CEB1FF2617  
**Description:**  



### TAD-Set Meta File Path
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 312-waypoint  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2BB35D5F-3521-422A-B027-0FD1C4738013  
**Description:**  
Set or edit the meta data file path for the current draft.


### TAD-Export to Meta File Path 
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-up  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D83DF35C-B425-41B1-AE26-BD58B4B9F5C9  
**Description:**  
Save the content of the current draft to the file path that has been specified in its meta data.


### TAD-Import From Meta File Path
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** send-down  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** A7304C3C-9280-4333-AF05-9AFC42454130  
**Description:**  
Save a version, and then load the content of the  file path that has been specified in the draft’s meta data into the draft. This will replace any existing content, but you can restore the version to get it back if you do this by mistake.


### Corrupt Content
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 4E8DD0E3-E419-4060-ADC0-FFA2D58C55D5  
**Description:**  



### TAD-Mistype Slip
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 314-move-point  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D93AEE34-5C82-4471-9F86-EF66CABFD980  
**Description:**  
Corrupt draft content by mistyping 0.5% of characters from slips of typing basic alphabetic characters on a QWERTY keyboard.


### TAD-Mistype Transpose
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 314-move-point  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 211418EC-CA49-47B9-81AC-AAF25CC8B1A8  
**Description:**  
Corrupt draft content by transposing 0.5% of characters with it’s neighbour.


### TAD-Mistype Slip & Transpose
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 314-move-point  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 1A086D69-AD4E-48F1-BD2E-56060261F6AF  
**Description:**  
Corrupt draft content by mistyping 0.5% of characters from slips of typing basic alphabetic characters on a QWERTY keyboard. Then transpose 0.5% of neghbouring characters in that result.


### TAD-ROT13 Encode Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-alert  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E15EE7DD-FA4A-4C92-9367-A536006E9960  
**Description:**  



### TAD-ROT13 Encode Draft to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-alert  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EF6AAFBE-3E1F-460A-9F1E-EDA0CCBC4CF5  
**Description:**  



### TAD-ROT13 Encode Clipboard and Insert
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-alert  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DFFC2D95-17BB-4AA6-801F-65F27C93314C  
**Description:**  



### TAD-ROT13 Encode Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** clipboard-alert  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 87BC4C47-F5E2-4CCB-8B93-195A3373E199  
**Description:**  



### TAD-ROT13 Encode Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** btn-arrangemode  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3F437162-436B-48D6-8D1C-C47FD6636949  
**Description:**  



### TAD-ROT13 Encode Draft to New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5C91CDCC-6DD7-4D75-8655-7F7AC0357819  
**Description:**  



### TAD-ROT13 Encode Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** content  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** CA25E6CC-3E43-487B-AF6A-A1377C54D5C0  
**Description:**  



### TAD-Obfuscate Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 432-no  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 8AD11882-78B5-4EE3-9B1A-4A155E49939E  
**Description:**  
Obfuscate the content of a draft. While this obfuscation uses AES encryption to carry out the obfuscation, it is not truly encrypted as the key is associated with the draft’s own meta data.


### TAD-Deobfuscate Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 434-o  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 492A28FF-EAEC-4F25-891B-45E4C279EA74  
**Description:**  
Deobfuscate the content of a draft. While this dobfuscation uses AES decryption to carry out the deobfuscation, it is not truly decrypted as the key is associated with the draft’s own meta data, and so was never securely encrypted to begin with.


### AES
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 4D4CCC5B-D6BC-419F-9EEA-99D42277CDF7  
**Description:**  



### TAD-AES Encrypt Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** F8471DA0-D046-45F1-98C2-EE12624CBCE9  
**Description:**  
Encrypt the selected text using AES.


### TAD-AES Decrypt Selection
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 9C1D79BD-C8B6-4DCC-82D8-09DA6A2D1730  
**Description:**  
Decrypt the selected text using AES.


### TAD-AES Encrypt Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 2192254C-A7E4-4F99-ACA7-485AF22CFFD5  
**Description:**  
Encrypt the selected text using AES and place the encrypted text on the clipboard.


### TAD-AES Decrypt Selection to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 87B1B041-80FA-4607-9757-6CEF29CFB04E  
**Description:**  
Decrypt the selected text using AES and place the decrypted text on the clipboard.


### TAD-AES Encrypt Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** E9516461-AB61-475C-8347-EA5ECDDED2C2  
**Description:**  
Encrypt the current draft content using AES.


### TAD-AES Decrypt Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 241D0AC5-F065-4996-B186-F0C96C3D628B  
**Description:**  
Decrypt the draft content using AES.


### TAD-AES Encrypt Draft to New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 132970D1-8277-4F5B-8322-A04CA4423E73  
**Description:**  
Encrypt the current draft content using AES and place the encrypted content in a new draft.


### TAD-AES Decrypt Draft to New Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 3DDF3557-90F3-49AB-8BC4-B65C3C383F3B  
**Description:**  
Decrypt the draft content using AES and place the encrypted content in a new draft.


### TAD-AES Encrypt Draft to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** D3898CBF-EA53-441F-8803-339B4113FBA8  
**Description:**  
Encrypt the current draft content using AES and place the encrypted text on the clipboard. The draft content remains unchanged.


### TAD-AES Decrypt Draft to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** indigo  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 80130658-4397-4D61-ACD0-76DF57E60E29  
**Description:**  
Decrypt the draft content using AES and place the decrypted text on the clipboard. The draft content remains unchanged.


### TAD-AES Encrypt Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 6849A3B6-5057-42B2-B869-071700EFE11C  
**Description:**  
Encrypt the content of the clipboard using AES.


### TAD-AES Decrypt Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 0531802B-BE1C-4EF6-8A7F-5C301745ADCC  
**Description:**  
Decrypt the content of the clipboard using AES.


### TAD-Insert AES Encrypted Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 441-help-symbol1  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4532FBA0-60C5-45F9-A915-4D91A6D5718C  
**Description:**  
Encrypt the content of the clipboard using AES and insert it at the current cursor position. The content of the clipboard remains unchanged.


### TAD-Insert AES Decrypted Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** type-square  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** B11A6EEA-C7F5-4347-AD2B-02080EE70468  
**Description:**  
Insert the decrypted content of the clipboard at the current cursor location. The clipboard remains encrypted.


### Key Generation
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 1A0C031B-A04F-499E-88B2-1A9AA410DFEF  
**Description:**  



### TAD-128-bit Key to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 42E539E8-320B-4D48-8484-C5B148E9F79C  
**Description:**  
Obtain a 32 hexadecimal character string generated at random (via random.org), and place it on the clipboard.


### TAD-192-bit Key to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** EB2718E7-9BB9-4EAF-8D45-7D0B4DC8F835  
**Description:**  
Obtain a 48 hexadecimal character string generated at random (via random.org), and place it on the clipboard.


### TAD-256-bit Key to Clipboard
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** DEC485DF-CC84-46F4-A3BC-F621C761517A  
**Description:**  
Obtain a 64 hexadecimal character string generated at random (via random.org), and place it on the clipboard.


### TAD-Insert 128-bit Key
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** BE532BED-E308-45B0-99F9-81DE2E6CC890  
**Description:**  
Obtain a 32 hexadecimal character string generated at random (via random.org), and place it at the current cursor position.


### TAD-Insert 192-bit Key
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** C351E93A-6BF4-451F-A9F1-99373EF296BF  
**Description:**  
Obtain a 48 hexadecimal character string generated at random (via random.org), and place it at the current cursor position.


### TAD-Insert 256-bit Key
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 383-keyhole  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 5487C103-41BA-406D-986F-BCEFB9002F04  
**Description:**  
Obtain a 64 hexadecimal character string generated at random (via random.org), and place it at the current cursor position.


### Base64 Encoding Decoding
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 1C536A2E-AE96-4E9D-A280-84C093145ACB  
**Description:**  



### Syntaxes
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 45D594BE-D780-40FE-8B3F-16992CC6ACA9  
**Description:**  



===
## Twitter

### Load Twitter Workspace
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** tweet  
**Colour:** gray  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 34777651-781F-4477-AF11-6849C2EE1C58  
**Description:**  
loads the Twitter Workspace. Used in combination with the [URL Scheme for Creeating a draft](https://docs.getdrafts.com/docs/automation/urlschemes#create)


### Compose
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 88B1D900-24B2-4CC4-B626-880A8CC99BE6  
**Description:**  



### Compose New Tweet
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter  
**Colour:** green  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** B66BF619-581F-4796-979D-12F845958F2D  
**Description:**  



### insert
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_at  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** 39CBBD51-86EE-47D8-AA53-F06A0A9C99D9  
**Description:**  
inserts an @ for usernames (for mobile)


### insert
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** hashtag  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** None  
**Log Level:** None  
**Number of Steps:** 1  
**Unique ID:** D89C47AF-E5CE-4AE0-9004-E09CF56F83B6  
**Description:**  
inserts a hashtag (for mobile)


### Emojify
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 672-emoticon-wink  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 40C74493-42EF-4D3D-9ACF-932C0B4BFE9F  
**Description:**  
Swap common words with their matching emoji characters, or reverse the process. 

Emoji matches are defined in a variable in the first step of the action, and can be easily modified to support other emoji. Only a few emoji are included as examples, like “pizza”, “dog”, “cat”, “shrug”. Add addition ones by editing the “emojis” variable with other values.

The action also supports the option to require the word be followed by the word “emoji” when the “Require ‘emoji’ keyword is enabled. This works well with dictation to allow you to say, “Do you want to eat pizza emoji?” and later convert only the words you marked with “emoji”.



### Shorten Text
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-shrink  
**Colour:** violet  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 2F96643B-21B9-4486-9154-071FF97898F7  
**Description:**  
Several automatic replacements to shorten the length for a tweet, like "with" ➞ "w/" or "something" ➞ "sth"

Contains common abbreviations for Englich and German.
Submit your own suggestions (or additional languages) via pull request at the [Github project for the Twitter Workspace](https://github.com/chrisgrieser/twitter-workspace-for-drafts)


### Send One Tweet
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 9DFBA02C-D366-420D-8A3F-D5D227FCA1AC  
**Description:**  



### Show 280 char Limit
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** stop-sign  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** 84CCCC06-7161-4B26-B37B-E3477CC1D4B7  
**Description:**  
puts a marker at the 280 character limit of Twitter


### Tweet
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** F5958AC2-5DAE-4926-927A-4490F56D532A  
**Description:**  
Post draft to Twitter. 280 characters max.


### Tweet with #Hashtag
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 337763E7-41B1-441F-8B80-0B0039465649  
**Description:**  
Post draft to Twitter automatically appending a hashtag and archiving the draft after posting.


### Send Multiple Tweets
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** FC658682-2E2A-4E77-B283-DF3D3F759C29  
**Description:**  



### Suggest Split
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** arrow-diverge  
**Colour:** yellow  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** D97853A4-439F-4E97-A99F-0715DE171439  
**Description:**  
Splits the text into blocks of at most 250 characters (depending on the position of the space), which allows for indexing.


### Tweet Storm
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** action_twitter_filled  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 4  
**Unique ID:** BF4F8D64-3B99-401B-8E62-31D4A2DF644C  
**Description:**  
Divide up a draft into separate tweets by seperator "==".  

Build a preview of the tweets as they will be posted and display it. If “Continue” tapped from preview, post each of the tweets as a threaded tweet storm.


### Read
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** C09552B0-FB89-493C-ADBD-4ED8E18AAB36  
**Description:**  



### Favs of an User
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** heart  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 17DCF32D-E4C6-4688-BA44-2674A02652F7  
**Description:**  
Prompt for a Twitter handle, the request a list of their recent likes from the Twitter API. Build a Markdown version of those tweets, put them in a new draft and open it in the editor.

Demonstrates use of the [Twitter object](https://github.com/agiletortoise/drafts-documentation/wiki/Twitter) request method to make arbitrary requests to the Twitter API.


### Search Twitter for...
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** page-search-alt  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** BDB88CD8-1CA0-49A6-8733-8DAF0EF34EC3  
**Description:**  
Prompt for a Twitter search query. Can be for any text string and supports the same syntax used in Twitter web search.

Use Twitter API to get a list of tweets matching the search and import them into a new draft as a Markdown list, with screen name and link to the tweet included.

Posted as an example of Twitter API use in Drafts.


### Preview & Print
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** 534-eye  
**Colour:** red  
**Confirm to Run:** false  
**Notifications:** Errors  
**Log Level:** Errors  
**Number of Steps:** 2  
**Unique ID:** 4E38365E-F743-46E6-8220-697A942F4A32  
**Description:**  
Markdown preview, print by pressing continue


===
## Examples (Mac): AppleScript & Shell Script

### AppleScript: Show Draft
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** script  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 1  
**Unique ID:** BE045E85-F99E-4B8C-A43F-B9A4F73498D3  
**Description:**  
Example action which demonstrates using an AppleScript in Drafts. This version just displays a dialog with the contents of the current draft, which are passed to the Run AppleScript step.


### AppleScript: Handle Response
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** script  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 73868FD4-D7AE-4F9A-B3D8-44DAC5D3EBF1  
**Description:**  
Example action demonstrating how to get response data from an AppleScript in subsequent script steps.


### AppleScript: Run From Script
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** script  
**Colour:** orange  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** AB69CCD0-2E8D-4E7B-A0C7-6D169C61FDFA  
**Description:**  
Demonstrates calling AppleScript from JavaScript in a Script step.


### ShellScript: Bash Example
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** code-alt  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 4BAA2DE4-0A19-4B9F-A78A-525C562BF300  
**Description:**  
Run simple bash shell script via script. Mac only.


### ShellScript: Ruby Example
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** code-alt  
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 5E6300B2-7A93-4990-AED5-DFDD4681E2C5  
**Description:**  
Run simple shell Ruby shell script. Mac only.


### Demo
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:**   
**Colour:** none  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 0  
**Unique ID:** 04A11404-4EB4-4A1E-AD3E-8D6462DDF81D  
**Description:**  



### New Draft with Safari Tabs
**Type:** Action  
**Keyboard Shortcut:**   
**Icon:** script  
**Colour:** blue  
**Confirm to Run:** false  
**Notifications:** All  
**Log Level:** All  
**Number of Steps:** 2  
**Unique ID:** 7834EBC2-84A4-4361-9468-5C7A8A58B22B  
**Description:**  
Use AppleScript to gather all current tabs open in Safari and create a Markdown list in a new draft containing the title and URL of the pages in each tab.

