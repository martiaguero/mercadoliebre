const express = require('express')
const path = require('path')
const router = express.Router()
const controllers = require('../controllers/mainControllers')

router.get('/', controllers.home)
router.get('/register', controllers.register)
router.get('/login', controllers.login)


module.exports = router;