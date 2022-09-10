/**
 * Write Posts
 *
 * An example of how to use the admin API to write posts from HTML, with 3 different options available.
 * Most of this code is copied direct from our docs.
 *
 * To run me:
 *
 * 1. Replace "YOUR_ADMIN_API_KEY" below with your admin key (and edit the URL if you're not using localhost)
 * 2. Make sure the example you want to test is uncommented
 * 3. Run `node ./write-posts.js`
 */

// The admin API client is the easiest way to use the API
const GhostAdminAPI = require('@tryghost/admin-api');

// Configure the client
const api = new GhostAdminAPI({
    url: 'https://crud-magazine.ghost.io',
    // @TODO: edit your key here
    key: '631b514882eafd003d0dddd7:a14cfd19595934d7d5c85d5ef96206aecc079dec44dba7bea3d726b2da9396bb',
    version: 'v3'
});

/**
 * HTML variable
 * HTML can come from anywhere - copy and paste, read from a file, convert from MarkDown or other formats etc
 * Note: This HTML is the top part of the migrations page from the docs: https://ghost.org/docs/api/v3/migration/
 */

var html = '<p>Migrations between platforms are difficult, so we\'ve compiled a list of resources about migrating to Ghost</p><p>Ghost imports from existing blogs via a custom JSON data format, described below. The import and export tools can be found on the \'labs\' page in Ghost settings. The importer will accept either a JSON file, or a zip file containing a JSON file and the related images.</p><h2 id="existing-plugins" style="position: relative;"><a href="#existing-plugins" aria-label="existing plugins permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Existing Plugins</h2><h3 id="official" style="position: relative;"><a href="#official" aria-label="official permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Official</h3><p><strong>WordPress</strong> users can use the official <a href="https://wordpress.org/plugins/ghost/" target="_blank" rel="nofollow noopener noreferrer">Ghost WordPress Plugin</a> to export content into a Ghost-compatible zip file that can be imported directly in Ghost Admin. Check out <a href="/tutorials/wordpress-to-ghost/">our WordPress migration guide</a> for more information.</p><h3 id="non-official" style="position: relative;"><a href="#non-official" aria-label="non official permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Non-official</h3><ul><li><strong>Jekyll</strong> users can try the <a href="https://github.com/mekomlusa/Jekyll-to-Ghost" target="_blank" rel="nofollow noopener noreferrer">Jekyll to Ghost Plugin</a></li><li><strong>Blogger</strong> users can try <a href="https://github.com/jessehouwing/Blogger2Ghost" target="_blank" rel="nofollow noopener noreferrer">Blogger2Ghost.NET</a></li><li><strong>Open-source geeks</strong> may consider importing READMEs from all of their Github repositories as regular posts using <a href="https://github.com/RReverser/gh2ost" target="_blank" rel="nofollow noopener noreferrer">gh2ost</a> tool.</li><li><strong>Tumblr</strong> users can try <a href="https://github.com/jpadilla/tumblr-to-ghost" target="_blank" rel="nofollow noopener noreferrer">Tumblr to Ghost</a></li><li><strong>Brave people</strong> can try <a href="https://github.com/ageitgey/medium_to_ghost" target="_blank" rel="nofollow noopener noreferrer">Medium to Ghost</a></li></ul><h3 id="importing-the-json" style="position: relative;"><a href="#importing-the-json" aria-label="importing the json permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing the JSON</h3><p>Once you\'ve generated the JSON go to the Labs Menu (<code class="language-text">/ghost/settings/labs/</code>) on your blog to access the import form.</p><h3 id="importing-images" style="position: relative;"><a href="#importing-images" aria-label="importing images permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing Images</h3><p>Ghost can import images within the provided zip. The images need to be located in a folder called <code class="language-text">content/images</code>.</p><hr><h2 id="rolling-your-own" style="position: relative;"><a href="#rolling-your-own" aria-label="rolling your own permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rolling your own</h2><p>If no export tools exist for your current blogging system you\'ll need to create one that generates a JSON file as described here. There is a full example at the end of this file. Please note that your final JSON file should have no comments in the final format. Those are only included here for readability and explanatory purposes.</p><h3 id="json-file-structure" style="position: relative;"><a href="#json-file-structure" aria-label="json file structure permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSON file structure</h3><p>First and foremost, your JSON file must contain valid JSON. You can test your file is valid using the <a href="https://jsonlint.com/" target="_blank" rel="nofollow noopener noreferrer">JSONLint</a> online tool.</p><p>The file structure can optionally be wrapped in:</p><div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span><span class="token property">"db"</span><span class="token operator">:</span> <span class="token punctuation">[</span>...contents here...<span class="token punctuation">]</span><span class="token punctuation">}</span></code></pre></div><p>Both with and without are valid Ghost JSON files. But you must include a <code class="language-text">meta</code> and a <code class="language-text">data</code> object.</p><h3 id="the-meta-object" style="position: relative;"><a href="#the-meta-object" aria-label="the meta object permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The meta object</h3><div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json"><span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"exported_on"</span><span class="token operator">:</span><span class="token number">1408552443891</span><span class="token punctuation">,</span><span class="token property">"version"</span><span class="token operator">:</span><span class="token string">"2.14.0"</span><span class="token punctuation">}</span></code></pre></div><p>The <code class="language-text">meta</code> block expects two keys, <code class="language-text">exported_on</code> and <code class="language-text">version</code>. <code class="language-text">exported_on</code> should be an epoch timestamp in milliseconds, version should be the Ghost version the import is valid for.</p><h3 id="the-data-block" style="position: relative;"><a href="#the-data-block" aria-label="the data block permalink" class="anchor before"><svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The data block</h3><p>Ghost\'s JSON format mirrors the underlying database structure, rather than the API, as it allows you to override fields that the API would ignore.</p>';

/**
 * Option 1 - Raw HTML
 * --------------------
 * Tell the API to convert HTML to mobiledoc, using source=html
 * The API's conversion from HTML to mobiledoc is not perfect - it's "lossy" - may lose some content, e.g. videos
 * This conversion is constantly being improved to support more and more HTML.
 */

api.posts.add({
    title: 'Migrating to Ghost - raw HTML',
    html: html
}, {source: 'html'})
    .then(response => console.log(response))
    .catch(error => console.error(error));

/**
 * Option 2 - HTML Card
 * ---------------------
 * Wrapping HTML in an HTML Card means it is left untouched by the API - no loss.
 * However, this makes for a poor editing experience. It's useful for old content that isn't edited often
 */

// api.posts.add({
//     title: 'Migrating to Ghost - HTML card',
//     mobiledoc: JSON.stringify({
//         version: '0.3.1',
//         markups: [],
//         atoms: [],
//         cards: [['html', {cardName: 'html', html: html}]],
//         sections: [[10, 0]]
//     })
// })
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

/**
 * Option 3 - Extend the HTML -> Mobiledoc converter
 * ---------------------
 * Ghost's HTML -> Mobildoc converter is a JavaScript Library
 * https://github.com/TryGhost/Ghost-SDK/tree/master/packages/html-to-mobiledoc
 * It can be used directly to convert HTML to Mobiledoc before sending to the API
 * It supports plugins, which allow you to modify the HTML as it is being parsed.
 * This is tricky, but extremely powerful.
 */

/**
 * Extra Example:
 * --------------
 * Read all formats for a post from the admin API. Doesn't matter if the post is a draft or published
 */

// api.posts.read({id: 'ID GOES HERE'}, {formats: 'mobiledoc,html,plaintext'})
//     .then(response => console.log(response))
//     .catch(error => console.error(error));