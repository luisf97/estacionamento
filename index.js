const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = require('./src/config/app')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'))

Router(app)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
