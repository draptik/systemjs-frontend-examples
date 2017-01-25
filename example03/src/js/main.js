System.import('moduleA.js').then(function (m) {
  console.log('Module A loaded.');
  m.updateCJS();
  /**
   * Should output:
   * 
   * Hi from module B.
   * Hi from module A.
   */
});

System.import('moduleC.js').then(function (m) {
  console.log('Module C loaded.');
  m.show();
  /**
   * Should output:
   * 
   * Hi from module C.
   */
});

/* Load multiple modules using 'Promise.all': */
Promise.all([
  System.import('moduleA.js'),
  System.import('moduleC.js')
]).then(function (modules) {
  console.log('Modules loaded using Promise.all.');
  modules[0].updateCJS();
  modules[1].show();
  /**
   * Should output:
   * 
   * Hi from module B.
   * Hi from module A.
   * Hi from module C.
   */
}, console.error.bind(console));
