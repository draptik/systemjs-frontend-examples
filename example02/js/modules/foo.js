/** 
 * AMD Module 'foo'
 */

define('foo', [], function () {
  var foo = {
    updateAMD: function () {
      console.log('Hi from foo');
    }
  };

  return foo;
});
