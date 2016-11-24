---
title: Stuff I Want To Get Done
---

### Next steps ###

 * Fix the issues with doirecv, doisub, doifetch

 * Can jekyll handle comments?

 * Go back to github and generate the other themes so I can have them
   locally and jump around among them.

 * Copy bookmarks from
   [google bookmarks](https://www.google.com/bookmarks/),
   [integrel.org pmwiki](http://integrel.org/pmwiki/pmwiki.php?n=Tom.Bookmarks)
   page into tbarron.github.io/bookmarks.md

 * Features I'd like to see in markdown (that might be worth implementing
   my own markdown parser to get):
   * links with target attribute
     ([Multimarkdown](http://fletcherpenney.net/multimarkdown/) provides
     this)
   * It would be nice to be able to set a file level attribute that would
     inject a target="foo" attribute into every link on the page. I don't
     think multimarkdown can do this.
   * The ability to embed comments that don't get rendered in markdown
     files
     * Well, it looks like markdown actually does support HTML comments but
       each line has to be commented individually. Nice that the emacs
       markdown mode knows to do this when you tell it \M-r with lines
       selected.

 * Incorporate my new markdown processor into jekyll.

 * Move answered questions and completed tasks to a new page named
   done.md (-> done.html)

 * Read about jekyll's post_url tag at
   https://jekyllrb.com/docs/templates/\#post-url

 * Pasting in emacs 25 is messed up. Every time I paste, the cursor jumps
   to the top of the page and the pasted material winds up someplace I
   don't want it AND it gets mangled. Need to figure this out. I suspect
   some obscure (to me) setting that I need to tweak.

 * TWP's [Chronic](https://github.com/mojombo/chronic) provides a large
   list of test cases for a date parser. I could use this list for testing
   dt. Also, dt should be a library with an interface command, not
   functionality baked into an interface command. The interface command
   should be just enough to allow calling the library from the command
   line.

 * Add github pages to backscratcher

 * Add github pages to editor

 * Add github pages to emacs_goodies

 * Add github pages to envy

 * Add github pages to fns

 * Add github pages to githooks

 * Add github pages to gitr

 * Add github pages to spackle

 * Add github pages to tbx

 * Can I tag blog posts in jekyll?

 * Learn about drafts in jekyll

 * How do I create an anchor to an internal point in a file like I see on
   TWP's site and in the jekyll docs?

 * Figure out a way to add a "last update" time stamp in the footer so the
   date of the last update to the content file (not the footer file) shows
   up

 * Write a test script that uses curl to fetch https://tbarron.github.io
   and then checks all the links it finds. It should also look through the
   _sites directory and report any pages that are not reachable.

 [completed](done.html)
