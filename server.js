var router = require('message-router');

router.use(require('message-router-web'));

router.addHandlersDir(__dirname+'/handlers');
router.config(require('./router-config.global.json'));
router.workflow(require('./workflow.json'));

router.start();

