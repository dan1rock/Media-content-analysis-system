'use strict';

const { createUsr, getUsr, getAllUsrs, updateUsr, removeUsr } = require('./userControl.js');

async function createUser(req, res) {
    try {
        const user = await createUsr(req.body)
        return res.status(200).json(`User successfully created`);
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function getUserById(req, res) {
    try {
        const user = await getUsr(req.params.id);
        return res.status(200).json(user);
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await getAllUsrs();
        return res.status(200).json(users);
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function removeUser(req, res) {
    try {
        await removeUsr(req.params.id);
        return res.status(200).json('User successfully removed');
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

async function updateUser(req, res) {
    try {
        const user = await updateUsr(req.params.id, req.body);
        return res.status(200).json('User successfully updated');
    } catch(err) {
        return res.status(500).json(`Server error -> ${err}`);
    }
}

module.exports = { createUser, getUserById, getAllUsers, removeUser, updateUser };
