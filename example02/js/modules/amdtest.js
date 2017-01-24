/** 
 * AMD Module 'amdtest'
 */

/* Anonymous AMD function */
// define(function () {
//   var amdtest = {
//     updateAMD: function () {
//       console.log('Hi from amdtest');
//     }
//   };

//   return amdtest;
// });

/* Named AMD function */
define('amdtest', [], function () {
  var amdtest = {
    updateAMD: function () {
      console.log('Hi from amdtest');
    }
  };

  return amdtest;
});
