const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = require('./src/config/app')
const connection = require('./src/database/connection')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'))

Router(app)

connection
    .authenticate()
    .then(() => console.log('Connected with database!'))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))
