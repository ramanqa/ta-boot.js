var {defineSupportCode} = require('cucumber');

function CustomWorld() {
    // console.log("TERA FORMING");
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})