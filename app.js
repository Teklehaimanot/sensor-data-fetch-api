const express = require('express')
var cors = require('cors')
require('dotenv/config')

var app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('we are on home page')
})

app.listen(process.env.PORT, () => {
    console.log('server started')
})