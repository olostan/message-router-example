var router = require('message-router');

var id = process.pid;

function processTest(msg, next) {
    setTimeout(function () {
        msg.response = "Hello";
        router.send('log.inside',{msg:"We are inside of "+id});
        next(msg);
    }, 2000)
}
module.exports = {

    '$start': function () {
        process.on('disconnect', function() {
            console.log("Killing API worker");
        })
    },

    'api.test': processTest,

    '$config' : {
        min_limit: 2,
        max_limit: 10,
        concurrency: 2
    }
};
