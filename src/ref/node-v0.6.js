// ### Global Namespace

var global = (function() {

	// Export values by module name.
	var _exported = {};

	function GlobalNs() {
		/// <summary>The global namespace.</summary>
		/// <field name="__dirname">The name of the directory that the currently executing script resides in.</field>
		/// <field name="__filename">The filename of the code being executed. This is the resolved absolute path of this code file. For a main program this is not necessarily the same filename used in the command line. The value inside a module is the path to that module file.</field>
		/// <field name="Buffer">Used to handle binary data.</field>
		/// <field name="console">Used to print to stdout and stderr.</field>
		/// <field name="exports">An object which is shared between all instances of the current module and made accessible through require(). exports is the same as the module.exports object. See src/node.js for more information. exports isn't actually a global but rather local to each module.</field>
		/// <field name="module">A reference to the current module. In particular module.exports is the same as the exports object. See src/node.js for more information. module isn't actually a global but rather local to each module.</field>
		/// <field name="process">The process object.</field>
		this.__dirname = "";
		this.__filename = "";
		this.Buffer = function() { };
		this.console = {};
		this.exports = {};
		this.module = {};
	}
	GlobalNs.prototype.require = function(path) {
		/// <summary>Loads the given module path.</summary>
		/// <param name="path">Path of the module to load.</param>
		/// <field name="cache">Modules are cached in this object when they are required. By deleting a key value from this object, the next require will reload the module.</field>
		return _exported[path];
	};
	GlobalNs.prototype.require.cache = {};
	GlobalNs.prototype.require.resolve = function() {
		/// <summary>Use the internal require() machinery to look up the location of a module, but rather than loading the module, just return the resolved filename.</summary>
	};
	GlobalNs.prototype.vsdoc = function(path, getExportsFn) {
		/// <summary>Allows Visual Studio reference documentation to be saved for the given path.</summary>
		/// <param name="path">Path key that may be used to load the module.</param>
		/// <param name="getExportsFn">Function that returns the modules export structure with Visual Studio documentation.</param>
		_exported[path] = getExportsFn();
	};
	GlobalNs.prototype.vsal = function(path, alias) {
		/// <summary>Allows the given path to be referenced by the given alias.</summary>
		/// <param name="path">The target path string.</param>
		/// <param name="alias">The alias path string.</param>
		_exported[alias] = _exported[path];
	}

	return new GlobalNs();
})();

// ### Global Variables.

var __dirname = global.__dirname;
var __filename = global.__filename;
var cache = global.cache;
var console = global.console;
var exports = global.exports;
var module = global.module;

// ### Global Functions.

var require = global.require;

// The __Node namespace will contain a reference to every class constructor from
// every Node.js built-in module. These class references can be used in param
// XML comment elements as the value of the type attribute in closures or
// continuation functions. e.g. <param name="connection" type="__Node.Socket"/>
//
var __Node = {};

// ### Modules in order of least-dependent-first.

global.vsdoc('events', function() {

	function EventEmitter() {
		/// <summary>EventEmitter class.</summary>
	}
	EventEmitter.prototype.addListener = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.</summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
		return this;
	};
	EventEmitter.prototype.emit = function(event, args) {
		/// <summary>Execute each of the listeners in order with the supplied arguments.</summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="args" mayBeNull="true" optional="true">(Optional) One or more arguments to pass to the event handlers.</param>
	};
	EventEmitter.prototype.listeners = function(event) {
		/// <summary>Returns an array of listeners for the specified event. This array can be manipulated, e.g. to remove listeners.</summary>
		/// <param name="event">Name of the event.</param>
	};
	EventEmitter.prototype.on = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.
		/// <para>newListener(event, listener): This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
		return this;
	};
	EventEmitter.prototype.once = function(event, listener) {
		/// <summary>Adds a one time listener for the event. This listener is invoked only the next time the event is fired, after which it is removed.</summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
	};
	EventEmitter.prototype.removeListener = function(event, listener) {
		/// <summary>Remove a listener from the listener array for the specified event. Caution: changes array indices in the listener array behind the listener.</summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function to remove.</param>
	};
	EventEmitter.prototype.removeAllListeners = function(event) {
		/// <summary>Removes all listeners, or those of the specified event.</summary>
		/// <param name="event" optional="true">(Optional) Name of the event.</param>
	};
	EventEmitter.prototype.setMaxListeners = function(n) {
		/// <summary>By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.</summary>
		/// <param name="n">The maximum number to set.</param>
	};

	__Node.EventEmitter = EventEmitter;

	return {
		EventEmitter: EventEmitter
	};
});

