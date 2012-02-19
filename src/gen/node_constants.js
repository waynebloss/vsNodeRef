var _const = require('constants');
var print = console.log;

print('// The __Node namespace will contain a reference to every class constructor from');
print('// every Node.js built-in module. These class references can be used in param');
print('// XML comment elements as the value of the type attribute in closures or');
print('// continuation functions. e.g. <param name="connection" type="__Node.Socket"/>');
print('// ');
print('var __Node = {};');
print('');
print('__Node.Constants = (function() {');
print('');
print('	function _Constants() {');
print('		/// <summary>Node.js constants.</summary>');
var name = '';
var value = '';
for (var i in _const) {
	name = i.toString();
	value = _const[i].toString();
	print('		/// <field name="' + name + '" type="Number" integer="true">' + name + ' (' + value + ')</field>');
}
for (var i in _const) {
	name = i.toString();
	value = _const[i].toString();
	print('		this.' + name + ' = ' + value + ';');
}
print('	}');
print('	return new _Constants();');
print('})();');