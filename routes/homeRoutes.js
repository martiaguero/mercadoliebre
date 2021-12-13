const express = require('express')
const path = require('path')
const router = express.Router()
const controllers = require('../controllers/mainControllers')

router.get('/', controllers.home)
router.post('/', (req, res) => {
     res.sendFile(path.join(__dirname + '/../views/home.html'))})

module.exports = router;