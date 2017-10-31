const bunyan = require('bunyan');

const logger = bunyan.createLogger({name: "test-activity",streams: [{
            path: 'test-activity.log',
        }]});

exports.logger = logger;