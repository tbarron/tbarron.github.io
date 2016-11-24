---
---
## Contents ##

 * [jekyll](jekyll.html)
 * [bookmarks](bookmarks.html)
 * [backscratcher (placeholder linking back to this page)](index.html)
 * [editor (placeholder linking back to this page)](index.html)
 * [emacs_goodies (placeholder linking back to this page)](index.html)
 * [envy (placeholder linking back to this page)](index.html)
 * ...

## Next steps ##

 * Figure out what's going on with doiserv, identserv, doirecv

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
   Contents list above (I've added some empty

 * Move answered questions and completed tasks to a new page named
   done.md (-> done.html)

 * Do I want this list of things to do on this page or off on a page
   by itself?

 * Read about jekyll's post_url tag at https://jekyllrb.com/docs/templates/\#post-url

 * Pasting in emacs is messed up. Every time I paste, the cursor jumps to
   the top of the page and the pasted material winds up someplace I don't
   want it AND it gets mangled. Need to figure this out.

 * ...

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

 * How do I get a &#123; into a code block in markdown? If I use the
   code reference, it doesn't get translated. If I use the literal
   character, it doesn't show up.
   * The solution was the {% raw %} ... {% endraw %} syntax

 * Can I get a "last built" string in my header so I can get some
   feedback about how long builds are lagging?

 * Work out a way to change the layout of all pages in one place
   rather than having to edit each page file.
   * This involved creating a _config.yml and setting the default
     layout there. However, I also had to remove the explicit layout
     setting from each content file (but we have to keep the empty
     front matter section so jekyll knows to process the file). I also
     created a straw man layout called 'unset.html' to have a B to
     test the A (minimal) against so I can flip the layout back and
     forth and see the change. I have to restart the local test server
     for it to see updates to _config.yml since jekyll just reads the
     config once at startup. However, with the server at github, I
     just push the site and the change shows up.

 * See if brew will install Emacs 24.X so I can use package.el and
   markdown-mode.el
   * Actually, it gave me Emacs 25.1.1 in 3 minutes, 59 seconds

 * With emacs 25.1, I was able to set up the package installer and use it
   to install markdown-mode.