global.vsdoc('util', function() {

	function Util() {
		/// <summary>Standard Utilities Library.</summary>
	}
	Util.prototype.debug = function(message) {
		/// <summary>A synchronous output function. Will block the process and output the given message immediately to stderr.</summary>
		/// <param name="message">The message to output to stderr.</param>
		return this;
	};
	Util.prototype.error = function(argsN) {
		/// <summary>Writes the arguments to stderr, appending a newline to each one.</summary>
		/// <param name="argsN" optional="true">(Optional) Arguments to write to stderr.</param>
	};
	Util.prototype.format = function(template, argsN) {
		/// <summary>Returns a formatted string using the first argument as a printf-like format.</summary>
		/// <param name="template">A string that contains zero or more placeholders.</param>
		/// <param name="argsN" optional="true">(Optional) One or more arguments that are applied to a placeholder.</param>
		return "";
	};
	Util.prototype.inspect = function(object, showHidden, dept, colors) {
		/// <summary>Return a string representation of object which is useful for debugging.</summary>
		/// <param name="object">The object to inspect.</param>
		/// <param name="showHidden">If showHidden is true, then the object's non-enumerable properties will be shown too. Defaults to false.</param>
		/// <param name="depth">If depth is provided, it tells inspect how many times to recurse while formatting the object. This is useful for inspecting large complicated objects.
		/// The default is to only recurse twice. To make it recurse indefinitely, pass in null for depth.</param>
		/// <param name="colors">If colors is true, the output will be styled with ANSI color codes. Defaults to false.</param>
		return {};
	};
	Util.prototype.isArray = function(object) {
		/// <summary>Returns true if the given "object" is an Array. false otherwise.</summary>
		/// <param name="object">The object to check.</param>
		return true;
	};
	Util.prototype.isDate = function(object) {
		/// <summary>Returns true if the given "object" is a Date. false otherwise.</summary>
		/// <param name="object">The object to check.</param>
		return true;
	};
	Util.prototype.isError = function(object) {
		/// <summary>Returns true if the given "object" is an Error. false otherwise.</summary>
		/// <param name="object">The object to check.</param>
		return true;
	};
	Util.prototype.isRegExp = function(object) {
		/// <summary>Returns true if the given "object" is a RegExp. false otherwise.</summary>
		/// <param name="object">The object to check.</param>
		return true;
	};
	Util.prototype.inherits = function(ctor, superCtor) {
		/// <summary>Inherit the prototype methods from one constructor into another. The prototype of constructor will be set to a new object created from superConstructor.</summary>
		/// <param name="ctor">The constructor to modify.</param>
		/// <param name="superCtor">The super constructor to inherit.</param>
		ctor.super_ = superCtor;
		// Simply copy each member. Do not overwrite the ctor's prototype because
		// Visual Studio uses that to identify where to pull the "field"
		// documentation tags from.
		for (var member in superCtor.prototype) {
			ctor.prototype[member] = superCtor.prototype[member];
		}

		return ctor;
	};
	Util.prototype.log = function(message) {
		/// <summary>Output with timestamp on stdout.</summary>
		/// <param name="message">The message to output.</param>
		return this;
	};
	Util.prototype.pump = function(readableStream, writableStream, callback) {
		/// <summary>(Experimental) Read the data from readableStream and send it to the writableStream. When writableStream.write(data) returns false readableStream will be paused until the drain event occurs on the writableStream. callback gets an error as its only argument and is called when writableStream is closed or when an error occurs.</summary>
		/// <param name="readableStream">The stream to read from.</param>
		/// <param name="writableStream">The stream to write to.</param>
		/// <param name="callback" optional="true">(Optional) Called with an error as its only argument and is called when writableStream is closed or when an error occurs.</param>
		return this;
	};
	Util.prototype.puts = function(argsN) {
		/// <summary>Writes each argument to stdout, appending a newline to each one.</summary>
		/// <param name="argsN" optional="true">(Optional) Arguments to write to stdout.</param>
	};
	Util.prototype.print = function(argsN) {
		/// <summary>Writes the given arguments to stdout.</summary>
		/// <param name="argsN" optional="true">(Optional) Arguments to write to stdout.</param>
	};

	return new Util();
});

