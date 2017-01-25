/**
 * This is a CommonJS module.
 */

var doMagic = function () {
  console.log('Hi from module B.');
};

exports.magic = doMagic;
