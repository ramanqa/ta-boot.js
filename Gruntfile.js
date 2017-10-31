module.exports = grunt => {
    grunt.loadNpmTasks('grunt-exec');
    global.__base = __dirname + '/';

    grunt.initConfig({
        exec: {
            run_specs: {
                cmd: function(){
                    return "./node_modules/mocha/bin/mocha spec --reporter spec"
                }
            },
            run_features:{
                cmd: function(){
                    return "./node_modules/cucumber/bin/cucumber.js --format node_modules/cucumber-pretty"
                }
            }
        }

    });

    grunt.registerTask('run:specs', ['exec:run_specs']);
    grunt.registerTask('run:features', ['exec:run_features']);
    
    grunt.registerTask('info', function() {
        grunt.log.writeln('\n===== Tasks and usage =====');
        grunt.log.writeln("1> grunt run:features  // run cucumber features");
        grunt.log.writeln("2> grunt run:specs  // run mocha specifications by example");
        grunt.log.writeln("3> grunt info  // print tasks and usage. [Default]");
    });

    grunt.registerTask('default', ['info']);
}