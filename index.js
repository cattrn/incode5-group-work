const express = require('express')
require('dotenv').config()

// require routes



const app = express()
const PORT = process.env.PORT || 3000


// BODY PARSER
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// VIEW ENGINE
app.set('view engine', 'ejs')
app.set('views', './templates')


// MIDDLEWARE ROUTES



app.listen(PORT, () => console.log(`App is listening on http://localhost:${PORT}`))