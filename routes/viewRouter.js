const express = require('express');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getRegisterForm);
router.get('/report', viewController.getReport);

module.exports = router;