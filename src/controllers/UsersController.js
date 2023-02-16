const { Users } = require('../models/index')
// const bcrypt = require('bcrypt')
const { Op } = require('sequelize')

function UsersController() {

    return {

        async getAllUsers(req, res) {

            try {

                const usuarios = await Users.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } )

                if(!usuarios.length) return res.status(404).json({ status: 404, error: 'Not Found', message: "Não existem usuários na base de dados!" })

                return res.status(200).json(usuarios)
           
            } catch(err) {
                console.log(err)
                res.status(400).json({ status: 400, message: "Bad Request"})
            }

        },

        async getUserById(req, res) {

            const { id } = req.params;

            const usuario = await Users.findOne( { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },  where: { id } })

            if(!usuario) return res.status(404).json({ status: 404, error: 'Not Found', message: "Usuário não encontrado!" }) 

            return res.status(200).json(usuario) 
        },

        async save(req, res) {

            const { register, fullname, birthdate, username, email, password, cpf, rg, gender, isAdmin } = req.body;

            // const salt = bcrypt.genSaltSync(10)
            // const hash = bcrypt.hashSync(password, salt)

            const [ user, created ] = await Users.findOrCreate({
                where: { [Op.or]: [{ email }, { username }] },
                defaults: { register, fullname, birthdate, username, email, password, cpf, rg, gender, isAdmin }
            })

            if(!created) return res.status(202).json({ status: 202, message: "O usuário já existe na base de dados!", path:`/user/${user.id}` }) 

            return res.status(201).json({ 
                status:201, 
                message: "Usuário criado com sucesso!", 
                action_links:[{
                    view: `/user/${user.id}`,
                    edit: `/users/${user.id}`,
                    delete: `/users/${user.id}`
                }],
                data: user,
            })

        }
    }

}

module.exports = UsersController;