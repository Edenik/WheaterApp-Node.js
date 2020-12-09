const request = require('request');
require('dotenv').config()


const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=37.8267,-122.4233`
request({ url: weatherURL, json: true }, (err, res) => {
    if (err) {
        console.log('Unable to connect to Weather service!')
    } else if (res.body.error) {
        console.log('Unable to find location!')
    } else {
        const tempData = res.body.current;
        const locData = res.body.location;
        console.log(`${tempData.weather_descriptions[0]} It is currently ${tempData.temperature} 
            degrees in ${locData.name} of ${locData.country}. 
            It feels like ${tempData.feelslike} degrees out.`)

    }
})


const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`
request({ url: mapBoxURL, json: true }, (err, res) => {
    if (err) {
        console.log('Unable to connect to Geocoding service!')
    } else if (res.body.features.length === 0) {
        console.log('Unable to get Geocoding from location')
    } else {
        const data = res.body.features[0];
        console.log(data.place_name + ', Latitude: ' + data.center[0] + ' Longitude: ' + data.center[1]);
    }
})


