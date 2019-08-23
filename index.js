/* Imports */
const DOTENV = require('dotenv')
const express = require('express')
const Sequelize = require('sequelize')

const routes = require('./routes');

/* Get the variables from .env */
DOTENV.config()

/* Initialisations */
const app = express()
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

/* Check DB connection */
sequelize
    .authenticate()
    .then(() => console.log(`DB successfully connected to ${process.env.DB_HOST} at port: ${process.env.DB_PORT}!`))

/* Initiate Routes */
app.use('/', routes)

/*Run the server */
const port = process.env.PORT
app.listen(port, () => console.log(`Server successfully listening on port: ${port}`))