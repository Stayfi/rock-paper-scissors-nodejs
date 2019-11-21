const express = require('express');
const router = express.Router();
const uiController = require('../controllers/ui.controller');

router.get('/lizardSpock', uiController.indexLizardSpock);
router.get('/', uiController.index);

module.exports = router;
