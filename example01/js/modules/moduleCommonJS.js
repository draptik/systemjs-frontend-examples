exports.moduleCommonJS = (function(){
  var update = function() {
    console.log('Hi from CommonJs module.');
  };
  return {
    updateCJS: update
  };
});