global.vsdoc('stream', function() {

	var EventEmitter = require('events').EventEmitter;
	var util = require('util');

	function Stream() {
		/// <summary>A stream is an abstract interface implemented by various objects in Node. For example a request to an HTTP server is a stream, as is stdout. Streams are readable, writable, or both. All streams are instances of EventEmitter.</summary>
		/// <field name="readable">A boolean that is true by default, but turns false after an 'error' occurred, the stream came to an 'end', or destroy() was called.</field>
		/// <field name="writable">A boolean that is true by default, but turns false after an 'error' occurred or end() / destroy() was called.</field>
		this.readable = true;
		this.writable = true;
	}
	util.inherits(Stream, EventEmitter);
	Stream.prototype.destroy = function(callback) {
		/// <summary>Closes the underlying file descriptor. Stream will not emit any more events. Any queued write data will not be sent.</summary>
		/// <param name="callback">Error callback function.</param>
	};
	Stream.prototype.destroySoon = function() {
		/// <summary>After the write queue is drained, close the file descriptor. After the write queue is drained, close the file descriptor. destroySoon() can still destroy straight away, as long as there is no data left in the queue for writes.</summary>
	};
	Stream.prototype.pause = function() {
		/// <summary>Pauses the incoming 'data' events.</summary>
	};
	Stream.prototype.resume = function() {
		/// <summary>Resumes the incoming 'data' events after a pause.</summary>
	};
	Stream.prototype.setEncoding = function(encoding) {
		/// <summary>Makes the data event emit a string instead of a Buffer. encoding can be 'utf8', 'ascii', or 'base64'.</summary>
		/// <param name="encoding">One of 'utf8', 'ascii', or 'base64'.</param>
	};
	Stream.prototype.pipe = function(destination, options) {
		/// <summary>Connects this read stream to destination WriteStream. Incoming data on this stream gets written to destination. The destination and source streams are kept in sync by pausing and resuming as necessary.</summary>
		/// <returns type="Stream" />
		return this;
	};
	Stream.prototype.write = function(stringOrBuffer, encoding, fd, callback) {
		/// <summary>Writes to the stream. Returns true if the string has been flushed to the kernel buffer. Returns false to indicate that the kernel buffer is full, and the data will be sent out in the future. The 'drain' event will indicate when the kernel buffer is empty again.</summary>
		/// <param name="stringOrBuffer">A string or a buffer. If a string, the given encoding is applied.</param>
		/// <param name="encoding" optional="true">(Optional) One of 'utf8', 'ascii', or 'base64'. Defaults to 'utf8'.</param>
		/// <param name="fd" optional="true">(Optional) Interpreted as an integral file descriptor to be sent over the stream. This is only supported for UNIX streams, and is silently ignored otherwise. When writing a file descriptor in this manner, closing the descriptor before the stream drains risks sending an invalid (closed) FD.</param>
		/// <param name="callback">Callback function(err, data).</param>
		return false;
	};
	Stream.prototype.end = function(stringOrBuffer, encoding, callback) {
		/// <summary>Terminates the stream with EOF or FIN. This call will allow queued write data to be sent before closing the stream.</summary>
		/// <param name="stringOrBuffer" optional="true">(Optional) Data to send before the EOF or FIN termination. This is useful to reduce the number of packets sent.</param>
		/// <param name="encoding" optional="true">(Optional) One of 'utf8', 'ascii', or 'base64'. Required if first argument is a string.</param>
		/// <param name="callback" optional="true">(Optional) Callback function(err, data).</param>
	};
	Stream.prototype.on = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.
		/// <para>close(): Emitted when the underlying file descriptor has been closed. Not all streams will emit this.</para>
		/// <para>data(data): Emits either a Buffer (by default) or a string if setEncoding() was used.</para>
		/// <para>drain(): After a write() method returned false, this event is emitted to indicate that it is safe to write again.</para>
		/// <para>end(): Emitted when the stream has received an EOF (FIN in TCP terminology). Indicates that no more 'data' events will happen. If the stream is also writable, it may be possible to continue writing.</para>
		/// <para>error(exception): Emitted if there was an error.</para>
		/// <para>pipe(src): Emitted when the stream is passed to a readable stream's pipe method.</para>
		/// <para>newListener(event, listener): This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
	};

	__Node.Stream = Stream;

	return Stream;
});

global.process = (function() {

	var EventEmitter = require('events').EventEmitter;
	var util = require('util');

	function Process() {
		/// <summary>The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.</summary>
		/// <field name="stdout">A writeable stream.</field>
		var Stream = require('stream');
		this.stdout = new Stream();
	}
	util.inherits(Process, EventEmitter);
	Process.prototype.on = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.
		/// <para>exit(): Emitted when the process is about to exit.</para>
		/// <para>newListener(event, listener): This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
		return this;
	};

	return new Process();
})();

var process = global.process;

global.vsdoc('assert', function() {

	function _assert(value, message) {
		/// <summary>Tests if value is a true value, it is equivalent to assert.equal(true, value, message);</summary>
		/// <param name="value">The value to test.</param>
		/// <param name="message">Failure message.</param>
	}
	_assert.ok = _assert;
	_assert.equal = function(actual, expected, message) {
		/// <summary>Tests shallow, coercive equality with the equal comparison operator ( == ).</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert.fail = function(actual, expected, message, operator, stackStartFunction) {
		/// <summary>Throws an exception that displays the values for actual and expected separated by the provided operator.</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
		/// <param name="operator" optional="true">(Optional) Operator being used.</param>
		/// <param name="stackStartFunction" optional="true">(Optional) Function where the stack starts.</param>
	};
	_assert.notEqual = function(actual, expected, message) {
		/// <summary>Tests shallow, coercive non-equality with the not equal comparison operator ( != ).</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert.deepEqual = function(actual, expected, message) {
		/// <summary>Tests for deep equality.</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert.notDeepEqual = function(actual, expected, message) {
		/// <summary>Tests for any deep inequality.</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert.strictEqual = function(actual, expected, message) {
		/// <summary>Tests strict equality, as determined by the strict equality operator ( === ).</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert['throws'] = function(block, error, message) {
		/// <summary>Expects block to throw an error.</summary>
		/// <param name="block">The block of code or function.</param>
		/// <param name="error">Constructor, regexp or validation function(err).</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert.doesNotThrow = function(block, error, message) {
		/// <summary>Expects block not to throw an error, see assert.throws for details.</summary>
		/// <param name="block">The block of code or function.</param>
		/// <param name="error">Constructor, regexp or validation function(err).</param>
		/// <param name="message" optional="true">(Optional) Failure message.</param>
	};
	_assert.ifError = function(value) {
		/// <summary>Tests if value is not a false value, throws if it is a true value. Useful when testing the first argument, error in callbacks.</summary>
	}

	return _assert;
});

