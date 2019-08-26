const express = require('express')

const AnxietyInstancesController = root_require('controllers/anxiety_instance')

const routes = express.Router()

routes.route('/')
    .get(AnxietyInstancesController.list)