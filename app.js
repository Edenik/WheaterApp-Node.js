const request = require('request');
require('dotenv').config()

const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=37.8267,-122.4233`
const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`


request({url:mapBoxURL,json:true}, (err,res) =>{
    const data = res.body.features[0];
    console.log(data)
    console.log(data.place_name + ', Latitude: ' + data.center[0]  + ' Longitude: '+ data.center[1] );
})
// request({ url: weatherURL, json: true }, (err, res) => {
//     const tempData = res.body.current;
//     const locData = res.body.location;
//     console.log(`${tempData.weather_descriptions[0]} It is currently ${tempData.temperature} 
//         degrees in ${locData.name} of ${locData.country}. 
//         It feels like ${tempData.feelslike} degrees out.`)

// })

