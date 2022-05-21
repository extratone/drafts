# TAD Library Fix

![TAD Library Fix Diff](https://i.snap.as/suuS35Ev.png)

- [#64](https://github.com/extratone/drafts/issues/64)
- git@github.com:extratone/drafts.git [**1cf16d7**](https://github.com/extratone/drafts/commit/1cf16d7a42c69034eb3b01bf7a4a1e1a3dbb25cb)
- [Script Error: SyntaxError: JSON Parse error: Unexpected identifier "drafts" Line number: 53, Column 35 - Scripting - Drafts Community](https://forums.getdrafts.com/t/script-error-syntaxerror-json-parse-error-unexpected-identifier-drafts-line-number-53-column-35/12187/14)
- [Issue Comment](https://github.com/extratone/drafts/issues/64#issuecomment-1133647261)
- [WTF](https://davidblue.wtf/drafts/A9E83B70-8F74-4BF6-A34C-90F733F08C44.html)

```js
From 1cf16d7a42c69034eb3b01bf7a4a1e1a3dbb25cb Mon Sep 17 00:00:00 2001
From: David Blue <davidblue@extratone.com>
Date: Sat, 21 May 2022 09:39:48 -0500
Subject: [PATCH] #64

> This is the fix for my TAD Library issues! I’ve got a handy screenshot to comment on the issue.
---
 library/Scripts/tad.js | 10 +++++-----
 1 file changed, 5 insertions(+), 5 deletions(-)

diff --git a/library/Scripts/tad.js b/library/Scripts/tad.js
index 43e7ef8..959f2e9 100644
--- a/library/Scripts/tad.js
+++ b/library/Scripts/tad.js
@@ -13,7 +13,7 @@
 Action.prototype.TA_populateMore = function()
 {
 	//Get the installation data for an action from its install URL
-    let jsonActionData = JSON.parse(decodeURIComponent(this.installURL.replace(“drafts5://action?data=“,””)));
+    let jsonActionData = JSON.parse(decodeURIComponent(this.installURL.replace(“drafts://action?data=“,””)));
 
     //Populate the additional properties.
     //  For ease of recognition, and to avoid clashes with future updates that may
@@ -7230,7 +7230,7 @@ class TadLibrary
     // Used to quickly replace the TAD-Library action contents from the tad.js library file.
     TA_buildLibraryAction()
     {
-        const strCall = “drafts5://action?data=“;
+        const strCall = “drafts://action?data=“;
 
         let fmCloud = FileManager.createCloud();
         let strScript = fmCloud.readString(“/Library/Scripts/tad.js”);
@@ -7640,7 +7640,7 @@ class TadMiscellaneous
         let astrNames = [];
 
         //Convert action group installation link data to JSON
-        let strLink = p_strActionGroupLink.replace(“drafts5://actionGroup?data=“,””);
+        let strLink = p_strActionGroupLink.replace(“drafts://actionGroup?data=“,””);
         strLink = decodeURIComponent(strLink);
         let jsonData = JSON.parse(strLink);
 
@@ -7704,7 +7704,7 @@ class TadMiscellaneous
     TA_actionGroupLinkToName(p_strActionGroupLink)
     {
         //Convert action group installation link data to JSON
-        let strLink = p_strActionGroupLink.replace(“drafts5://actionGroup?data=“,””);
+        let strLink = p_strActionGroupLink.replace(“drafts://actionGroup?data=“,””);
         strLink = decodeURIComponent(strLink);
         return JSON.parse(strLink).name;
     }
@@ -7715,7 +7715,7 @@ class TadMiscellaneous
     TA_actionGroupLinkDocument(p_strActionGroupLink)
     {
         //Convert action group installation link data to JSON
-        let strLink = p_strActionGroupLink.replace(“drafts5://actionGroup?data=“,””);
+        let strLink = p_strActionGroupLink.replace(“drafts://actionGroup?data=“,””);
         strLink = decodeURIComponent(strLink);
         let jsonData = JSON.parse(strLink);
         let strDoc = “# “ + jsonData.name + “\n”;
--
Working Copy 5.2.1
```