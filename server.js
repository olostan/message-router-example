var router = require('../message-router/router.js');

router.use(require('message-router-web'));

router.addHandlersDir(__dirname+'/handlers');
router.workflow(require('./workflow.json'));

router.start();

