var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

// API Credentials
const apiKey = process.env.API_KEY

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function() {
    console.log(`Example app listening on localhost: ${port}`)
})

app.get('/key', (req, res)=> {
    res.send(apiKey)
})
