import a from 'moduleA.js';
console.log('Module A loaded.');
a.updateCJS();
/**
 * Should output:
 * 
 * Hi from module B.
 * Hi from module A.
 */

import c from 'moduleC.js';
console.log('Module C loaded.');
c.show();
/**
 * Should output:
 * 
 * Hi from module C.
 */

