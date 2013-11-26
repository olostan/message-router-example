function log(msg, next) {
    console.log("Logger "+msg.type+":", msg);
    next(msg);
}
module.exports = {
    'log.$type': log
}