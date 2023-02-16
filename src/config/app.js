const Users = require('../routes/Users')

 function initializeRoutes(app) {
    app.use('/usuarios', Users)
 }

 module.exports = initializeRoutes;