'use strict';

const { createUser, updateUser, removeUser, getUserById } = require("../controllers/user.js")
const { Router } = require("express");
const router = Router();

router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', removeUser);
router.get('/user/:id', getUserById);

module.exports = router;
