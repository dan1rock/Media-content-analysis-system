# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення на початкового наповнення бази даних

```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `login` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`query`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`query` ;

CREATE TABLE IF NOT EXISTS `mydb`.`query` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `source_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `role_id`, `source_id`),
  INDEX `fk_query_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_query_role_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_query_source_idx` (`source_id` ASC) VISIBLE,
  CONSTRAINT `fk_query_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_query_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_query_source`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(45) NULL,
    `api_key` VARCHAR(45) NULL,
    PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `query_id` INT NOT NULL,
  PRIMARY KEY (`id`, `query_id`),
  INDEX `fk_result_query_idx` (`query_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_query`
    FOREIGN KEY (`query_id`)
    REFERENCES `mydb`.`query` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`scraperType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraperType` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraperType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `repo` VARCHAR(45) NULL,
  `source_id` INT NOT NULL,
  PRIMARY KEY (`id`, `source_id`),
  INDEX `fk_scraper_type_source1_idx` (`source_id` ASC) VISIBLE,
  CONSTRAINT `fk_scraper_type_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scraperInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraperInstance` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraperInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `end_point` VARCHAR(45) NULL,
  `task_id` INT NOT NULL,
  `scraperType_id` INT NOT NULL,
  PRIMARY KEY (`id`, `scraperType_id`),
  INDEX `fk_scraperInstance_scraperType1_idx` (`scraperType_id` ASC) VISIBLE,
  CONSTRAINT `fk_scraperInstance_scraperType1`
    FOREIGN KEY (`scraperType_id`)
    REFERENCES `mydb`.`scraperType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;

CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NULL,
  `scraperInstance_id` INT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`, `scraperInstance_id`, `result_id`),
  INDEX `fk_message_result_idx` (`result_id` ASC) VISIBLE,
  INDEX `fk_message_scraperInstance1_idx` (`scraperInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_scraperInstance1`
    FOREIGN KEY (`scraperInstance_id`)
    REFERENCES `mydb`.`scraperInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_message_result`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NULL,
  `value` TEXT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`, `message_id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
```

## RESTfull сервіс для управління даними

### Кореневий файл сервера

```js
'use strict';

const express = require('express');
const router = require('./routes/router.js');
const {configServer} = require('./config.json');

const app = express();
const port = process.env.PORT || configServer.PORT;

app.use(express.json());
app.use(router);

app.listen(port, (err) => {
    if(err) throw new Error(`Error listening -> ${err}`);
    console.log(`Server listening at http://localhost:${port}`);
})

```

### Файл підключення до БД

```js
'use strict';

const { dbConfig } = require('../config.json');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.dbName, dbConfig.userName, dbConfig.dbPassword, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

const user = require('../model/user.js')(sequelize);

module.exports = { user }

```

### config.json

```json
{
    "configServer": {
        "PORT": 8080
    },
    "dbConfig": {
        "dbName": "mydb",
        "userName": "root",
        "dbPassword": "Passw0rd",
        "dialect": "mysql",
        "host": "localhost"
    }
}

```

### Файл роутера

```js
'use strict';

const { createUser, updateUser, removeUser, getUserById, getAllUsers } = require("../controllers/user.js")
const { Router } = require("express");
const router = Router();

router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', removeUser);
router.get('/user/:id', getUserById);
router.get('/user', getAllUsers);

module.exports = router;

```

### Моделі Sequelize

```js
'use strict';

const Sequelize = require('sequelize');

function user(sequelize) {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,   
        },
    }, 
    {
        timestamps: false,
        tableName: "user"
    })
}

module.exports = user;

```

### Файли контролерів, які оброблюють запити

```js
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

async function getAllUsrs() {
    const res = await user.findAll();
    if(res.length === 0) { 
        throw new Error(`user table is empty`)
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

module.exports = { createUsr, getUsr, getAllUsrs, updateUsr, removeUsr }

```

```js
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

```
