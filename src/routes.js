const Router = require('express');
const SessionController = require('./app/controllers/SessionController');

const router = Router();

router.post('/session', SessionController.validate);

module.exports = router;
