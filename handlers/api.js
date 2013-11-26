var router;

function processTest(msg, next) {
    setTimeout(function () {
        msg.response = "Hello";
        //router.send('log.inside',"We are inside");
        next(msg);

    }, 2000)
}
module.exports = {
    '$start': function (r) {
        //console.log("Started API worker");
        process.on('disconnect', function() {
            console.log("Killing API worker");
        })
        router = r;
    },
    'api.test': processTest
}