global.vsdoc('buffer', function() {

	function Buffer(sizeOrArrayOrString, encoding, offset) {
		/// <summary>A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. A Buffer cannot be resized.
		/// <para>buffer[index]: Get and set the octet at index. The values refer to individual bytes, so the legal range is between 0x00 and 0xFF hex or 0 and 255.</para>
		/// <para>Buffer.INSPECT_MAX_BYTES: How many bytes will be returned when buffer.inspect() is called. This can be overridden by user modules.</para>
		/// <para>Buffer.poolSize: Size of the buffer pool.</para></summary>
		/// <param name="sizeOrArrayOrString">If numeric (size), allocates a new buffer of size octets. If Array or String, allocates a new buffer using an array of octets or string.</param>
		/// <param name="encoding" optional="true">(Optional) One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Default value is 'utf8'. Used if first argument is a string.</param>
		/// <param name="offset" optional="true">(Optional) Numeric offset into the source sizeOrArrayOrString.</param>
		/// <field name="length">The size of the buffer in bytes. Note that this is not necessarily the size of the contents. length refers to the amount of memory allocated for the buffer object. It does not change when the contents of the buffer are changed.</field>
		this.length = 0;
	}
	Buffer.isBuffer = function(obj) {
		/// <summary>Tests if obj is a Buffer.</summary>
		/// <param name="obj">The object to test.</param>
		/// <returns>True, if obj is a Buffer.</returns>
		return false;
	};
	Buffer.byteLength = function(string, encoding) {
		/// <summary>Gives the actual byte length of a string. This is not the same as String.prototype.length since that returns the number of characters in a string.</summary>
		/// <param name="string">The string to analyze.</param>
		/// <param name="encoding" optional="true">(Optional) Encoding to use. One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Defaults to 'utf8'.</param>
		/// <returns type="Number" integer="true">The actualy byte length of the string.</returns>
		return 0;
	};
	Buffer.poolSize = 8 * 1024;
	Buffer.INSPECT_MAX_BYTES = 50;
	Buffer.prototype.write = function(string, offset, length, encoding) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset" optional="true">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length" optional="true">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <param name="encoding" optional="true">(Optional) Encoding to use. One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Defaults to 'utf8'.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return 0;
	};
	Buffer.prototype.toString = function(encoding, start, end) {
		/// <summary>Decodes and returns a string from buffer data encoded with encoding (defaults to 'utf8') beginning at start (defaults to 0) and ending at end (defaults to buffer.length).</summary>
		/// <param name="encoding" optional="true">(Optional) Encoding to use. One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Defaults to 'utf8'.</param>
		/// <param name="start" optional="true">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end" optional="true">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="String">A string.</returns>
		return "";
	};
	Buffer.prototype.fill = function(value, offset, end) {
		/// <summary>Fills the buffer with the specified value. If the offset and end are not given it will fill the entire buffer.</summary>
		/// <param name="value">Description</param>
		/// <param name="offset" optional="true">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end" optional="true">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Number" integer="true">The number of bytes filled.</returns>
		return 0;
	};
	Buffer.prototype.copy = function(target, target_start, start, end) {
		/// <summary>Does copy between buffers. The source and target regions can be overlapped.</summary>
		/// <param name="target">The target buffer.</param>
		/// <param name="target_start" optional="true">(Optional) Index to start at in the target buffer. Defaults to zero.</param>
		/// <param name="start" optional="true">(Optional) Index to start at in the source buffer. Defaults to zero.</param>
		/// <param name="target_end" optional="true">(Optional) Index to end at in the source buffer. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return new Buffer('');
	};
	Buffer.prototype.slice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		/// </summary>
		/// <param name="start" optional="true">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end" optional="true">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return new Buffer('');
	};
	Buffer.prototype.utf8Slice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		///     <para>WARNING: Legacy method for backwards compatibility.</para>
		/// </summary>
		/// <param name="start" optional="true">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end" optional="true">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return this.toString('utf8', start, end);
	};
	Buffer.prototype.binarySlice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		///     <para>WARNING: Legacy method for backwards compatibility.</para>
		/// </summary>
		/// <param name="start" optional="true">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end" optional="true">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return this.toString('binary', start, end);
	};
	Buffer.prototype.asciiSlice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		///     <para>WARNING: Legacy method for backwards compatibility.</para>
		/// </summary>
		/// <param name="start" optional="true">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end" optional="true">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return this.toString('ascii', start, end);
	};
	Buffer.prototype.utf8Write = function(string, offset) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset" optional="true">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length" optional="true">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return this.write(string, offset, 'utf8');
	};
	Buffer.prototype.binaryWrite = function(string, offset) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset" optional="true">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length" optional="true">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return this.write(string, offset, 'binary');
	};
	Buffer.prototype.asciiWrite = function(string, offset) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset" optional="true">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length" optional="true">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return this.write(string, offset, 'ascii');
	};
	Buffer.prototype.readUInt8 = function(offset, noAssert) {
		/// <summary>Reads an unsigned 8 bit integer from the buffer at the specified offset.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
	};
	Buffer.prototype.readUInt16LE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readUInt16BE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readUInt32LE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readUInt32BE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt8 = function(offset, noAssert) {
		/// <summary>Reads a signed 8 bit integer from the buffer at the specified offset. Works as buffer.readUInt8, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt16LE = function(offset, noAssert) {
		/// <summary>Reads a signed 16 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt16*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt16BE = function(offset, noAssert) {
		/// <summary>Reads a signed 16 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt16*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt32LE = function(offset, noAssert) {
		/// <summary>Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt32*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt32BE = function(offset, noAssert) {
		/// <summary>Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt32*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readFloatLE = function(offset, noAssert) {
		/// <summary>Reads a 32 bit float from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readFloatBE = function(offset, noAssert) {
		/// <summary>Reads a 32 bit float from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readDoubleLE = function(offset, noAssert) {
		/// <summary>Reads a 64 bit double from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readDoubleBE = function(offset, noAssert) {
		/// <summary>Reads a 64 bit double from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset. Note, value must be a valid unsigned 8 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset. Note, value must be a valid signed 8 bit integer. Works as buffer.writeUInt8, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer. Works as buffer.writeUInt16*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer. Works as buffer.writeUInt16*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer. Works as buffer.writeUInt32*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer. Works as buffer.writeUInt32*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 32 bit float.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 32 bit float.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 64 bit double.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 64 bit double.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert" optional="true">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};

	__Node.Buffer = Buffer;

	return {
		Buffer: Buffer,
		INSPECT_MAX_BYTES: 50,
		SlowBuffer: Buffer
	};
});

