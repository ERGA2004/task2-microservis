const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_database', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
