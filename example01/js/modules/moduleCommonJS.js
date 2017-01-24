/**
 * This is a CommonJS module.
 */

/* load dependency */
var aModule = require('./a.js');

/* Alternative syntax for loading dependencies. This syntax requires a transpiler */
// import * as a from './a.js'

/* the function being exported */
var update = function () {
  aModule.magic();
  console.log('Hi from CommonJs module.');
};

/* export definition */
exports.updateCJS = update;

/* Another export definition */
exports.blub = function () { console.log('blub') };