var Buffer = require('buffer').Buffer;

global.vsdoc('timers', function() {

	function Timer() {
		/// <summary>Timer object (id).</summary>
	}

	return {
		active: function(item) {
			/// <summary>Mark the given item as active within the global timer. Call whenever the item is not idle.</summary>
			/// <param name="item">The item to activate.</param>
		},
		enroll: function(item, idleTimeout) {
			/// <summary>Enrolls the given item with the global timer.</summary>
			/// <param name="item">The item to enroll.</param>
			/// <param name="itemTimeout">Time (in milliseconds) to wait before marking the item as idle.</param>
		},
		unenroll: function(item) {
			/// <summary>Unenrolls the given item from the global timer.</summary>
			/// <param name="item">The item to unenroll.</param>
		},
		setTimeout: function(callback, delay, argsN) {
			/// <summary>Schedules execution of a one-time callback.
			///     <para>It is important to note that your callback will probably not be called in exactly delay milliseconds - Node.js makes no guarantees about the exact timing of when the callback will fire, nor of the ordering things will fire in. The callback will be called as close as possible to the time specified.</para>
			/// </summary>
			/// <param name="callback">Function that will be called upon the timeout.</param>
			/// <param name="delay">Number of milliseconds before the timeout occurs.</param>
			/// <param name="argsN" optional="true">(Optional) Arguments to pass to the callback.</param>
			/// <returns>Returns a timer object, for possible use with clearTimeout().</returns>
			if (arguments.length > 2)
				callback.call(null, Array.prototype.slice.call(arguments, 2));
			else
				callback.call(null);
			return new Timer();
		},
		clearTimeout: function(timeoutId) {
			/// <summary>Attempts to prevent a timeout from triggering.</summary>
			/// <param name="timeoutId">The timer to clear.</param>
		},
		setInterval: function(callback, delay, argsN) {
			/// <summary>To schedule the repeated execution of callback every delay milliseconds.</summary>
			/// <param name="callback">Function that will be called upon the timeout.</param>
			/// <param name="delay">Number of milliseconds before the timeout occurs.</param>
			/// <param name="argsN" optional="true">(Optional) Arguments to pass to the callback.</param>
			/// <returns>Returns a timeoutId for possible use with clearInterval().</returns>
			if (arguments.length > 2)
				callback.call(null, Array.prototype.slice.call(arguments, 2));
			else
				callback.call(null);
			return new Timer();
		},
		clearInterval: function(intervalId) {
			/// <summary>Stops a interval from triggering.</summary>
			/// <param name="intervalId">The timer to clear.</param>
		}
	};
});

var setTimeout = require('timers').setTimeout;
var clearTimeout = require('timers').clearTimeout;
var setInterval = require('timers').setInterval;
var clearInterval = require('timers').clearInterval;

