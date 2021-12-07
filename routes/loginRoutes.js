const express = require('express')
const path = require('path')
const router = express.Router()
const controllers = require('../controllers/mainControllers')

router.get('/login', controllers.login)


module.exports = router;