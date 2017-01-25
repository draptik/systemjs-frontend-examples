/**
 * This is a CommonJS module.
 */

/* load dependency */
var moduleB = require('./moduleB.js');

/* Alternative syntax for loading dependencies. This syntax requires a transpiler */
// import * as a from './a.js'

/* the function being exported */
var update = function () {
  moduleB.magic();
  console.log('Hi from module A.');
};

/* export definition */
exports.updateCJS = update;

/* Another export definition */
exports.blub = function () { console.log('blub') };