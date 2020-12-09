const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${longitude},${latitude}`
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to Weather service!', undefined)
        } else if (res.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const tempData = res.body.current;
            const locData = res.body.location;
            callback(undefined, { name: locData.name, country: locData.country, description: tempData.weather_descriptions[0], temp: tempData.temperature, feelslike: tempData.feelslike, })
        }
    })
}

module.exports = forecast;