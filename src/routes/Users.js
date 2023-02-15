const router = require('express').Router()
const UsersController = require('../controllers/UsersController')

router.get('/usuarios', UsersController().getAllUsers)

module.exports = router;