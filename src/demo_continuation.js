/// <reference path="ref/node-v0.6.js"/>

var Stream = require('stream');
var util = require('util');

var st = new Stream();

// Type some code in the continuation functions below and see Intellisense appear
// for the function parameters.

st.on('data', function(bf) {
	/// <param name="bf" type="Buffer"/>
	util.log(bf.toString());

});
st.on('pipe', function(src) {
	/// <param name="src" type="__Node.Stream"/>
	
});
// NOTE: The __Node namespace contains references to all classes exported
// by Node.js and it's built-in modules. This namespace is only for use within
// the param XML comment.