# Automating iOS: A Comprehensive Guide to URL Schemes and Drafts Actions
![](Automating%20iOS%20A%20Comprehensive%20Guide%20to%20URL%20Schemes%20and%20Drafts%20Actions/1389714019-2014-01-14-at-16-39-58-Drafts.jpeg)
I started teaching myself how to build and run URL actions with [Drafts](http://agiletortoise.com/drafts/) in early 2013, when I decided to attempt to satisfy [Federico Viticci’s Challenge](http://www.macstories.net/tutorials/chaining-multiple-apps-together-with-drafts/) to chain more iOS apps together than he had. I spent a few days feverishly searching for information on URL schemes, learning how to build actions and run them through the Drafts URL action engine, and figuring out the best way to create a chain which connected more than Federico’s record of three apps. When I triumphantly sat back and watched my iPad run an action sequence automatically chaining five apps together (Drafts, Dropbox, Due, Instapaper and Chrome), I had no idea that it would lead to [an article being written about me here](http://www.macstories.net/links/alex-guyot-chains-5-apps-with-drafts/), starting a blog to have a place to write about the actions I was building, an opportunity to beta test Drafts, and the chance to connect with all kinds of interesting, like-minded people from all over the world.

Since that time, less than a year ago, iOS automation has exploded in power and popularity. It feels like a new app adds support for [x-callback-url](http://x-callback-url.com/) almost every week. Drafts still stands tall as one of the front runners in the field, having added awesome new features to make far more powerful workflows possible since last February, but other apps compete as well. Launch Center Pro and Pythonista are notable, and the latest challenger, [Editorial for iPad](http://appstore.com/editorial), rode in on [a blaze of Viticci-inspired glory](http://macstories.net/stories/editorial-for-ipad-review). So much has changed since the beginning of last year, but there’s one important aspect which, surprisingly, has not. While the field of iOS automation has paraded forward, the gateway into the fun, learning the skills to understand and build the URL actions that make inter-app communication possible, has remained almost unchanged. Information is more readily available from the introduction of many new sources, but it remains scattered and decentralized. The inner workings of URL schemes are not incredibly complex, but when interested individuals must spend hours searching for the right sources all across the internet, the process becomes confusing, boring, and far more time consuming than necessary.

Since I first started The Axx (and created [The Action Page](http://theaxx.net/actionpage) as a place to make my actions available to anyone who wanted them), I have been asked again and again if I knew of a place to go to quickly and easily learn how to understand and build these actions. I have grown tired of having no good answer to this question. As a result, I have decided to take my best shot at creating a source for that answer. This article will attempt to centralize all of the necessary information for a complete beginner to quickly and easily go from little to no prior knowledge of the subject to being able to understand and build their own complex workflows with Drafts and URL actions. I will only be focusing on Drafts here, but the skills learned throughout this guide should be easily transferable to other apps, like [Launch Center Pro](http://contrast.co/launch-center-pro/) and [Editorial](http://omz-software.com/editorial/index.html). For intermediate, and perhaps even expert action-builders, I will hopefully have some tips that will interest you as well in the last few sections of the article.

Before we begin, be sure to enable the “Allow URLs to trigger actions” setting (found almost all the way to the bottom of the settings pane in Drafts under “URL Security”), which is disabled by default. This setting will allow you to trigger actions externally via URL, a key component to chaining apps together with Drafts, or using apps like Launch Center Pro or Bookmarklets in Safari to run Drafts actions automatically.

So here it is, my Comprehensive Guide to URL Schemes and Drafts Actions.

## Table of Contents

## The Basics

The trick to improving and automating your workflows on iOS is to use Drafts as the central hub for all text input which you are planning on later outputting somewhere. Your tweets, your App.net, Google+ and Facebook posts, your calendar events, your blog posts – if you start it all with Drafts, you can automate it all with Drafts.

Within Drafts, all outputting begins with your Action List. The action list is accessed via the share icon in the top right corner of the app. Upon tapping it, a list of every action you have installed will be displayed on your screen, on top of whatever draft you have open (each individual page of text you have saved in Drafts is referred to as a “draft” as opposed to “note” or any other terminology like that). Tap an action and it will immediately be run on whichever draft is currently open beneath the action list. Actions have the ability to take the text you’ve written in your draft and do…pretty much anything with it. Besides posting it to social networks, you could upload it to Dropbox, send it to Evernote, email it, message it, or send it to another app and let that app do something with it. Once you learn how to make custom actions, the options for outputting your text from Drafts are basically limitless.

![](Automating%20iOS%20A%20Comprehensive%20Guide%20to%20URL%20Schemes%20and%20Drafts%20Actions/2013-11-07%252007-47-24%2520PM-drafts_guide-iPadScreenshot1.png)
Drafts for iOS 

Drafts comes with quite a few preinstalled actions already in your action list. Once you link Drafts to your Twitter, Facebook, App.net, Evernote and Dropbox accounts in settings, you enable more built-in actions for these services as well. These most basic actions are completely self-explanatory: they quite simply take the entire contents of your currently open draft and send it to whatever service the action you’re running pertains to. Simple actions like these will end up being the building blocks for many of the more complex workflows that you can create, because all workflows are built by chaining together simpler actions.

Here is a basic example. My [Cross Post](http://theaxx.net/crosspostaction) action posts the text I write in a draft to both Twitter and App.net, automatically. However, while the action does post them *automatically*, it does not post them *simultaneously*. There is a key difference here, and it must be understood in order to understand how to build more complex URL actions. I cannot tell Drafts to both Tweet and post a draft to App.net at the exact same time. I can, however, tell it to tweet the current draft, then open a new draft with the exact same text, and post that one to App.net. This is how my Cross Post action works, and this is how all complex actions must work. **You can only run a single action on any single draft**, but you can then leverage the advanced tools provided by Drafts (that is, its x-callback-url capabilities and its built-in variable tags), in order to create an entirely new draft (which contains the text from the old one) and run an entirely different action on it. If that logic is still confusing to you, bear with me and it should be made more clear as we get into the URLs themselves.

All Drafts actions come in the form of short strips of code know as “URL actions”, which are drawn from the “URL schemes” of apps. You add new URL actions in Drafts by going to Settings –> URL Actions and hitting the plus button. Then type in the name of your action in the first box, and the URL of your action in the second box. You can use the “Tag Help” button to find a list of available `[[variable tags]]` which can be used in your actions (we’ll discuss those later). Before you start adding actions, you have to understand what they do and how they’re built.

![](Automating%20iOS%20A%20Comprehensive%20Guide%20to%20URL%20Schemes%20and%20Drafts%20Actions/2013-11-07%252007-49-59%2520PM-drafts_guide-1-2.png)
Drafts for iOS 

iOS apps are sandboxed, meaning they are only allowed to interact with the operating system (and other apps) in very limited ways. One of these ways has always been through URL actions. This is how opening a link in any app can automatically move you over to Safari with the corresponding webpage open, or tapping an address can take you into Maps with a pin on the specified location. Safari and Maps both have URL schemes which support this type of communication. Third-party developers have managed to take advantage of this small opening through which apps can “talk” to each other to make incredible things possible by giving their apps powerful URL Schemes.

A URL scheme is built in a very similar manner to the website URLs that you are likely familiar with. Just as every website has its own personal domain name, which the URLs of all webpages within the site begin with, every iOS app which has the ability to be used in your automation workflows also has its own personal “domain name,” and every action supported by the app must begin with the same name. This “domain name” of the app, combined with all the possible actions that you are allowed to perform by adding onto it, make up the app’s URL scheme.

Domain names for websites are always “http://yourwebsite.com”, or something similar to that, but “domain names” for apps (the first level of their URL scheme) are always `yourapp://`. Furthermore, as you add onto the end of a website URL, such as “http://yourwebsite.com/about”, you will go further into the site, accessing a page deeper in the site’s hierarchy than the home page. This is the same for app URLs, except that adding to the end of `yourapp://` can cause the app to perform an actual action, instead of simply moving you to a view different than the main view of the app. If this concept is still confusing, learning the Drafts URL scheme should make it a lot clearer.

## The Drafts URL Scheme

Before you can build and chain actions quickly and easily, you must understand the hierarchy of the Drafts URL scheme.

The “domain name” for Drafts is, not surprisingly, `drafts://`. If you’re reading this on an iOS device with Drafts installed, type “drafts://” into the Safari address bar and hit return (if you’re using Google Chrome or another browser that isn’t Safari, you may need to press the second option that pops up under the omni-bar to follow the URL, otherwise your browser will attempt to search the term in Google instead). Don’t worry, it won’t take you off of this page. Rather, it should launch you out of whichever web browser you’re in and open Drafts at whatever position you left the app in (if you have the app set to create a new draft upon launch, that will happen, too). When you’re done, come back here and keep reading.

![](Automating%20iOS%20A%20Comprehensive%20Guide%20to%20URL%20Schemes%20and%20Drafts%20Actions/2013-11-07%252007-47-24%2520PM-drafts_guide-iPadGIF1.gif)
Drafts for iOS 

Congratulations: if you’re totally new to this, you just launched your first URL action. However, it didn’t actually do anything, so it wasn’t really much of an action, was it? That’s where the rest of the Drafts URL scheme comes in. `drafts://` is only the top level of the scheme. As we now enter the second level, we have two options – two routes we could take. Drafts supports the second level URLs of `drafts://create?` Or `drafts://import_action?`. Before we get into those, though, there’s one last piece that we can’t forget: the x-callback-url.

The x-callback-url is a specification created by [Greg Pierce](https://twitter.com/agiletortoise). Pierce, not by conincidence, is also the developer of Drafts. x-callback-url is something that developers can freely implement into the built-in URL schemes of their apps to allow them to send a “success” parameter after completing a certain action. It is very similar to an “if, then” statement in other programming languages. When you run an action for an app that supports x-callback-url, you can tell the app to run a second action once the first action has been completed. This is by far the most important aspect of iOS automation. Without x-callback-url, advanced iOS automation would be impossible.

Going back to the Drafts URL scheme, it’s very important not to forget to add “x-callback-url/” to the end of the top level Drafts URL. The beginning of any Drafts action you ever build should be `drafts://x-callback-url/`. Adding that line will enable you to later add the rest of the x-callback parameters, which are essential to chaining your actions together. Even if you’re building a simple action with no chaining, it’s best to just include “x-callback-url/” in every action you build so that you never forget it when it’s necessary, and because it’s simply considered good form.

Now, back to the second level of the Drafts URL scheme (technically the third after “x-callback-url/”, but I just count that as part of the top level since it should be included in every Drafts action you ever build). We can ignore “import_action?”, as its only function is to import new Drafts actions. This direction is used to automatically install new actions from links, something which is important to sharing actions, but for building actions it is not very useful at all. So we will continue with the URL `drafts://x-callback-url/create?`. If you run that action in your web browser right now, in the same manner as you did with “drafts://” earlier, then no matter what your setting for creating a new draft on launch, when iOS jumps you out of the browser and over to Drafts, a new, blank draft will be opened for you, automatically. Try that, if you’d like. Then come back here.

So far we’ve reached the second level of the Drafts URL scheme, and we’ve chosen the far more versatile “create?” route. Continuing up this route, Drafts now only supports one direction, adding “text=” to our URL. That leaves us with `drafts://x-callback-url/create?text=`. Following “text=” will be whatever text with which we wish to populate the new draft our action is creating. The annoying part about adding this text is that it has to be hard-coded into the action, and that means it also has to be [percent-encoded](http://en.wikipedia.org/wiki/Percent-encoding). For an easy example, we’ll make our new draft simply say “Hello World”. To percent-encode “Hello World”, you only have to change the space to a “%20”. The final output, as we continue to add to our URL action, will be `drafts://x-callback-url/create?text=Hello%20World`. Run that action through your web browser now to see a new draft opened in Drafts with the text “Hello World” already written into it.

![](Automating%20iOS%20A%20Comprehensive%20Guide%20to%20URL%20Schemes%20and%20Drafts%20Actions/2013-11-07%252007-47-24%2520PM-drafts_guide-iPadGIF2.gif)
Drafts for iOS 

Let’s recap what’s happening in this URL. Since iOS recognizes the steps in a URL action in order, as they come, our action in its current form is already doing four things:

* `drafts://` tells iOS to open Drafts.
* `x-callback-url/` tells Drafts to enable its built in x-callback parameters. (We’ll get to those later.)
* `create?` Tells Drafts to create a new draft.
* `text=Hello%20World` tells Drafts to populate that new draft with the words “Hello World”.

So now we have a new draft in Drafts which says Hello World. Let’s say we now want to tweet that text. At this point we are already in Drafts with the draft containing the text we want to tweet open, so technically we could just open our action list in Drafts and press the tweet button and be done. However, iOS automation is all about skipping steps, and we’ve just reached the point where we can skip our first step. Instead of having to open our action list, find the tweet action and press it, we can just add a few words to our URL and tell Drafts to run that action on our new draft automatically. To do this, we must continue to the next level of the Drafts URL scheme: “&action=”. As you can probably guess, following that equal sign will be the title of the action we wish to run on our draft. Since, for our example, we are trying to tweet “Hello World”, our action will be “Tweet: username”. This is where the action becomes different for all of us.

In Drafts, each Tweet action is in the format of “Tweet: username”, where “username” is whatever your Twitter username is for the account you wish to tweet from. This is something to always keep in mind when sharing actions you create. If you call another action, you have to make sure that anyone you share your action with has that same action in their own action list, with the same title. Otherwise your action will do nothing. So for me, I will be using “Tweet: the_axx” in our example. Once again, however, we have to use percent-encoding, this time for our action title. A colon is percent-encoded to “%3A”, and a space is still “%20”. Our final output will be `drafts://x-callback-url/create?text=Hello%20World&action=Tweet%3A%20the_axx`. For you, of course, “the_axx” will be whatever your own Twitter username is.

Now our action is finally an action. A very simple action, but still an action. In fact, the action we just built is an exact recreation of what would happen if we ran the built-in Tweet action on a draft with the text “Hello World”. This is one of the basic building block actions which I mentioned at the beginning. We can combine this action with others in order to first Tweet “Hello World”, then perform a different action on a different draft with the same text. All we have to do is chain the actions together.

As I discussed earlier, we cannot run two actions at once. Nor can we run multiple actions on the same draft. We have to run one first, then use an x-callback parameter to tell Drafts to automatically create a new draft, with the same text as the first, and run the next action on that draft once the first action has finished. There are four x-callback parameters: x-source, x-success, x-error and x-cancel. Here I will only touch on x-success, and a little bit on x-cancel. You can read about the other two at [the x-callback-url website](http://x-callback-url.com/).

Adding the x-success parameter into your Drafts URL action tells Drafts to perform the next action upon the success of the first one. That is, once the first action is completed, the next one will be run. Since this depends upon the success of the first action, remember that your second action will never be run if the first one fails. This is why testing and re-testing each part of your URL actions is important. Your second action could be typed up perfectly, but if the first one has a slight error that causes it to fail, the second will never get a chance.

Going back to our URL action, we now have to add the next portion of the Drafts URL scheme, “&x-success=”, in order to chain a second action. Here’s what we’ll end up with: `drafts://x-callback-url/create?text=Hello%20World&action=Tweet%3A%20the_axx&x-success=`. Our action is now doing six tasks:

* `drafts://` tells iOS to open Drafts.
* `x-callback-url/` tells Drafts to enable its built in x-callback parameters. (We’ll get to those later.)
* `create?` Tells Drafts to create a new draft.
* `text=Hello%20World` tells Drafts to populate that new draft with the words “Hello World”.
* `&action="Tweet%3A%20the_axx` runs the built-in “Tweet: the_axx” action and posts “Hello World” to my Twitter account.
* `&x-success=` tells Drafts that once it successfully tweets “Hello World”, it will then perform another action.

Now you have to build your second action. This should be pretty simple, because it is exactly the same as your first, except for the final line where you specify the next action. Use all the pieces of a Drafts URL action that you just learned to create this secondary action: `drafts://x-callback-url/create?text=Hello%20World&action=Post%20to%20App.net`. The breakdown for this action should look pretty familiar:

* `drafts://` tells iOS to open Drafts.
* `x-callback-url/` tells Drafts to enable its built in x-callback parameters. (We’ll get to those later.)
* `create?` Tells Drafts to create a new draft.
* `text=Hello%20World` tells Drafts to populate that new draft with the words “Hello World”.
* `&action=Post%20to%20App.net` runs the built in “Post to App.net” action, and posts “Hello World” to your App.net account.

Now you’re almost done. There is just one final step: the second action within your action, the one you type in after “&x-success=”, must be percent-encoded. To percent-encode that entire string by hand would be an incredibly annoying and difficult process. Luckily for us, Drafts has come to our rescue. Drafts has a fantastic feature in that any time you want to percent-encode a portion of your action, you can simply surround that portion with {{double curly brackets}}. So instead of encoding that entire second action, you can instead just surround it with double curly brackets, therefore adding `{{drafts://x-callback-url/create?text=Hello%20World&action=Post%20to%20App.net}}` to the end of your x-success parameter. In fact, you can use this method for earlier parts of your action, too. Instead of “Hello%20World”, you could type “{{Hello World}}”, and instead of “Tweet%3A%20the_axx” you could type “{{Tweet: the_axx}}”.

However, there’s one important thing to note regarding the encoding of your second action. The text you are running your next action on, and action you are specifying to run on it, in the second action in your chain actually have to be *double encoded*. This is best understood by thinking of your second action as how it would have to be if you ran it in place of the first action: the text and action to run in your first action have to be encoded already. When you take that and use it as a second action, the entire thing has to be encoded. Thus, the parts that were already encoded are now double encoded. This can get pretty confusing, but using the curly bracket wrappers can keep it so you still only have to encode them once by hand (there are a variety of ways to automate the encoding of these pieces of your action. Those will be discussed later in this article), then use the curly brackets to encode them the second time automatically (using curly brackets within curly brackets to double encode doesn’t work. I’ve tried it).

That’s it! Here’s the final output of your first Drafts URL action which, when run, will tweet “Hello World”, then chain back and post “Hello Word” to App.net:

>   
```
drafts://x-callback-url/create?text={{Hello World}}&action={{Tweet: the_axx}}&x-success={{drafts://x-callback-url/create?text=Hello%20World&action=Post%20to%20App.net}}
```

Congratulations again, you now have the knowledge to build *any* complex Drafts URL action, because *every* complex Drafts URL action is built in the same format: `[First Action]&x-success={{[Second Action]}}`. Since you now understand the hierarchy of the Drafts URL scheme, your options on what actions to chain together are limitless. Even chaining more than two actions together is possible using the same logic with a few extra tricks, but we’ll get to that later. First off, there’s one last aspect of Drafts that you need to learn before you can graduate from the beginner portion of this tutorial: variable tags.

In the last section, you learned how to leverage the Drafts URL scheme in order to build a basic Drafts action, then you learned how to chain two of these actions together to create a complex action. There was one huge annoyance though: you had to hard-code the text you wanted to run the action on into the action itself. This limits any action you ever make to only work for the same words, unless you change the action’s code. If this was all you could do with actions, they would be basically useless. Luckily, Drafts has come to our rescue once again. Drafts supports a versatile variety of `[[variable tags]]`. These tags, words wrapped in [[double brackets]] and placed within your URL actions, draw text from various places within whatever draft you run the action on. Better yet, this text is automatically percent-encoded, without you having to do anything. Here are the main tags which you will likely use the most:

* `[[draft]]` is replaced, when you run your action, by the entire contents of your draft.
* `[[title]]` is replaced, when you run your action, by the contents of only the first line of your draft.
* `[[body]]` is replaced, when you run your action, by the contents of everything *except* the first line of your draft.
* `[[clipboard]]` is replaced, when you run your action, by the contents of the iOS system clipboard at the time the action is run.
* `[[line|n]]` is replaced, when you run your action, by the contents of only one line in your draft. You choose which line by changing the “n” in the tag to a number.
* `[[line|n..]]` is replaced, when you run your action, by the contents of everything except the lines above the number you specify with the “n”. It’s very similar to the `[[body]]` tag, except you choose the line to begin from. (So, for instance, `[[line|4..]]` would be replaced by every line in your current draft after the fourth line, including the fourth line itself.)
* `[[line|..n]]` is replaced, when you run your action, by the contents of the first line of your draft all the way to the nth line of your draft. You choose the line by replacing the “n” with a number. (So `[[line|..4]]` would be replaced by only the first four lines of your draft.)
* `[[line|a..b]]` is replaced, when you run your action, by the contents of a range of lines between “a” and “b”, where you replace “a” and “b” with two different numbers. (So `[[line|2..4]]` would be replaced by the second, third and fourth lines of your draft.)
* `[[Selection]]` is replaced, when you run your action, by the contents of the last selection of text used when editing the current draft. If there was no selection, it is replaced by the contents of the entire draft.

There are also tags to draw the current date or time, and a few others, but I won’t get into those here. You can find a list of all available variable tags in the “Tag Help” section of any of the custom action creation pages in Drafts.

The above listed tags are extremely important to creating complex workflows with Drafts. In our initial example action, we could change `Hello%20World` to `[[draft]]` in both our first and second actions. Then we could type up a 140 character or less draft and run our Cross Post action on it. The result would be that anything we typed would be tweeted, then posted to App.net. Since we didn’t hard-code the text into the action, we could use that action again and again on any draft we wanted to cross post. In fact, that is exactly what the actual Cross Post action I designed and have had on my site for months does. The code for that action is exactly what we just wrote, except it uses the `[[draft]]` tag. Here it is, completed (the order of Post to App.net and Tweet: the_axx does not matter):

>   
```
drafts://x-callback-url/create?text=[[draft]]&action={{Post to App.net}}&x-success={{drafts://x-callback-url/create?text=[[draft]]&action=Tweet%3A%20the_axx}}
```

We could change `[[draft]]` in either of those actions to `[[title]]` to tweet or post only the first line of our draft, or we could change them to `[[body]]` to tweet or post everything except the first line. I leave it as `[[draft]]` because tweeting and posting to App.net are both pretty straightforward actions, and usually you wouldn’t have any other text before or after the text you want to tweet and post in your draft.

If you wanted to make it a little more interesting, you could change the text for the Post to App.net action to `[[body]]` and the text for the tweet action to `[[title]]`. Then you could type a 140 character version of your post in the first line, and a 256 character version in the second line. Running the action would first post the 140 character version to Twitter, then chain back and post your longer version to App.net, which is less restrictive than Twitter. This is an easy example of the clever ways in which you can use different `[[variable tag]]` combinations to simplify complex processes.

Now that you can understand and write a basic Drafts action URL, chain it to a second action with the x-success parameter and choose what text from your draft is used in the action by picking the proper variable tag, you’re ready to move to the next level.

## Making Drafts Useful

Once you’ve mastered building a Drafts action, and chaining together two actions, the next step is to figure out the best ways in which Drafts can be useful to you, personally. For this, you need to evaluate your workflows. A workflow can be anything you do on your iOS device which involves text and requires more than one step. You’re looking for any possible way that Drafts can eliminate monotonous extra steps that you have to repeat frequently. You’re looking to optimize.

Continuing with our example action, for me Cross Post optimized a fairly simple workflow which I was having to perform often: posting to both Twitter and App.net. Previously, I had to find and open Tweetbot, wait for it to load, press the compose button, type in the tweet, select all the text and copy it, post the tweet, leave [Tweetbot](http://tapbots.com/software/tweetbot/), find and open [Felix](http://tigerbears.com/felix/), wait for it to load, press the compose button, paste in the text and post it. Overall, the process was annoying and overly time-consuming. By creating the Cross Post action, I reduced the workflow to this: open Drafts (I keep it in my dock so I never have to take extra time locating it, or even swipe to a different page), press the plus button for a new draft (if you have Drafts set to create a new draft upon opening, even this step is unnecessary), type my tweet/post, open my action list and press Cross Post. The whole process, not including the time to compose a post, takes about five seconds. This is a workflow I use every day, often multiple times per day.[❲1❳](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/#fn:1)

Where Drafts really shines, however, is when using some of its other types of built-in custom actions to simplify your workflows. Drafts support five types of actions: Dropbox actions, Evernote actions, Email actions, Message actions, and URL actions. We’ve already discussed URL actions, but the other four types of actions can be very useful as well, particularly so when combined with URL actions.

## Dropbox Actions

If you ever upload text files to Dropbox, Drafts has an awesome template system to improve this process on iOS. In each custom action you can specify the path to save the file to, the file name (you can use a time stamp, the first line of the draft or a predefined file name of your choice), the extension, whether to create a new file or append or prepend to an already existing file, and a template for the text you’re uploading. The template can use all of the aforementioned variable tags, as well as other text that you may want to hard-code into each upload to format your file in any way you wish. The file name section can also make use of variable tags, so you can create more complex names, such as combining the first line of your draft with a date or time stamp.

Once you’ve created your Dropbox action, you can type up a draft in the proper format for the template you created and run the action on it to upload the draft to Dropbox exactly as you want it, exactly where you want it. You can create an unlimited number of these actions, each in any way you want.

## Evernote Actions

Evernote actions work in a very similar manner to Dropbox actions. You can specify the title of an Evernote note, the Notebook to place it in, the tags to add to it, whether to create a new note or append or prepend to an existing one, the template for the note, and even whether to send the note as Markdown HTML.[❲2❳](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/#fn:2)

Just as with Dropbox actions, once you’ve created your Evernote action in the way you want it, just run it on a draft properly formatted to fit your template and the note will be automatically sent to Evernote. Also as with Dropbox actions, you can use all `[[variable tags]]` in the template and title fields, and you can make an unlimited number of Evernote actions.

## Email Actions

For custom email actions, you can specify the To, CC, BCC, Subject, and Body areas of your email. As usual, you can use the `[[variable tags]]` to do so, and build an email action any way you want. Just as with Evernote actions, you can send your email as Markdown formatted HTML.

Once you’ve created your action, run it on a properly formatted draft, and that’s it. No limits on how many of these you can build, either.

## Message Actions

Message actions are a bit more simple. You can specify the recipient for the message and the template, using `[[variable tags]]`, to send messages in the format you want to the people you want to.

After creating your action, run it on your properly formatted draft to send it to the specified recipients. You can build as many of these as you want also, although I personally have never found them to be incredibly useful. I prefer to use Launch Center Pro for shortcuts to texting friends.

## URL Actions: The Glue Tying Everything Together

Every type of custom action in Drafts supports x-callback-url. This means that all of them can be chained together in any way you wish. Automating workflows is a quick and easy task once you know the basic Drafts URL scheme. You can take the exact action which we used for Cross Post, but replace `{{Post to App.net}}` and `tweet%3A%20the_axx` with titles of your other custom actions to chain them together instead.[❲3❳](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/#fn:3)

You can also combine the template action types with the original actions we discussed. Perhaps you want to keep an Evernote note or a Dropbox file with a list of all of your tweets or App.net posts. Building a workflow to first post to Twitter or App.net, then append or prepend to a running Dropbox file or Evernote note is as easy as building the custom action template for prepending the file, then chaining that to your tweet or Post to App.net action. As you can see, once you understand the basic layout of Drafts URL actions, chaining any two actions from your action list together is extremely simple.

Getting started with Drafts can be a long process. Once you’ve learned everything I’ve described above, you still have to take the time to evaluate your text-related iOS workflows, figure out which ones can be automated, then build the actions necessary to automate them. Even though this can take quite some time, I find the end result very rewarding.

## Other App URL Schemes, and Adding Them Into Your Workflows

It’s quite likely that some of your workflows will make use of apps which Drafts does not have built in support for. For some of these, automation will simply not be possible. There are, however, a constantly increasing number of apps which also support x-callback-url.[❲4❳](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/#fn:4)

Each app which supports x-callback-url will have a URL scheme that differs from that of Drafts, but as long as you understand the Drafts URL scheme, you should be able to read about and figure out the schemes of the other apps you need for your workflows as well. The majority of them will have the same beginning format: `yourapp://x-callback-url/`. After that, however, they will likely branch off in a different direction from Drafts. You should be able to find the information about your app’s URL scheme through the link above, as long as you are searching for an app which does support x-callback-url.

When adding third party apps into your Drafts workflows, the actions for them will not begin with `drafts://`. You will have to add them as their own custom URL actions, which will use URLs pertaining to the app’s own URL scheme. For example, a popular calendar app, [Fantastical](http://flexibits.com/fantastical-iphone), supports x-callback-url for event creation. You can create an action in your Drafts action list which will send your current draft to Fantastical to be parsed and added as an event. Running the action will launch you out of Drafts and into Fantastical, where it will automatically parse your text. Then you can set up an x-success parameter to take you back to Drafts when the event is created. After running the action, when you’re satisfied with the event and ready to create it, just press the “Add” button in Fantastical. This will add it to your calendar as well as triggering the x-success parameter and sending you back to Drafts.

The Drafts URL action for something like this follows the Fantastical URL scheme instead of the Drafts scheme that we learned earlier. It would look like this:

>   
```
fantastical2://x-callback-url/parse?sentence=[[draft]]&x-success={{drafts://}}
```

Notice that even though we start with Fantastical this time, the layout for the chained action is the exact same as when we linked the two Drafts actions: `[First Action]&x-success={{[Second Action]}}`. This time it just happens that our first action is a Fantastical action instead of a Drafts one.

Here’s the breakdown of the Fantastical action. You’ll notice it is very similar to the Drafts URL scheme, just with some differences in words:

* `fantastical2://` tells iOS to open Fantastical (the “2” was added to the URL scheme for Fantastical 2 because it was released as a whole new app instead of an update to the original Fantastical).
* `x-callback-url/` tells Fantastical to enable its built in x-callback parameters.
* `parse?` tells Fantastical to prepare to parse a new event (the app’s version of the “create?” function from the Drafts URL scheme).
* `sentence=[[draft]]` is a special case. Fantastical cannot understand `[[draft]]`. If you were to run this action through a web browser, Fantastical would create a calendar event out of the text “[[draft]]”, which would be useless. However, we are creating and running this action *from* Drafts. When Drafts sees `[[draft]]` it immediately replaces the tag with the contents of your draft, percent-encoded. So when the URL reaches Fantastical, it would actually be seeing something along the lines of “Meeting on Monday at 10” (assuming you typed a sentence which Fantastical is actually able to parse). It would then take this sentence and parse it into a calendar event titled “Meeting” on the next Monday at 10AM.
* `&x-success=` tells Fantastical that once you tap the “Add” button it will then perform another action.
* `{{drafts://}}` is the action that Fantastical then performs, which in turn tells iOS to launch Drafts, returning you to your original position (the one time x-callback-url is never really used in a URL action is when you are simply trying to open the app and don’t want anything more to happen).

This is the basic manner in which all URL actions work, Drafts or not, as long as they are x-callback actions. Actions for apps without x-callback capabilities are even simpler, as you can remove the x-callback-url and the x-success parameters, leaving only the simple, basic action.

Running third party (non-Drafts) actions through the Drafts action list allows you to make use of the awesome Drafts `[[variable tags]]` for use in the actions. These can become incredibly important when building more advanced workflows that chain together multiple apps.

## Running actions with JavaScript

If any of your workflows necessitate data from web pages, such as URLs, titles of pages or quotes from pages, you can create JavaScript bookmarklets which automatically create a new Draft with this data. I won’t go into detail on this here, as it does require some knowledge of JavaScript, and I’m not teaching that in this article. However, if you are interested, Federico has quite a few examples of this type of workflow in [his old review of Drafts 2.5](http://www.macstories.net/reviews/ios-automation-and-workflows-with-drafts/), and you can also find more [throughout other MacStories articles.](http://www.macstories.net/tag/bookmarklet)

## Tips and Warnings

There are a few errors that I have run into many times while making URL actions, and a few tips I have learned to think about after making them. Hopefully by reading them you can avoid making some of the same mistakes.

When chaining two Drafts actions together, don’t forget the `[First Action]&x-success={{[Second Action]}}` template design. I have often found myself trying to run an action that ends simply with `&x-success=Post%20to%20App.net` or something like that. It always seems foolish when I realize the error, but I still make it every once in a while. When you are chaining together two actions which begin the same way, and differ only in the action title at the end, it’s easy to forget that you still have to declare the beginning part of the URL twice, even though it is completely identical to the first one.

Don’t forget the second set of curly brackets at the back of a chained action. Between typing the first set “{{” and writing out the entire action I want to chain, I often forget to place the second set of brackets “}}” at the very end of my action. When you forget this second set, your action will error out with no explanation, and this can get very confusing when the entire action is written correctly, and the only error is forgetting those last two brackets.

A tip this time. When writing URL actions, think of the “text=” section as a template for your draft. You can use “%0A”, the percent-encoded version of a line break (or pressing the return button once), or “%20”, the percent-encoded version of a space, sandwiched between one [[variable tag]] and some hard coded words to put together a pre-formatted draft after running an action. An example: if every time you post to your blog you then compose a tweet formatted something like “New post: [URL of the post]”, you could design an action in which you simply paste in the URL of your new post and run the action and it automatically composes your tweet in the form of “New post: [[draft]]” where `[[draft]]` would be the URL. For this, the part of your action after “text=” would be `New%20Post%3A%20[[draft]]`. That would be the template for your tweet. One place I use this type of template building frequently is when drawing info from websites through JavaScript bookmarklets. By making your action a template you can create a new draft with the the webpage title in the first line and the URL in the second, or both in the first line but with a space between them, etc. When thinking about your workflows, always look for places where you use the same title or other text every time you do something. These are the things you can hard-code into your actions to save even more time.

When encoding actions, or pieces of actions, you can use tools like [Launch Center Pro](http://contrast.co/launch-center-pro/) to percent-encode, or even decode text. If you don’t want to leave Drafts, and don’t care about decoding, you could also run a quick action in Drafts which makes use of Drafts’ {{curly bracket}} tools to encode things. All you need to do is copy the text you want encoded to your clipboard (preferably cut it to the clipboard, so it’s out of the draft), then run the action to have the contents of the clipboard percent-encoded. This action will preserve all of an open draft, so if you’re building a URL action in your draft, but need a piece encoded, just type out the piece normally, cut it to the clipboard, and run the action. The action will percent-encode the contents of your clipboard, then finish by creating a new draft with the exact contents you had in the old one. After the action runs you can paste the now encoded text where you want it and continue building your action. Here’s the action:

>   
```
drafts://x-callback-url/create?text={{[[clipboard]]}}&action={{Copy to Clipboard}}&x-success={{drafts://x-callback-url/create?text=[[draft]]}}
```

[Direct Import Link for Encode Clipboard action](drafts://x-callback-url/import_action?type=URL&amp;name=Encode%20Clipboard&amp;url=drafts%3A%2F%2Fx-callback-url%2Fcreate%3Ftext%3D%7B%7B%5B%5Bclipboard%5D%5D%7D%7D%26action%3D%7B%7BCopy%20to%20Clipboard%7D%7D%26x-success%3D%7B%7Bdrafts%3A%2F%2Fx-callback-url%2Fcreate%3Ftext%3D%5B%5Bdraft%5D%5D%7D%7D)

When using the `[[line|n]]` tags, don’t forget that Drafts counts each line as any amount of text until a line break. If you have actually written an entire paragraph before hitting return, the `[[line|1]]` variable will be replaced, when the action is run, by that entire paragraph. `[[line|2]]`, in the same manner, takes all of the text between the first and and second line breaks in your draft. The `[[title]]` variable works the same way. In fact, there’s no difference between `[[line|1]]` and `[[title]]`.

The first thing Drafts does when you run an action is replace all variable tags with the corresponding variables. It is important to remember that this happens before anything else. Since all variables are filled in before any piece of your action is run, you cannot change the text of a variable between the first and second actions of a chained action. This is mostly notable in regard to the `[[clipboard]]` tag. A common error is to think that if your first action copies your text to the clipboard, and the action you chained to it utilizes the `[[clipboard]]` variable, then whatever was copied in the first action will be what is used as `[[clipboard]]` in the second action. In reality, Drafts will draw whatever is in your clipboard *before* you run the actions, which can end in a very confusing result when the action completes, having used text from something you were doing earlier which you have no idea how it accessed. This issue can be solved by splitting the action into two different actions. The first action will copy your text to the clipboard, then chain back with x-success to call the second action which uses that new clipboard text. As of Drafts 3.5, however, it’s usually easier to just break up your draft using `[[line|a..b]]` tags instead of copying pieces to the clipboard. In previous versions, when the `[[variable tag]]` possibilities were far more limited, we had to use hacks like putting pieces into the clipboard quite often, but they are mostly no longer necessary. In case you do need it, however, the above can still be helpful. I use it in a few of my more complex and lengthy action sequences.

## Tips and Tricks for Building Expert Workflows

If you’re a beginner, and all you know about iOS automation and building URL schemes is what you just read, you may want to go practice all of that and get the basics down before continuing here. The methods described below can become pretty confusing and difficult to manage correctly.

### Chaining Three or More Actions in One Sequence

Once you’ve mastered chaining together two URL actions, chaining three or more together to begin building some really complex workflows is actually quite easy, you just have to know a few tricks.

The instinct would probably be to add another “&x-success=” onto the back of your two-action chain, with a third action placed behind it. Theoretically this would work, but in practice Drafts gets a bit confused by this, and I’ve never been able to get something like it to work. Even if it would work, it would probably end up being more trouble than it’s worth, as the third action would have to be *triple encoded*, which gets disorienting and is ultimately way too much work.

The best way I’ve found to chain three or more actions is to use groupings of two at a time with a “shell” action to connect them. I’ll use my Triple Cross Post action as an example. Triple Cross Post posts a draft to Twitter and App.net, just like the Cross Post action, but then adds in a third service: posting the same draft to Facebook. The first step to building this action is to break it down into sets of two of the simple, building block actions which we create it from. A triple cross post will use three basic actions: Post to App.net, Tweet: the_axx (it will, once again, need to be changed to your own username to work for you), and Post to Facebook. Grouping them into pairs, we’re left with one pair and one lone action. Now you build an individual action out of the pair. We already built the action earlier in this article, the Cross Post action:

>   
```
drafts://x-callback-url/create?text=[[draft]]&action={{Post to App.net}}&x-success={{drafts://x-callback-url/create?text=[[draft]]&action=Tweet%3A%20the_axx}}
```

Since the second set is only a single action, we don’t need to build a new action out of it. Now we combine our three actions with one “shell” action. The shell is in the same format as any chained action: `[First Action]&x-success={{[Second Action]}}`. This time, however, our second action is already a chained action, we are calling the Cross Post action. Here’s the URL:

>   
```
drafts://x-callback-url/create?text=[[draft]]&action={{Post to Facebook}}&x-success={{drafts://x-callback-url/create?text=[[draft]]&action=Cross%20Post}}
```

When Drafts sees this, it runs the first action normally, posting your draft to Facebook. Once Drafts gets to the second action, the first action ends and it jumps into the Cross Post action: posting your draft to App.net and then Twitter. I think of it as if Drafts is “unwrapping” the second action. Instead of trying to chain three together in one, we just nest a chained action inside of a chained action.

This same strategy can be used to chain more than three actions together as well. Just keep nesting chained actions inside of chained actions. Note that sometimes Drafts has an issue with rushing through actions. That is, if you nest two chained actions in one shell action, it sometimes goes too fast for the first one to unwrap, and skips portions of your action. If you look at my [Drafts Stress Test](http://theaxx.net/drafts-stress-test) actions, you can see that I got around this by using a few more shell actions than would have been necessary in order to never nest more than one double action in another. I connected everything with smaller “continueTest” actions, which just grabbed the `[[draft]]` text and sent it into the next shell. Still, I encourage you to at least attempt nesting two chained actions in one shell if your workflow requires it, as it often does actually work, and would save you time building unnecessary extra actions.[❲5❳](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/#fn:5) I’ve never been able to figure out exactly what causes the bug to occur, but sometimes it does and other times it doesn’t, so you’re stuck with guessing and checking for now.

As you can see, when trying to make long chains like this, things can get very confusing. Obviously, an action chain as huge as my stress test is impractical. I was simply trying to test Drafts’ limits, but you could definitely build some useful chains which, while likely less than twenty five actions, are still more than three. These methods can be useful to remember when your chain does not work for unidentifiable reasons. Sometimes your code is perfect, but you have to work around the app making some mistakes.

### Chopping a Draft

One of the most useful advanced techniques I’ve come up with is what I call “chopping” a draft. This is a process you can use when dealing with lists of data, when you want to perform the same action on different lines of text. Rather than typing each line in an individual draft and manually running the action on them one by one, you can use this technique to automate the process.

My favorite examples of this process in action are my [Import actions](http://unapologetic.io/posts/2013/10/26/the-import-actions/), which can take an infinitely long list of action titles and URLs and automatically import them one by one, and my [Parse In Fantastical Action](http://unapologetic.io/posts/2013/10/28/the-parse-in-fantastical-action/), which can take an infinitely long list of events to parse in Fantastical and automatically parse them one by one.

I’ll use the Parse In Fantastical action for this example, as it’s more useful to a wider audience. The Parse In Fantastical action found in the link above is the simplified version. However, since this is the expert section, and the more complex version better displays the usefulness of chopping your draft, I’ll use it (I never actually posted this version to The Axx or [Unapologetic](http://unapologetic.io/) ). The more complex version of the Parse In Fantastical action not only parses a new event in Fantastical, but also adds a note to the event. To run the action, your list has to have each event and corresponding note placed in pairs of two lines, with a completely blank like between each pair.

In order for Drafts to send a line of text to Fantastical to be parsed, that line must be isolated. We can isolate the first line, our first event, with the `[[line|1]]` tag (or the `[[title]]` tag), and the second line, the note for our first event, with the `[[line|2]]` tag. We can use both of these variables in an action to parse a single event and note in Fantastical. The most important part of the process, however, is to make sure not to lose the thread of the rest of your list. Remember that the `[[line|4..]]` tag in Drafts will take all of the text in a draft from the fourth line to the end. We make use of this to drag the rest of the list along with us as we parse each individual piece. Even though our first action focuses only on the first two lines, we can place `[[line|4..]]` in the chained action so that it is saved even when we jump over to Fantastical.[❲6❳](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/#fn:6) Here is the Parse In Fantastical action, including a notes parameter:

>   
```
fantastical2://x-callback-url/parse?sentence=[[line|1]]&notes=[[line|2]]&x-success={{drafts://x-callback-url/create?text=[[line|4..]]&action=Parse%20In%20Fantastical}}&x-cancel={{drafts://}}
```

As you can see, with the first action in our chain we isolate the first two lines with the [[line|1]] and [[line|2]] tags and send them to Fantastical to be parsed and added as a note. Since Drafts fills in all of the variables at the beginning, we can use the `[[line|4..]]` tag in our second action so that when Fantastical finishes its part and jumps back to Drafts, the rest of our list is waiting for us. I call this process “chopping” because we effectively just chopped the first two lines of our draft out while maintaining the rest of our list. Now, with the x-success parameter, we chain the action back to itself, running “Parse In Fantastical” once again. Since we used `[[line|4..]]`, our new draft has our entire list, starting with the fourth line of the first list, which is the first parameter for our second event. Running the same action now chops the two lines for this second event out, returns to Fantastical and parses them for a second event and note. This process will continue for every pair of items in your list, and since the third line is never used, it just gets left behind entirely each time the action is looped, like it never existed at all.

Dropping that third line is an ability that can be manifested as both an advantage or an error. In this case we utilize our ability to leave a line behind to allow us to have a blank line between each pair of parameters when typing them in Drafts. This makes the data we’re sending to Fantastical much more readable so that we can review it quickly before running the action. On the other hand, you must be very careful when dealing with variable tags line by line, because if you leave a gap between line numbers in your variables that is either in the wrong place or shouldn’t be there at all, you could end up losing data or sending parameters to your actions in the wrong order.

One last thing. You may have noticed that the first Fantastical action includes an x-cancel parameter at the end. This is another one of the x-callback-url parameters. You already know that the x-success parameter allows you to run another action if the first action successfully completes. What x-cancel does is fairly self explanatory as well: it runs another action if the first action is canceled. Being canceled can take a variety of different forms depending on which app you are running an action from. In Fantastical’s case, it’s pretty straightforward: if we press the “Cancel” button on an event instead of the “Add” button, it will run the URL action we have set to the x-cancel parameter, instead of the one set to x-success. Since our action will run indefinitely if we don’t cancel it, this is how the sequence comes to an end. When our list runs out of events, Fantastical will still be opened once more, this time it will just be blank though, because there is no list items to parse. At this point you just hit the cancel button and Fantastical will run the x-cancel action instead of the x-success action. We set x-cancel to `drafts://`, so we will return to Drafts, the loop ended and the workflow completed.

Using this “chopping” strategy, it’s possible to run any type of action you want on any list you want. You just need to make sure your list is formatted properly and that your `[[line|n..]]` tag uses the correct line number so that when you chop the next piece of your draft, the first line is the first parameter you need for your action. With simpler action sequences, you may only need a parameter to draw the first line of your draft. In this case, you could bring the rest of your list along with either the `[[body]]` or `[[line|2..]]` tags, as they both perform the same functions.

This brings us to my next tip, thinking of your chains and sequences as threads.

### Think of Long Action Sequences as a Thread

The best way I can describe how to build action sequences which chain more than three or four actions together, or how to make sure your chopping methods are going to work correctly, is to think of every action sequence as a thread.

In my Drafts Stress Test I chained together 25 actions across 7 apps and 8 services, all using the same text that I started with at the very beginning. Building this massive chain was only possible by imagining it all as a thread. Each time Drafts got to the end of one action and unwrapped the next one, I had to be sure not to lose the thread of my text. The `[[draft]]` variable had to stay the same throughout the entire process. This works similarly with chopping: if your actions are pulling different pieces of text out of the same overall draft, you have to be sure to preserve the main text throughout each action. In the Parse In Fantastical example I used above, we had to make sure each action included `[[line|4..]]` in the x-success parameter so that we didn’t lose the rest of our list as we jumped through actions. This example also displays a possible complication: you have to make completely sure you use all the correct tags to pull the info you want through the thread, because the error of being a single digit off can cause you to lose a vital part of your next action. This error in the batch parse action could result with your notes being set as the event info and the event info being set as the notes, which would waste tons of time instead of saving it like all this is supposed to.

Thinking of your actions as a thread is the best solution I can offer to avoid these possible pitfalls. Laying every action in a sequence you’re building out in a draft so you can read through them before importing and visualize that thread as your text is passed from action to action is the best way to prevent yourself from having critical errors in your workflows.

### Using the “allowEmpty” Paramter

The latest version of Drafts includes an optional “allowEmpty” parameter. You can add “&allowEmpty=NO” to any URL action to stop it from running when it encounters a blank draft. This is primarily of use in regard to stopping infinite loops from continuing when you have chopped out all of your content and reached the end of a Draft. In our Parse In Fantastical action from above, to stop the action once all our events have been added we have to allow Drafts to send us to Fantastical one last time with a blank argument, then manually hit “Cancel” in Fantastical in order to break our loop and return to Drafts. By adding in an allowEmpty parameter we can circumvent this final step by stopping Drafts before it sends the blank argument to Fantastical.

The trick to allowEmpty is knowing where to place it inside of your URL action. It won’t cause an error to place it at the very end after everything else like this:

>   
```
fantastical2://x-callback-url/parse?sentence=[[line|1]]&notes=[[line|2]]&x-success={{drafts://x-callback-url/create?text=[[line|3..]]&action=Parse%20In%20Fantastical}}&x-cancel={{drafts://}}&allowEmpty=NO
```

However, placing it there will still allow Drafts to send you to Fantastical one final time with an empty argument. Instead, place it in the middle, after your now blank draft has been created, but before you run the Parse In Fantastical action on it:

>   
```
fantastical2://x-callback-url/parse?sentence=[[line|1]]&notes=[[line|2]]&x-success={{drafts://x-callback-url/create?text=[[line|3..]]&allowEmpty=NO&action=Parse%20In%20Fantastical}}&x-cancel={{drafts://}}
```

Drafts follows actions step by step, so with this format it will first send your text to Fantastical, then upon successfully creating the event return to Drafts. Next, a new draft will be created using whatever text was left over in the third line of your draft and further. Now Drafts checks to see if there is any text in the draft. If there is, the action chains back to itself and runs again, but as soon as there is no more text remaining, the allowEmpty parameter is triggered, and since it is set to NO, the following action is canceled instead of being run. The sequence ends inside of Drafts without requiring you to hit cancel again in Fantastical.

With allowEmpty, the x-cancel parameter may seem useless, but I would still include it in the action in case you decide to cancel the sequence in the middle before all of the events have been imported. That way you will still end up back in Drafts where you started.

## Conclusion

If I’ve succeeded with this post, and you started reading it with no prior knowledge of building URL actions, you should now know enough to start building your own advanced URL action workflows. It will probably still take some practice to really get the skills down, but I hope you’ve found this to be an excellent place to get up to speed on the subject. You can check out my new website, [Unapologetic](http://unapologetic.io/), and select “Automation” in the view controller at the top to see some interesting actions I’ve posted, all available to be imported directly into your Drafts action list for you to use immediately. Feel free to check back there regularly as well, as I’m posting new actions and workflows each week. You can also [look around here on MacStories](http://www.macstories.net/tag/url-scheme/) for more great actions. Federico is always scattering gems around throughout his posts. If you do import any of our actions, I encourage you to check out the code in your settings in Drafts and make sure you understand how every action you’ve installed actually works. That should help further grow your knowledge of iOS automation with Drafts and URL actions, and give you more examples to run off as you start to create your own.

Now go build something awesome. And I’d love to [hear about it](http://unapologetic.io/contact) when you do.

*Alex Guyot is a writer, web developer, youth leader, soccer player, coffee lover and technology enthusiast from Tucson, Arizona. He blogs and publishes URL actions and iOS automation workflows on his website, Unapologetic.io. In his spare time Alex is a full time student majoring in Computer Science at the University of Arizona. Before you ask, it’s pronounced “Ghee-Oh”.*

[Automating iOS: A Comprehensive Guide to URL Schemes and Drafts Actions](https://www.macstories.net/tutorials/guide-url-scheme-ios-drafts/)

#archive #i