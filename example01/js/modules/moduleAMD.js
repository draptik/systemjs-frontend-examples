
/** AMD Module */
define('moduleAMD', // module name
  [], // dependencies
  function () {
    var moduleAMD = {
      updateAMD: function () {
        console.log('Hi from moduleAMD');
      }
    }

    return moduleAMD;
  });
