---
layout: minimal
---

## Understanding Jekyll ##

This is the piece of documentation I needed last night to understand
how Jekyll is supposed to work.

What goes in _layouts and _includes and _css (or stylesheets) is
presentation formatting material.

Content goes in markdown (or textile, or whatever) files in the root
of the repository (and for blog entries, in _posts).

Files in _layouts have the structure

    ... <html stuff, perhaps using items from _includes and _css> ...
    \{\{ content \}\}
    ... <more html stuff> ...

Content files (say, content.md) have the structure

    ---
    layout: <layout file name>
    ---
    <markdown syntax>

When jekyll runs, it

 * opens content.md for reading, content.html for writing
 * gets the layout filename from the yaml lines at the top of the file
   (between the '---' lines),
 * writes the material from the layout that precedes "&#123;&#123; content }}",
 * renders the material from the content file from markdown (or whatever) into html,
 * writes the material from the layout that follows "&#123;&#123; content }}",
 * moves on to the next content file.

The material in the layout file can use Liquid references (which looks
to me suspiciously like Jinja syntax) to incorporate and process
content and material from files in _includes and _css.
