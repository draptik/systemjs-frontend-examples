/**
 * This is a CommonJS module.
 */

var showStuff = function () {
  console.log('Hi from module C.');
};

exports.show = showStuff;
