

function UsersController() {

    return {

        async getAllUsers(req, res) {
            return  res.send('ROTA USUÁRIOS')
        }
    }

}

module.exports = UsersController;