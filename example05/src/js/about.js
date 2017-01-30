System.import('moduleA.js').then(function (m) {
  console.log('Module A loaded using System.import...');
  
  m.update('#about-content', 'This text is injected using jQuery...');
  
});