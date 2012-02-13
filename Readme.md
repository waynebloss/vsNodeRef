vsNodeRef
====

vsNodeRef is a set of reference files for [Node.js](http://nodejs.org/) to provide Intellisense data for the Visual Studio text editor.

### How to use

A script reference file is executed by Visual Studio when the file is referenced in an external (dependent) document. The primary reference file (currently named node-v0.6.js) must be referenced before any other node module references.

```javascript
/// <reference path="node-v0.6.js"/>

// Javascript code goes here.

```

References must appear before anything else in the file, even comments or licenses.

See the sub-directories for further details and demos.

### More Info

#### Visual Studio XML Comments Info
- [ScottLogic - VS 2010, vs-doc and Javascript Intellisense](http://www.scottlogic.co.uk/2010/08/vs-2010-vs-doc-and-javascript-intellisense/)
- [TftEE - The format for Javascript doc comments](http://weblogs.asp.net/bleroy/archive/2007/04/23/the-format-for-javascript-doc-comments.aspx)
- [Msdn - How to: Create JScript XML Code Comments](http://msdn.microsoft.com/en-us/library/bb514138.aspx)

#### My notes about Node.js Documentation

https://github.com/joyent/node/blob/master/tools/doctool/doctool.js

https://github.com/joyent/node/tree/master/doc

https://github.com/isaacs/node/tree/json-api-docs/

https://gist.github.com/1776425#comments

https://github.com/isaacs/node/tree/json-api-docs/tools/doc

http://static.izs.me/json-api/ - Isaacs' work in progress.
