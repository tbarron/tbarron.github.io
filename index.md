---
layout: default
---

## Contents ##

 * [jekyll](jekyll.html)
 * [bookmarks](bookmarks.html)

## Next steps ##

 * Figure out what's going on with doiserv, identserv, doirecv

 * Move stylesheets stuff over to _css
   * mkdir _css
   * cp stylesheets/* _css
   * git add _css; git commit; git push
   * update all references to use _css paths instead of stylesheets paths
   * git rm stylesheets/*
   * git rm stylesheets

 * Rename layout default.html to minimal.html.
   * Copy default.html to minimal.html
   * Change all the content files that use that layout to reference minimal.html
   * Delete default.html

 * Go back to github and generate the other themes so I can have them
   locally and jump around among them.

 * Find out whether there is a markdown mode for emacs.

 * How do I get a &#123; into a code block in markdown? If I use the
   code reference, it doesn't get translated. If I use the literal
   character, it doesn't show up.

## Answered Questions, Completed Tasks ##

 * Figure out: Why is jekyll not processing bookmarks.md into bookmarks.html?
   * Apparently it was some kind of caching issue. Now it's working.

 * Learn how to use jekyll and github pages to maintain my personal
   stuff and make integrel.org redundant (ka-ching!)
