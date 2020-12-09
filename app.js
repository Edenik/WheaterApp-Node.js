const request = require('request');
require('dotenv').config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=37.8267,-122.4233`
console.log(url)
request({ url: url, json: true }, (err, res) => {
    // console.log(res.body.current)
    const tempData = res.body.current;
    const locData = res.body.location;
    console.log(`${tempData.weather_descriptions[0]} It is currently ${tempData.temperature} 
        degrees in ${locData.name} of ${locData.country}. 
        It feels like ${tempData.feelslike} degrees out.`)

})