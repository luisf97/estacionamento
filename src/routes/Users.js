const router = require('express').Router()
const UsersController = require('../controllers/UsersController')

router
    .get('/', UsersController().getAllUsers)
    .get('/:id', UsersController().getUserById)
    .post('/novo', UsersController().save)

module.exports = router;