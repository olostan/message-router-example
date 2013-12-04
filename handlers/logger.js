function log(msg, next) {
    //console.log("Logger "+msg.type+":", msg);
    if (typeof(next)=='object') {
        console.error("next should not be an object:", next);
    }
    next(msg);
}
module.exports = {
    'log.$type': log,

    '$config' : {
        min: 1,
        max: 1,
        concurrency: 0
    }
}