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
// The __Node namespace will contain a reference to every class constructor from
// every Node.js built-in module. These class references can be used in param
// XML comment elements as the value of the type attribute in closures or
// continuation functions. e.g. <param name="connection" type="__Node.Socket"/>