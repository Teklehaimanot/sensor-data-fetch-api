const express = require('express')
const data = require('./data.json')
var cors = require('cors')
require('dotenv/config')

var app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('we are on home page')
})

app.get('/api/sensor', (req, res) => {
    res.status(200).json(data)

})
app.listen(process.env.PORT, () => {
    console.log('server started')
})