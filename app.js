const request = require('request');
require('dotenv').config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=37.8267,-122.4233`

request({url:url}, (err, res) => {
    const data = JSON.parse(res.body)
    console.log(data.current)
})