'use strict';

const { dbConfig } = require('../config.json');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.dbName, dbConfig.userName, dbConfig.dbPassword, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

const user = require('../model/user.js')(sequelize);

module.exports = { user }