global.vsdoc('net', function() {

	var Stream = require('stream');
	var EventEmitter = require('events').EventEmitter;
	var util = require('util');

	function Socket(options) {
		/// <summary>Socket class. This object is an abstraction of a TCP or UNIX socket. net.Socket instances implement a duplex Stream interface. They can be created by the user and used as a client (with connect()) or they can be created by Node and passed to the user through the 'connection' event of a server.</summary>
		/// <param name="options">Socket options.</param>
		/// <field name="bufferSize" type="Number" integer="true">Size of the socket's buffer.</field>
		/// <field name="bytesRead" type="Number" integer="true">The count of bytes received.</field>
		/// <field name="bytesWritten" type="Number" integer="true">The count of bytes sent.</field>
		/// <field name="readyState" type="String">Ready state of the socket.</field>
		/// <field name="remoteAddress" type="String">The string representation of the remote IP address. For example, '74.125.127.100' or '2001:4860:a005::68'.</field>
		/// <field name="remotePort" type="Number" integer="true">The numeric representation of the remote port. For example, 80 or 21.</field>this.bufferSize = 0;
		this.bufferSize = 0;
		this.bytesRead = 0;
		this.bytesWritten = 0;
		this.readyState = 'closed';
		this.remoteAddress = '';
		this.remotePort = 0;
	}
	util.inherits(Socket, Stream);
	Socket.prototype.address = function() {
		/// <summary>Returns the bound address and port of the socket as reported by the operating system.
		///     <para>Returns an object with two properties, e.g. {"address":"192.168.57.1", "port":62053}</para>
		/// </summary>
		return { address: "192.168.57.1", port: 62053 };
	};
	Socket.prototype.connect = function(portOrPath, host, connectListener) {
		/// <summary>Opens the connection for a given socket. If port and host are given, then the socket will be opened as a TCP socket, if host is omitted, localhost will be assumed. If a path is given, the socket will be opened as a unix socket to that path.
		///     <para>Normally this method is not needed, as net.createConnection opens the socket. Use this only if you are implementing a custom Socket or if a Socket is closed and you want to reuse it to connect to another server.</para>
		///     <para>This function is asynchronous. When the 'connect' event is emitted the socket is established. If there is a problem connecting, the 'connect' event will not be emitted, the 'error' event will be emitted with the exception.</para>
		/// </summary>
		/// <param name="host" optional="true">(Optional) </param>
		/// <param name="connectListener">The connectListener function(Socket connection) will be added as an listener for the 'connect' event.</param>
		return this;
	};
	Socket.prototype.listen = function() {
		/// <summary>Starts the socket listening.</summary>
	};
	Socket.prototype.on = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.
		/// <para>timeout(): Emitted if the socket times out from inactivity. This is only to notify that the socket has been idle. The user must manually close the connection.</para>
		/// <para>connect(): Emitted when a socket connection is successfully established. See connect().</para>
		/// <para>close(had_error): Emitted once the socket is fully closed. The argument had_error is a boolean which says if the socket was closed due to a transmission error.</para>
		/// <para>data(data): Emits either a Buffer (by default) or a string if setEncoding() was used.</para>
		/// <para>drain(): Emitted when the write buffer becomes empty. Can be used to throttle uploads. See also: the return values of socket.write()</para>
		/// <para>end(): Emitted when the other end of the socket sends a FIN packet.</para>
		/// <para>    By default (allowHalfOpen == false) the socket will destroy its file descriptor once it has written out its pending write queue. However, by setting allowHalfOpen == true the socket will not automatically end() its side allowing the user to write arbitrary amounts of data, with the caveat that the user is required to end() their side now.</para>
		/// <para>error(exception): Emitted when an error occurs. The 'close' event will be called directly following this event.</para>
		/// <para>pipe(src): Emitted when the stream is passed to a readable stream's pipe method.</para>
		/// <para>newListener(event, listener): This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
	};
	Socket.prototype.setKeepAlive = function(enable, initialDelay) {
		/// <summary>Enable/disable keep-alive functionality, and optionally set the initial delay before the first keepalive probe is sent on an idle socket.</summary>
		/// <param name="enable">Specifies if keepAlive should be on. Defaults to false.</param>
		/// <param name="initialDelay">Delay in milliseconds between the last data packet received and the first keepalive probe. Setting 0 will leave the value unchanged from the default (or previous) setting.
		///     <para>Defaults to 0.</para>
		/// </param>
	};
	Socket.prototype.setNoDelay = function(noDelay) {
		/// <summary>Disables the Nagle algorithm. By default TCP connections use the Nagle algorithm, they buffer data before sending it off. Setting true for noDelay will immediately fire off data each time socket.write() is called.</summary>
		/// <param name="noDelay" optional="true">Specifies if noDelay is on. Defaults to true.</param>
	};
	Socket.prototype.setTimeout = function(timeout, callback) {
		/// <summary>Sets the socket to timeout after timeout milliseconds of inactivity on the socket. By default net.Socket do not have a timeout.
		///     <para>When an idle timeout is triggered the socket will receive a 'timeout' event but the connection will not be severed. The user must manually end() or destroy() the socket.</para>
		/// </summary>
		/// <param name="timeout">The timeout in milliseconds.</param>
		/// <param name="callback" optional="true">(Optional) Callback function, a one time listener for the 'timeout' event.</param>
	};
	Socket.prototype.write = function(data, encoding, callback) {
		/// <summary>Sends data on the socket. Returns true if the entire data was flushed successfully to the kernel buffer. Returns false if all or part of the data was queued in user memory. 'drain' will be emitted when the buffer is again free.</summary>
		/// <param name="data">A string or a buffer. If a string, the given encoding is applied.</param>
		/// <param name="encoding" optional="true">(Optional) One of 'utf8', 'ascii', or 'base64'. Defaults to 'utf8'.</param>
		/// <param name="callback" optional="true">(Optional) Callback function(err, data). Will be executed when the data is finally written out - this may not be immediately.</param>
	};

	function Server(options, listener) {
		/// <summary>This class is used to create a TCP or UNIX server. A server is a net.Socket that can listen for new incoming connections.</summary>
		/// <param name="options" optional="true">(Optional) An object with the following defaults: {allowHalfOpen: false}
		///     <para>If allowHalfOpen is true, then the socket won't automatically send FIN packet when the other end of the socket sends a FIN packet. The socket becomes non-readable, but still writable. You should call the end() method explicitly. See 'end' event for more information.</para>
		/// </param>
		/// <param name="listener" optional="true">(Optional) Callback function(Socket connection) which is added as an listener for the 'connect' event.</param>
		/// <field name="connections" type="Number" integer="true">The number of concurrent connections on the server.</field>
		/// <field name="maxConnections" type="Number" integer="true">Set this property to reject connections when the server's connection count gets high.</field>
		this.connections = 0;
		this.maxConnections = 0;
	}
	util.inherits(Server, EventEmitter);
	Server.prototype.address = function() {
		/// <summary>Returns the bound address and port of the socket as reported by the operating system.
		///     <para>Returns an object with two properties, e.g. {"address":"192.168.57.1", "port":62053}</para>
		/// </summary>
		return { address: "192.168.57.1", port: 62053 };
	};
	Server.prototype.close = function() {
		/// <summary>Stops the server from accepting new connections. This function is asynchronous, the server is finally closed when the server emits a 'close' event.</summary>
		return this;
	};
	Server.prototype.listen = function(portOrPath, host, listeningListener) {
		/// <summary>Begin accepting connections on the specified port and host.
		///     <para>If a path is given instead of port, starts a UNIX socket server listening for connections on the given path.</para>
		///     <para>If the host is omitted, the server will accept connections directed to any IPv4 address (INADDR_ANY). A port value of zero will assign a random port.</para>
		///     <para>This function is asynchronous. When the server has been bound, 'listening' event will be emitted. the last parameter listeningListener will be added as an listener for the 'listening' event.</para>
		///     <para>One issue some users run into is getting EADDRINUSE errors. This means that another server is already running on the requested port. One way of handling this would be to wait a second and then try again. This can be done with</para>
		/// </summary>
		/// <param name="portOrPath">Remote port or UNIX file path.</param>
		/// <param name="host" optional="true">(Optional) Remote host address.</param>
		/// <param name="listeningListener" optional="true">(Optional) Handler function assigned to the 'listening' event.</param>
	};
	Server.prototype.on = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.
		/// <para>listening(): Emitted when the server has been bound after calling server.listen.</para>
		/// <para>connection(socket): Emitted when a new connection is made. socket is an instance of net.Socket.</para>
		/// <para>close(): Emitted when the server closes.</para>
		/// <para>error(exception): Emitted when an error occurs. The 'close' event will be called directly following this event. See example in discussion of server.listen.</para>
		/// <para>newListener(event, listener): This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
		return this;
	};

	__Node.Socket = Socket;
	__Node.Server = Server;

	return {
		createServer: function(options, connectionListener) {
			/// <summary>Creates a new TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.</summary>
			/// <param name="options" optional="true">(Optional) An object with the following defaults: {allowHalfOpen: false}
			///     <para>If allowHalfOpen is true, then the socket won't automatically send FIN packet when the other end of the socket sends a FIN packet. The socket becomes non-readable, but still writable. You should call the end() method explicitly. See 'end' event for more information.</para>
			/// </param>
			/// <param name="connectionListener" optional="true">(Optional) Callback function(Socket connection) that is called on every new connection.</param>
			/// <returns type="Server">A server object.</returns>
			return new Server(options, connectionListener);
		},
		connect: function(portOrPath, host, connectListener) {
			/// <summary>Construct a new socket object and opens a socket to the given location. When the socket is established the 'connect' event will be emitted.
			///     <para>If a path is given instead of port, starts a UNIX socket server listening for connections on the given path.</para>
			/// </summary>
			/// <param name="portOrPath">Remote port or UNIX file path.</param>
			/// <param name="host" optional="true">(Optional) Remote host name or ip.</param>
			/// <param name="connectListener" optional="true">(Optional) Listener function assigned to the 'connect' event.</param>
			/// <returns type="Socket">A new Socket.</returns>
			return new Socket(null);
		},
		createConnection: function(portOrPath, host, connectListener) {
			/// <summary>Construct a new socket object and opens a socket to the given location. When the socket is established the 'connect' event will be emitted.
			///     <para>If a path is given instead of port, starts a UNIX socket server listening for connections on the given path.</para>
			/// </summary>
			/// <param name="portOrPath">Remote port or UNIX file path.</param>
			/// <param name="host" optional="true">(Optional) Remote host name or ip.</param>
			/// <param name="connectListener" optional="true">(Optional) Listener function assigned to the 'connect' event.</param>
			/// <returns type="Socket">A new Socket.</returns>
			return new Socket(null);
		},
		isIP: function(input) {
			/// <summary>Tests if input is an IP address. Returns 0 for invalid strings, returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.</summary>
			/// <param name="input">The input value to test.</param>
			return true;
		},
		isIPv4: function(input) {
			/// <summary>Returns true if input is a version 4 IP address, otherwise returns false.</summary>
			/// <param name="input">The input value to test.</param>
			return true;
		},
		isIPv6: function(input) {
			/// <summary>Returns true if input is a version 6 IP address, otherwise returns false.</summary>
			/// <param name="input">The input value to test.</param>
			return true;
		},
		Socket: Socket,
		Stream: Socket,
		Server: Server
	};
});

