---
layout: minimal
---

## Contents ##

 * [jekyll](jekyll.html)
 * [bookmarks](bookmarks.html)

## Next steps ##

 * Figure out what's going on with doiserv, identserv, doirecv

 * How do I get a &#123; into a code block in markdown? If I use the
   code reference, it doesn't get translated. If I use the literal
   character, it doesn't show up.

 * Can I get a "last built" string in my header so I can get some
   feedback about how long builds are lagging?

 * Work out a way to change the layout of all pages in one place
   rather than having to edit each page file.

 * See if brew will install Emacs 24.X so I can use package.el and
   markdown-mode.el

 * Set up for blogging
   * mkdir _posts
   * cp jekyll.md _posts/2016-11-21-understanding-jekyll.md
   * edit blog.md to show a list of blog posts
   * add link to blog.html to index.md

 * Go back to github and generate the other themes so I can have them
   locally and jump around among them.

 * Copy bookmarks from google bookmarks, integrel.org pmwiki page into
   tbarron.github.io/bookmarks.md

 * Add directories and files to this repo describing my various
   projects -- backscratcher, editor, etc. -- and link to them in the
   Contents list above

## Answered Questions, Completed Tasks ##

 * Figure out: Why is jekyll not processing bookmarks.md into bookmarks.html?
   * Apparently it was some kind of caching issue. Now it's working.

 * Learn how to use jekyll and github pages to maintain my personal
   stuff and make integrel.org redundant (ka-ching!)

 * Move stylesheets stuff over to _css
   * mkdir _css
   * cp stylesheets/* _css
   * git add _css; git commit; git push
   * update all references to use _css paths instead of stylesheets paths
   * git rm stylesheets/*
   * git rm stylesheets

   * There's a problem with this: jekyll doesn't copy the _css
     directory down into _site like it does stylesheets. What if I
     call it just 'css', with out the underscore?

   * Yes, that does seem to work.

 * Can I tell jekyll not to process specific files and directories, like attic?
   * Decided to try renaming attic to _attic and that seems to work

 * Rename layout default.html to minimal.html.
   * Copy default.html to minimal.html
   * Change all the content files that use that layout to reference minimal.html
   * Delete default.html

 * How do I tell markdown that I want a link to open in a new tab?
   * Use embedded html in the .md file

 * Is there a way to quickly and easily delete (or archive) all my old
   gmail messages that I don't care about?
   * Yes, and I just did

 * Find out whether there is a markdown mode for emacs.
   * [There is](http://jblevins.org/projects/markdown-mode/), but it
     seems to require emacs 24.1. I'm running 22.1.1.

 * github jekyll is behaving differently from local jekyll. Local
   jekyll is fine with my style sheets in css but github jekyll
   doesn't seem to like that.
   * Well, now it seems to be okay. I guess it just took a few minutes
     to rebuild stuff. And then caching gets in the way... :\
