const DOTENV = require('dotenv')
DOTENV.config()

const routes = require('./routes');

const express = require('express')
const app = express()
const port = process.env.PORT

app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))