global.vsdoc('child_process', function() {

	var EventEmitter = require('events').EventEmitter;
	var util = require('util');
	var Stream = require('stream');

	function ChildProcess() {
		/// <summary>Node provides a tri-directional popen(3) facility through the ChildProcess class.
		///     <para>It is possible to stream data through the child's stdin, stdout, and stderr in a fully non-blocking way.</para>
		///     <para>To create a child process use require('child_process').spawn().</para>
		///     <para>Child processes always have three streams associated with them. child.stdin, child.stdout, and child.stderr.</para>
		///     <para>ChildProcess is an EventEmitter.</para>
		/// </summary>
		/// <field name="pid" type="Number" integer="true">The PID of the child process.</field>
		/// <field name="stderr" type="Stream">A Readable Stream that represents the child process's stderr.</field>
		/// <field name="stdin" type="Stream">A Writable Stream that represents the child process's stdin. Closing this stream via end() often causes the child process to terminate.</field>
		/// <field name="stdout" type="Stream">A Readable Stream that represents the child process's stdout.</field>
		this.pid = 0;
		this.stderr = new Stream();
		this.stdin = new Stream();
		this.stdout = new Stream();
	}
	util.inherits(ChildProcess, EventEmitter);
	ChildProcess.prototype.exec = function(command, options, callback) {
		/// <summary>Runs a command in a shell and buffers the output.</summary>
		/// <param name="options" optional="true">(Optional) Additional options. Defaults to: { encoding: 'utf8', timeout: 0, maxBuffer: 200*1024, killSignal: 'SIGTERM', cwd: null, env: null }.</param>
		/// <param name="callback">Callback function(error, stdout, stderr) that will be called after execution begins.</param>
		return new ChildProcess();
	};
	ChildProcess.prototype.execFile = function(file, args, options, callback) {
		/// <summary>This is similar to child_process.exec() except it does not execute a subshell but rather the specified file directly. This makes it slightly leaner than child_process.exec. It has the same options.</summary>
		/// <param name="file">Path to the file to execute.</param>
		/// <param name="args" optional="true">(Optional) Arguments to pass to the file. Defaults to an empty Array.</param>
		/// <param name="options" optional="true">(Optional) Additional options. Defaults to: { encoding: 'utf8', timeout: 0, maxBuffer: 200*1024, killSignal: 'SIGTERM', cwd: null, env: null }.</param>
		/// <param name="callback">Callback function(error, stdout, stderr) that will be called after execution begins.</param>
		return new ChildProcess();
	};
	ChildProcess.prototype.fork = function(modulePath, args, options) {
		/// <summary>This is a special case of the spawn() functionality for spawning Node processes. In addition to having all the methods in a normal ChildProcess instance, the returned object has a communication channel built-in. The channel is written to with child.send(message, [sendHandle]) and messages are received by a 'message' event on the child.</summary>
		/// <param name="modulePath">Path of the module to execute.</param>
		/// <param name="args" optional="true">(Optional) Arguments to pass to the command.</param>
		/// <param name="options" optional="true">(Optional) Additional options.</param>
		return new ChildProcess();
	};
	ChildProcess.prototype.kill = function(signal) {
		/// <summary>Send a signal to the child process. If no argument is given, the process will be sent 'SIGTERM'. See signal(7) for a list of available signals.</summary>
		/// <param name="signal">(Optional) Defaults to 'SIGTERM'.</param>
	};
	ChildProcess.prototype.on = function(event, listener) {
		/// <summary>Adds a listener to the end of the listeners array for the specified event.
		/// <para>exit(code, signal): This event is emitted after the child process ends. If the process terminated normally, code is the final exit code of the process, otherwise null. If the process terminated due to receipt of a signal, signal is the string name of the signal, otherwise null. See waitpid(2).</para>
		/// <para>newListener(event, listener): This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
		return this;
	};
	ChildProcess.prototype.spawn = function(command, args, options) {
		/// <summary>Launches a new process with the given command, with command line arguments in args.</summary>
		/// <param name="command">The command to execute.</param>
		/// <param name="args" optional="true">(Optional) Arguments to pass to the command. Defaults to an empty Array.</param>
		/// <param name="options" optional="true">(Optional) Additional options, defaults to: {cwd: undefined, env: process.env, setsid: false}.</param>
		return new ChildProcess();
	};

	__Node.ChildProcess = ChildProcess;

	return {
		fork: function(modulePath, args, options) {
			/// <summary>This is a special case of the spawn() functionality for spawning Node processes. In addition to having all the methods in a normal ChildProcess instance, the returned object has a communication channel built-in. The channel is written to with child.send(message, [sendHandle]) and messages are received by a 'message' event on the child.</summary>
			/// <param name="modulePath">Path of the module to execute.</param>
			/// <param name="args" optional="true">(Optional) Arguments to pass to the command.</param>
			/// <param name="options" optional="true">(Optional) Additional options.</param>
			return new ChildProcess();
		},
		exec: function(command, options, callback) {
			/// <summary>Runs a command in a shell and buffers the output.</summary>
			/// <param name="options" optional="true">(Optional) Additional options. Defaults to: { encoding: 'utf8', timeout: 0, maxBuffer: 200*1024, killSignal: 'SIGTERM', cwd: null, env: null }.</param>
			/// <param name="callback">Callback function(error, stdout, stderr) that will be called after execution begins.</param>
			return new ChildProcess();
		},
		execFile: function(file, args, options, callback) {
			/// <summary>This is similar to child_process.exec() except it does not execute a subshell but rather the specified file directly. This makes it slightly leaner than child_process.exec. It has the same options.</summary>
			/// <param name="file">Path to the file to execute.</param>
			/// <param name="args" optional="true">(Optional) Arguments to pass to the file. Defaults to an empty Array.</param>
			/// <param name="options" optional="true">(Optional) Additional options. Defaults to: { encoding: 'utf8', timeout: 0, maxBuffer: 200*1024, killSignal: 'SIGTERM', cwd: null, env: null }.</param>
			/// <param name="callback">Callback function(error, stdout, stderr) that will be called after execution begins.</param>
			return new ChildProcess();
		},
		spawn: function(command, args, options) {
			/// <summary>Launches a new process with the given command, with command line arguments in args.</summary>
			/// <param name="command">The command to execute.</param>
			/// <param name="args" optional="true">(Optional) Arguments to pass to the command. Defaults to an empty Array.</param>
			/// <param name="options" optional="true">(Optional) Additional options, defaults to: {cwd: undefined, env: process.env, setsid: false}.</param>
			return new ChildProcess();
		}
	};
});