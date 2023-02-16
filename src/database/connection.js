const Sequelize = require('sequelize')

const connection = new Sequelize('estacionamentodb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;