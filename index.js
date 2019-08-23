const DOTENV = require('dotenv')
DOTENV.config()

const routes = require('./routes');

const express = require('express')
const app = express()
const port = process.env.PORT
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_TYPE,
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            underscored: true
        }
    }
)

//Check if this is connected well to the database
sequelize
    .authenticate()
    .then(() => console.log(`DB successfully connected to ${process.env.DB_HOST} at port: ${process.env.DB_PORT}!`))

//Initiate Routes
app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))