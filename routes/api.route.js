const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

router.get('/sayHello', apiController.sayHello);
router.get('/getChoices', apiController.getChoices);
router.get('/humanVsComputer/:humanChoice', apiController.humanVsComputer);
router.get('/humanVsComputer', (req, res, next) => { res.sendStatus(400); });
router.get('/computerVsComputer', apiController.computerVsComputer);

module.exports = router;
