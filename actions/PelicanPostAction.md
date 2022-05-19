# Pelican Post Action
- [**Drafts Directory**](https://directory.getdrafts.com/a/2AE)
- [GitHub Issue](https://github.com/extratone/drafts/issues/62)
  
## Description

Generate a Pelican-ready Markdown post file with options. By default, the “Summary” metadata field is populated with text selected in the editor at action run.


```
Title: [display_title]
Date: [created|%Y-%m-%d %R]
Modified: [modified|%Y-%m-%d %R]
Category: [pelicancat]
Tags: [tags]
Slug: [pelicanslug]
Authors: [byline_text]
Summary: [selection_only]

[body]
---
[Local]([draft_open_url])
```