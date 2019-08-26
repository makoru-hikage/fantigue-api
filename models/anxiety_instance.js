const Sequelize = require('sequelize')
const sequelizeInstance = root_require('sequelize')

module.exports = sequelizeInstance.define('AnxietyInstance', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start_time: Sequelize.DATE,
    end_time: Sequelize.DATE, 
    severity: Sequelize.INTEGER, 
    remarks: Sequelize.STRING
})
