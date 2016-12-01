---
title: Stuff I Want To Get Done
---

### Next steps ###

 * Fix the issues with doirecv, doisub, doifetch

 * Copy other stuff from [integrel.org](http://integrel.org) into
   tbarron.github.io

 * Jekyll features to explore
   * [post_url](https://jekyllrb.com/docs/templates/\#post-url)
   * [syntax highlighting](https://jekyllrb.com/docs/templates/#code-snippet-highlighting)
     (and line numbering)

 * TWP's [Chronic](https://github.com/mojombo/chronic) provides a large
   list of test cases for a date parser. I could use this list for testing
   dt. Also, dt should be a library with an interface command, not
   functionality baked into an interface command. The interface command
   should be just enough to allow calling the library from the command
   line.

 * Break dt out into a separate project

 * Can I put an .htaccess and .htpasswd file in my github pages repo and
   control access to (some of) the pages that way?
   * No, silly. The repo itself is public, so everyone would be able to see
     the .htpasswd file.
   * Yeah, but the password itself would be encrypted.

 * For each project
   * backscratcher
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * editor
     * <font color='green'>DONE: clone to ~/prj/github</font>
     * <font color='green'>DONE: add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * emacs_goodies
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * envy
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * fns
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * githooks
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * gitr
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * spackle
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>
   * tbx
     * <font color='red'>clone to ~/prj/github</font>
     * <font color='red'>add github pages</font>
     * <font color='red'>write documentation page</font>
     * <font color='red'>write dodo page</font>
     * <font color='red'>update link on tbarron homepage to point at dodo page</font>

 * How do I create an anchor to an internal point in a file like I see on
   TWP's site and in the jekyll docs?

 * Write a test script that uses curl to fetch https://tbarron.github.io
   and then checks all the links it finds. It should also look through the
   _sites directory and report any pages that are not reachable.

 * Features I'd like to see in markdown (that might be worth implementing
   my own markdown parser to get):
   * links with target attribute
     ([Multimarkdown](http://fletcherpenney.net/multimarkdown/) provides
     this)
   * It would be nice to be able to set a file level attribute that would
     inject a target="foo" attribute into every link on the page. I don't
     think multimarkdown can do this.
   * A way to break a long line for readability (e.g., URLs, quotations)
     and have markdown re-assemble the pieces in the output
   * The ability to embed comments that don't get rendered in markdown
     files
     * Well, it looks like markdown actually does support HTML comments but
       each line has to be commented individually. Nice that the emacs
       markdown mode knows to do this when you tell it \M-r with lines
       selected.

 * Incorporate my new markdown processor into jekyll.

 * I have an acceptable work-around, but I'd still like to figure out a way
   to paste in emacs using Command-V rather than an alternate key sequence.
   * Maybe what I want to do is move eval-buffer to \M-v and let \C-v be my
     paste command.

 * Copy the bookmarks I still care about from
   [google bookmarks](https://www.google.com/bookmarks/),
   [integrel.org pmwiki](http://integrel.org/pmwiki/pmwiki.php?n=Tom.Bookmarks)
   page, etc., into tbarron.github.io/bookmarks.md

 [completed](done.html)
