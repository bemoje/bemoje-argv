(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-node')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-node'], factory) :
	(global = global || self, global.argv = factory(global.isNode));
}(this, (function (isNode) { 'use strict';

	isNode = isNode && Object.prototype.hasOwnProperty.call(isNode, 'default') ? isNode['default'] : isNode;

	const args = isNode() ? process.argv.slice(2) : [];

	/**
	 * Returns array of node-js commandline arguments
	 * @returns {array<string>}
	 */
	function argv() {
		return args
	}

	return argv;

})));
