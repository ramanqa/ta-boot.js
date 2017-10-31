var unirest = require('unirest');
var {defineSupportCode} = require('cucumber');
var expect = require('chai').expect

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
    
    setDefaultTimeout(60 * 1000);

    var username, pincode, response

    Given(/^username is "(.*)"$/, function (un) {
      username = un;
    });

    Given(/^my pincode is "(.*)"$/, function (pin) {
      pincode = pin;
    });

    When('I request for my place name', function (done) {
      return unirest.get('http://mockbin.com/request')
        .end(function (resp) {
          response = resp;
          done();
        });
    });

    Then('response is successful', function () {
      expect(response.status).to.equal(200);
    });

});