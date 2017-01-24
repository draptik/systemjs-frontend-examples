
/** Module using Revealing Module Pattern */
var dummyModule = (function () {

  var update = function () {
    console.log('Hi from dummy');
  };

  return {
    update: update
  };

})();
