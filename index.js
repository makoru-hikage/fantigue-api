global.root_require = name => require(`${__dirname}/${name}`)

/* Imports */
const DOTENV = require('dotenv')
const express = require('express')

const routes = require('./routes')

/* Get the variables from .env */
DOTENV.config()

/* Initialisation */
const app = express()
const sequelize = require('./sequelize')

/* Check DB connection */
sequelize
    .authenticate()
    .then(() => console.log(`DB successfully connected to ${process.env.DB_HOST} at port: ${process.env.DB_PORT}!`))

/* Initiate Routes */
app.use('/', routes)

/*Run the server */
const port = process.env.PORT
app.listen(port, () => console.log(`Server successfully listening on port: ${port}`))