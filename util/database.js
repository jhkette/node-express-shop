
const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Gue55wh0s1n', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;