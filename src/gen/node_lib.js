/// <reference path="../ref/node-v0.6.js"/>

if (typeof String.prototype.toProperCase === 'undefined') {
	String.prototype.toProperCase = function() {
		if (this.length < 1) return this;
		if (this.length < 2) return this.toUpperCase();
		return this.charAt(0).toUpperCase() + this.substr(1);
	}
}

var moduleName = 'process';
var moduleNameProper = moduleName.toProperCase();
var target = process;

var print = console.log;

print('/// <reference path="../ref/node-v0.6.js"/>\n');

// Module vsdoc BEGIN
print('global.vsdoc("' + moduleName + '", function() {\n');

// Module Class Constructor BEGIN
print('\tfunction ' + moduleNameProper + '() {\n');
print('\t\t/// <summary>' + moduleNameProper + '</summary>');
var member;
var methods = {};
var fields = {};
var memberType;
for (var i in target) {
	member = target[i];
	memberType = typeof member;
	if (memberType === 'function') {
		if (i.charAt(0) != '_')
			methods[i] = member;
		continue;
	}
	fields[i] = member;
	print('\t\t/// <field name="' + i + '" type="' + memberType + '">' + i + '</field>');
}
print('');
for (var i in fields) {
	print('\t\t// this.' + i + ' = ???;');
}
print('\t}');
// Module Class Constructor END

// Module Class Methods BEGIN
for (var i in methods) {
	print('\t' + moduleNameProper + '.prototype.' + i + ' = function() {');
	print('\t\t/// <summary>' + i + '</summary>');
	print('\t};');
}
// Module Class Methods END

print('});');
// Module vsdoc END

process.exit();