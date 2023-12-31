const express = require('express');
const router = express.Router();

const { login, signup, allUsers,userbyEmail, getUserById, deleteUser, updateUser } = require('./Controller');


router.post('/signup', signup);
router.post('/login', login);
router.get('/getallusers', allUsers);
router.get('/userbyemail/:email', userbyEmail);
router.get('/user/:id', getUserById);
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser);

module.exports = router;