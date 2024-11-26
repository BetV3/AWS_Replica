const express = require('express');
const router = express.Router();
const instanceController = require('../controllers/instanceController');
const validate = require('../validators/instanceValidator');

router.post('/ec2', validate.createInstance, instanceController.createInstance);
router.get('/ec2', instanceController.getInstances);
// add more routes 

module.exports = router;