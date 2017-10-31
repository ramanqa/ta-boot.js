var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After}) {
  After(function() {
    return true;
  });
});