const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { 
    getAllUser, 
    postUserDetails, 
    putSkills,deleteUser, 
    putEducation,
    putProjects, 
    updateUser, 
    deleteUserbyId
} = require('../controllers/userController');
const router = express.Router();

router.get('/',getAllUser);
router.post('/',authMiddleware,postUserDetails);
router.put('/skills',authMiddleware,putSkills);
router.put('/education',authMiddleware,putEducation);
router.put('/projects',authMiddleware,putProjects);
router.put('/updateUser/:id',authMiddleware,updateUser)
router.delete('/',authMiddleware,deleteUser);
router.delete('/deleteUserById/:id',authMiddleware,deleteUserbyId)

//dont forget to add the :id for the update and delete by id

module.exports = router;