---
title: Answered Questions, Completed Tasks
---

 * Pasting in emacs 25 is messed up. Every time I paste, the cursor jumps
   to the top of the page and the pasted material winds up someplace I
   don't want it AND it gets mangled. Need to figure this out. I suspect
   some obscure (to me) setting that I need to tweak.
   * I have found a solution (more or less). Ideally, I'd like to be able
     to paste with Command-V, like I do in the shell or other contexts.
     However, that's what is messed up. The more-or-less solution is an
     emacs lisp function I wrote based on information from [this
     post](http://stackoverflow.com/questions/9985316/how-to-paste-to-emacs-from-clipboard-on-osx)
     on StackOverflow. I have bound key sequence \M-v to the function, so
     that's how I'm pasting for now. I didn't want to use \C-v because I've
     had it bound to eval-buffer for some time and don't want to change it.
     [2016-11-28 07:05:41]

 * I use \C-v to scroll down the buffer, so I need to take it back off
   osx-paste.
   * Remove \C-v from osx-paste.
   * Pick another key binding for osx-paste.
   * Pick a key binding for delete-trailing-whitespace.
     [2016-11-26 19:11:50]

 * Figure out a way to add a "last update" time stamp in the footer so the
   date of the last update to the content file (not the footer file) shows
   up [2016-11-24 20:14:53]

 * Move answered questions and completed tasks to a new page named
   done.md (-> done.html) [2016-11-24 20:13:20]

 * Go back to github and generate the other themes so I can have them
   locally and jump around among them. [2016-11-24 20:12:47]

 * Learn about drafts in jekyll
   * I decided that to keep a file unpublished, I just won't add it to git.
     [2016-11-24 19:43:29]

 * Can I tag blog posts in jekyll?
   * Yes, jekyll provides some basic tagging.
     [This](https://jekyllrb.com/docs/variables/) talks about the variable
     page.tags but it looks like you have to do some work (or find somebody
     else's code that does whatever it is that you want) to use them.
     [2016-11-24 19:42:27]

 * Can jekyll handle comments?
   * Actually, the relevant tech is markdown. And it turns out that emacs'
     markdown mode will block comment and uncomment in a way that works for
     markdown (by commenting each line individually). [2016-11-24 16:47:48]

 * Maybe what I really want is to put this list in README.md so it shows up
   near the top of github.com/tbarron/tbarron.github.io and the actual site
   tbarron.github.io is cleaner.
   * Well, that doesn't seem to be working out very well either. I think I
     want the list of action items in DODO.md so they get processed into
     DODO.html and I can link to them there. README.md should be a static
     "about" page that doesn't change a whole lot. That will resolve the
     next task, about getting the "next steps" link to resolve differently
     when it's local and when it's remote.
     [2016-11-24 07:20:03]

 * When I'm on the local mirror, I'd like "next steps" to take me to a
   rendered version of README.md (README.html?). When I'm on the remote
   site (tbarron.github.io), I'd like "next steps" to take me to
   https://github.com/tbarron/tbarron.github.io/blob/master/README.md. Is
   this possible?
   * Actually, this is way too complicated. That should be a clue that I'm
     doing something wrong. It's much simpler to put the list of next steps
     in DODO.md and let them get rendered to DODO.html. That way, they can
     be referenced easily and consistently whether we're local or remote.
     [2016-11-24 07:20:03]

 * Add directories and files to this repo describing my various
   projects -- backscratcher, editor, etc. -- and link to them in the
   Contents list above (I've added some empty [2016-11-24 06:25:09]

 * Do I want this list of things to do on this page or off on a page
   by itself?
   * No, I like it on the front page like this. [2016-11-24 06:05:59]

 * Figure out what's going on with doiserv, identserv, doirecv
   * Figured it out. Now I'm working on fixing it.

 * Set up for blogging
   * mkdir _posts
   * cp jekyll.md _posts/2016-11-21-understanding-jekyll.md
   * edit blog.md to show a list of blog posts
   * add link to blog.html to index.md

 * With emacs 25.1, I was able to set up the package installer and use it
   to install markdown-mode.

 * See if brew will install Emacs 24.X so I can use package.el and
   markdown-mode.el
   * Actually, it gave me Emacs 25.1.1 in 3 minutes, 59 seconds

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

 * Can I get a "last built" string in my header so I can get some
   feedback about how long builds are lagging?

 * How do I get a &#123; into a code block in markdown? If I use the
   code reference, it doesn't get translated. If I use the literal
   character, it doesn't show up.
   * The solution was the {% raw %} ... {% endraw %} syntax

 * github jekyll is behaving differently from local jekyll. Local
   jekyll is fine with my style sheets in css but github jekyll
   doesn't seem to like that.
   * Well, now it seems to be okay. I guess it just took a few minutes
     to rebuild stuff. And then caching gets in the way... :\

 * Find out whether there is a markdown mode for emacs.
   * [There is](http://jblevins.org/projects/markdown-mode/), but it
     seems to require emacs 24.1. I'm running 22.1.1.

 * Is there a way to quickly and easily delete (or archive) all my old
   gmail messages that I don't care about?
   * Yes, and I just did

 * How do I tell markdown that I want a link to open in a new tab?
   * Use embedded html in the .md file

 * Rename layout default.html to minimal.html.
   * Copy default.html to minimal.html
   * Change all the content files that use that layout to reference minimal.html
   * Delete default.html

 * Can I tell jekyll not to process specific files and directories, like attic?
   * Decided to try renaming attic to _attic and that seems to work

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

 * Learn how to use jekyll and github pages to maintain my personal
   stuff and make integrel.org redundant (ka-ching!)

 * Figure out: Why is jekyll not processing bookmarks.md into bookmarks.html?
   * Apparently it was some kind of caching issue. Now it's working.

  * I'd like to change the title of the front page. Will jekyll let me do that?

  * I want jekyll to build index.html from, say index.md. Can we do that?
