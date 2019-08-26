const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Perhaps' })
});

routes.use(function (req, res) {
    res.status(404).send('Not found')
});

module.exports = routes