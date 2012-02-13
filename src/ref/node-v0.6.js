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
var Buffer = global.Buffer;
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
		/// <para>newListener: This event is emitted any time someone adds a new listener.</para>
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
		/// <param name="n" type="Number" integer="true">The maximum number to set.</param>
	};

	return {
		EventEmitter: EventEmitter
	};
});

global.vsdoc('util', function() {

	function Util() {
		/// <summary>Standard Utilities Library.</summary>
	}
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
	};

	return new Util();
});

global.vsdoc('stream', function() {

	function Stream() {
		/// <summary>The stream class.</summary>
		/// <field name="readable">A boolean that is true by default, but turns false after an 'error' occurred, the stream came to an 'end', or destroy() was called.</field>
		this.readable = true;
	}
	Stream.prototype.setEncoding = function(encoding) {
		/// <summary>Makes the data event emit a string instead of a Buffer. encoding can be 'utf8', 'ascii', or 'base64'.</summary>
		/// <param name="encoding">One of 'utf8', 'ascii', or 'base64'.</param>
		return this;
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
		/// <para>exit: Emitted when the process is about to exit.</para>
		/// <para>newListener: This event is emitted any time someone adds a new listener.</para>
		/// </summary>
		/// <param name="event">Name of the event.</param>
		/// <param name="listener">Function that is called upon the event.</param>
		return this;
	};

	return new Process();
})();

// ### Node.js Global Variables

var process = global.process;
