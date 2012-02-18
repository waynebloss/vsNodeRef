/// <reference path="ref/node-v0.6.js"/>

// NOTE: Reference xml must appear before anything else.
//
// The primary Node.js reference file (node-v0.6.js) will contain Intellisense
// meta-data for all Node.js globals and all Node.js built-in modules. Edit this
// file with any edition of Visual Studio 2008/2010 to see the result.
//
// Available Node.js Globals:
// - Buffer, global, process, require
//
// Available Node.js Built-In Modules:
// - events, util, stream, assert, buffer, timers, net
//
// Known Issues:
// - Intellisense comment documentation not shown for for Node.js globals with names
// that conflict with browser globals that are pre-defined in the Visual Studio
// environment. For instance, setTimeout, clearTimeout, etc. However, the proper
// Node.js parameters are shown for the new functions in those cases.
//
// - Intellisense comment documentation not shown for Node.js global fields. These
// globals are listed properly and their members are listed properly, but the 
// summary or other XML comment documentation is not shown like usual for them.
//
var util = require('util');
util.log('Hello, World? Are you there? It\'s me, Node.js.');

