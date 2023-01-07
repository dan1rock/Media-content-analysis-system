'use strict';

const { user } = require('../connection/connection.js');

async function createUsr(data) {
    await user.create(data)
    .then((res) => console.log('Position created succesfully!'))
    .catch((err) => console.error(`Error create position -> ${err}`));
    return;
}

async function getUsr(id) {
    const res = await user.findAll({
        where: {
            "id": id,
        }
    });
    if(res.length === 0) { 
        throw new Error(`user where id = ${id} doesn't exists`)
    }

    return res; 
}

async function updateUsr(id, data) {
    const res = await user.findAll({
        where: {
            "id": id,
        }
    })
    .catch((err) => console.error(`Error check exists user -> ${err}`));

    if(res.length !== 0) {
        await user.update(data, {
            where: {
                "id": id,
            }
        })
        .then((res) => console.log('User updated succesfully!'))
        .catch((err) => console.error(`Error update user -> ${err}`));
        return;
    } else {
        throw new Error(`User by id: ${id} doesn't exists!`);
    }
}

async function removeUsr(id) {
    const res = await user.findAll({
        where: {
            "id": id,
        }
    })
    .catch((err) => console.error(`Error check exists position -> ${err}`));

    if(res.length !== 0) {
        await user.destroy({
            where: {
                "id": id,
            }
        })
        .then(res => console.log(`User by id: ${id} successfully removed`))
        .catch(err => console.error(`Error -> can't delete user! ID: "id${id}" - ${err}`));
        return;
    } else {
        throw new Error(`User by id: ${id} can't be removed, because it doesn't exists!`)
    }
}

module.exports = { createUsr, getUsr, updateUsr, removeUsr }
