const express = require('express');
const {saveFormData} = require('../controllers/userRegController');
const router = express.Router();

router.post('/',saveFormData)


module.exports = router;