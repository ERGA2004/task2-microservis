const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_database', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
