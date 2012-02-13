/// <reference path="node-v0.6.js"/>

global.vsdoc('testMod', function () {

	function TestMod(arg1) {
		/// <summary>Creates a new TestMod.</summary>
		/// <param name="arg1">Argument Uno.</param>
		/// <field name="count">Count of something.</field>
		this.count = 0;
	}
	TestMod.prototype.testMethod = function (testName) {
		/// <summary>Does a test.</summary>
		/// <param name="testName">Name of the test to do.</param>
		return this;
	}
	
	return new TestMod();
});