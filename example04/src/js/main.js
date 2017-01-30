// import a from 'moduleA.js';
// console.log('Module A loaded.');
// a.update();
// /**
//  * Should output:
//  * 
//  * Hi from module B.
//  * Hi from module A.
//  */

// import c from 'moduleC.js';
// console.log('Module C loaded.');
// c.show();
// /**
//  * Should output:
//  * 
//  * Hi from module C.
//  */

/** 
 * Can I replace 'System.import'? 
 */
System.import('moduleA.js').then(function (m) {
  console.log('Module A loaded using System.import...');
  m.update();

  // ES6 features for testing Babel transpiler:
  console.log('Testing ES6 features...');
  const PI = 3.14;
  console.log(PI);
  let bla = "bla";
  console.log(bla);
  [0, 1, 2].forEach(n => {
    console.log(n);
  })
});