const Users = require('../routes/Users')

 function initializeRoutes(app) {
    app.use('/', Users)
 }

 module.exports = initializeRoutes;