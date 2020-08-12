var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

// API Credentials
console.log(`Your API key is ${process.env.API_KEY}`);
var apiKey = process.env.API_KEY

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key='
let acutalURL = baseURL + apiKey + '&of=json&txt=' + someText + '&model=general&lang=en'

// Example URL:
// "https://api.meaningcloud.com/sentiment-2.1?key=<<YOUR OWN KEY>>&of=json&txt=Main%20dishes%20were%20blah.&model=Restaurants&lang=en"

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
