const express = require('express');
const {saveFormData, updateBook, deleteBook,getData} = require('../controllers/booksController')
const router = express.Router();

router.post('/',saveFormData);
router.put('/:name',updateBook);
router.delete('/:name',deleteBook);

router.get('/',getData);
router.get('/sort', getData); 

module.exports = router;