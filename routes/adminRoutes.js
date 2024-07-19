const express = require('express');
const { saveFormData } = require('../controllers/adminRegController');
const router = express.Router();

router.post('/',saveFormData)

module.exports = router;