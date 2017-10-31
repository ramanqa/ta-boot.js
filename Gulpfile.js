var exec = require('child_process').exec,
    gulp = require('gulp');
 
gulp.task('run:specs', function (cb) {
    exec('./node_modules/mocha/bin/mocha spec --reporter spec', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('run:features', function (cb) {
    exec('./node_modules/cucumber/bin/cucumber.js --format node_modules/cucumber-pretty', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

gulp.task('info', function (cb) {
    console.log("\n===== Tasks and usage =====");
    console.log("1> gulp run:features  // run cucumber features");
    console.log("2> gulp run:specs  // run mocha specifications by example");
    console.log("3> gulp info  // print tasks and usage. [Default]");
})

gulp.task('default', ['info']);