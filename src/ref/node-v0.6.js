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
		/// <param name="args" mayBeNull="true">(optional) One or more arguments to pass to the event handlers.</param>
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
		/// <param name="event">(optional) Name of the event.</param>
	};
	EventEmitter.prototype.setMaxListeners = function(n) {
		/// <summary>By default EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.</summary>
		/// <param name="n">The maximum number to set.</param>
	};
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
		/// <param name="argsN">(Optional) Arguments to write to stderr.</param>
	};
	Util.prototype.format = function(template, argsN) {
		/// <summary>Returns a formatted string using the first argument as a printf-like format.</summary>
		/// <param name="template">A string that contains zero or more placeholders.</param>
		/// <param name="argsN">(Optional) One or more arguments that are applied to a placeholder.</param>
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
		/// <param name="callback">(Optional) Called with an error as its only argument and is called when writableStream is closed or when an error occurs.</param>
		return this;
	};
	Util.prototype.puts = function(argsN) {
		/// <summary>Writes each argument to stdout, appending a newline to each one.</summary>
		/// <param name="argsN">(Optional) Arguments to write to stdout.</param>
	};
	Util.prototype.print = function(argsN) {
		/// <summary>Writes the given arguments to stdout.</summary>
		/// <param name="argsN">(Optional) Arguments to write to stdout.</param>
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
		/// <param name="encoding">(Optional) One of 'utf8', 'ascii', or 'base64'. Defaults to 'utf8'.</param>
		/// <param name="fd">(Optional) Interpreted as an integral file descriptor to be sent over the stream. This is only supported for UNIX streams, and is silently ignored otherwise. When writing a file descriptor in this manner, closing the descriptor before the stream drains risks sending an invalid (closed) FD.</param>
		/// <param name="callback">Callback function(err, data).</param>
		return false;
	};
	Stream.prototype.end = function(stringOrBuffer, encoding, callback) {
		/// <summary>Terminates the stream with EOF or FIN. This call will allow queued write data to be sent before closing the stream.</summary>
		/// <param name="stringOrBuffer">(Optional) Data to send before the EOF or FIN termination. This is useful to reduce the number of packets sent.</param>
		/// <param name="encoding">(Optional) One of 'utf8', 'ascii', or 'base64'. Required if first argument is a string.</param>
		/// <param name="callback">(Optional) Callback function(err, data).</param>
	};
	util.inherits(Stream, EventEmitter);
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
		/// <param name="message">(Optional) Failure message.</param>
	};
	_assert.fail = function(actual, expected, message, operator, stackStartFunction) {
		/// <summary>Throws an exception that displays the values for actual and expected separated by the provided operator.</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message">(Optional) Failure message.</param>
		/// <param name="operator">(Optional) Operator being used.</param>
		/// <param name="stackStartFunction">(Optional) Function where the stack starts.</param>
	};
	_assert.notEqual = function(actual, expected, message) {
		/// <summary>Tests shallow, coercive non-equality with the not equal comparison operator ( != ).</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message">(Optional) Failure message.</param>
	};
	_assert.deepEqual = function(actual, expected, message) {
		/// <summary>Tests for deep equality.</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message">(Optional) Failure message.</param>
	};
	_assert.notDeepEqual = function(actual, expected, message) {
		/// <summary>Tests for any deep inequality.</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message">(Optional) Failure message.</param>
	};
	_assert.strictEqual = function(actual, expected, message) {
		/// <summary>Tests strict equality, as determined by the strict equality operator ( === ).</summary>
		/// <param name="actual">Actual value.</param>
		/// <param name="expected">Expected value.</param>
		/// <param name="message">(Optional) Failure message.</param>
	};
	_assert['throws'] = function(block, error, message) {
		/// <summary>Expects block to throw an error.</summary>
		/// <param name="block">The block of code or function.</param>
		/// <param name="error">Constructor, regexp or validation function(err).</param>
		/// <param name="message">(Optional) Failure message.</param>
	};
	_assert.doesNotThrow = function(block, error, message) {
		/// <summary>Expects block not to throw an error, see assert.throws for details.</summary>
		/// <param name="block">The block of code or function.</param>
		/// <param name="error">Constructor, regexp or validation function(err).</param>
		/// <param name="message">(Optional) Failure message.</param>
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
		/// <param name="encoding">(Optional) One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Default value is 'utf8'. Used if first argument is a string.</param>
		/// <param name="offset">(Optional) Numeric offset into the source sizeOrArrayOrString.</param>
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
		/// <param name="encoding">(Optional) Encoding to use. One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Defaults to 'utf8'.</param>
		/// <returns type="Number" integer="true">The actualy byte length of the string.</returns>
		return 0;
	};
	Buffer.poolSize = 8 * 1024;
	Buffer.INSPECT_MAX_BYTES = 50;
	Buffer.prototype.write = function(string, offset, length, encoding) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <param name="encoding">(Optional) Encoding to use. One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Defaults to 'utf8'.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return 0;
	};
	Buffer.prototype.toString = function(encoding, start, end) {
		/// <summary>Decodes and returns a string from buffer data encoded with encoding (defaults to 'utf8') beginning at start (defaults to 0) and ending at end (defaults to buffer.length).</summary>
		/// <param name="encoding">(Optional) Encoding to use. One of 'utf8', 'ascii', 'base64', 'ucs2', 'binary' or 'hex'. Defaults to 'utf8'.</param>
		/// <param name="start">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="String">A string.</returns>
		return "";
	};
	Buffer.prototype.fill = function(value, offset, end) {
		/// <summary>Fills the buffer with the specified value. If the offset and end are not given it will fill the entire buffer.</summary>
		/// <param name="value">Description</param>
		/// <param name="offset">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Number" integer="true">The number of bytes filled.</returns>
		return 0;
	};
	Buffer.prototype.copy = function(target, target_start, start, end) {
		/// <summary>Does copy between buffers. The source and target regions can be overlapped.</summary>
		/// <param name="target">The target buffer.</param>
		/// <param name="target_start">(Optional) Index to start at in the target buffer. Defaults to zero.</param>
		/// <param name="start">(Optional) Index to start at in the source buffer. Defaults to zero.</param>
		/// <param name="target_end">(Optional) Index to end at in the source buffer. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return new Buffer('');
	};
	Buffer.prototype.slice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		/// </summary>
		/// <param name="start">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return new Buffer('');
	};
	Buffer.prototype.utf8Slice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		///     <para>WARNING: Legacy method for backwards compatibility.</para>
		/// </summary>
		/// <param name="start">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return this.toString('utf8', start, end);
	};
	Buffer.prototype.binarySlice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		///     <para>WARNING: Legacy method for backwards compatibility.</para>
		/// </summary>
		/// <param name="start">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return this.toString('binary', start, end);
	};
	Buffer.prototype.asciiSlice = function(start, end) {
		/// <summary>Returns a new buffer which references the same memory as the old, but offset and cropped by the start (defaults to 0) and end (defaults to buffer.length) indexes.
		///     <para>WARNING: Modifying the new buffer slice will modify memory in the original buffer!</para>
		///     <para>WARNING: Legacy method for backwards compatibility.</para>
		/// </summary>
		/// <param name="start">(Optional) Index to start at. Defaults to zero.</param>
		/// <param name="end">(Optional) Index to end at. Defaults to buffer.length.</param>
		/// <returns type="Buffer">A new buffer.</returns>
		return this.toString('ascii', start, end);
	};
	Buffer.prototype.utf8Write = function(string, offset) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return this.write(string, offset, 'utf8');
	};
	Buffer.prototype.binaryWrite = function(string, offset) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return this.write(string, offset, 'binary');
	};
	Buffer.prototype.asciiWrite = function(string, offset) {
		/// <summary>Writes string to the buffer at offset using the given encoding. If buffer did not contain enough space to fit the entire string, it will write a partial amount of the string. length defaults to buffer.length - offset. The method will not write partial characters.</summary>
		/// <param name="string"></param>
		/// <param name="offset">(Optional) Offset into the given string. Defaults to 0.</param>
		/// <param name="length">(Optional) Number of bytes to write. Defaults to the length of the string.</param>
		/// <returns type="Number" integer="true">Returns the number of octets written. </returns>
		return this.write(string, offset, 'ascii');
	};
	Buffer.prototype.readUInt8 = function(offset, noAssert) {
		/// <summary>Reads an unsigned 8 bit integer from the buffer at the specified offset.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
	};
	Buffer.prototype.readUInt16LE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readUInt16BE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 16 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readUInt32LE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readUInt32BE = function(offset, noAssert) {
		/// <summary>Reads an unsigned 32 bit integer from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt8 = function(offset, noAssert) {
		/// <summary>Reads a signed 8 bit integer from the buffer at the specified offset. Works as buffer.readUInt8, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt16LE = function(offset, noAssert) {
		/// <summary>Reads a signed 16 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt16*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt16BE = function(offset, noAssert) {
		/// <summary>Reads a signed 16 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt16*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt32LE = function(offset, noAssert) {
		/// <summary>Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt32*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readInt32BE = function(offset, noAssert) {
		/// <summary>Reads a signed 32 bit integer from the buffer at the specified offset with specified endian format. Works as buffer.readUInt32*, except buffer contents are treated as two's complement signed values.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number" integer="true">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readFloatLE = function(offset, noAssert) {
		/// <summary>Reads a 32 bit float from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readFloatBE = function(offset, noAssert) {
		/// <summary>Reads a 32 bit float from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readDoubleLE = function(offset, noAssert) {
		/// <summary>Reads a 64 bit double from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.readDoubleBE = function(offset, noAssert) {
		/// <summary>Reads a 64 bit double from the buffer at the specified offset with specified endian format.</summary>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of offset. This means that offset may be beyond the end of the buffer. Defaults to false.</param>
		/// <returns type="Number">The number read from the buffer.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset. Note, value must be a valid unsigned 8 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 16 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid unsigned 32 bit integer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt8 = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset. Note, value must be a valid signed 8 bit integer. Works as buffer.writeUInt8, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer. Works as buffer.writeUInt16*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 16 bit integer. Works as buffer.writeUInt16*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer. Works as buffer.writeUInt32*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid signed 32 bit integer. Works as buffer.writeUInt32*, except value is written out as a two's complement signed integer into buffer.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 32 bit float.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 32 bit float.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 64 bit double.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {
		/// <summary>Writes value to the buffer at the specified offset with specified endian format. Note, value must be a valid 64 bit double.</summary>
		/// <param name="value">The value to write.</param>
		/// <param name="offset">Index to start at.</param>
		/// <param name="noAssert">(Optional) Set noAssert to true to skip validation of value and offset. This means that value may be too large for the specific function and offset may be beyond the end of the buffer leading to the values being silently dropped. This should not be used unless you are certain of correctness. Defaults to false.</param>
		/// <returns>The number of bytes written.</returns>
		return 0;
	};
	
	return {
		Buffer: Buffer,
		INSPECT_MAX_BYTES: 50,
		SlowBuffer: Buffer
	};
});

var Buffer = require('buffer').Buffer;