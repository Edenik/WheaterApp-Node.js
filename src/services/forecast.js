const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${longitude},${latitude}`
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const tempData = body.current;
            const locData = body.location;
            callback(undefined, { name: locData.name, country: locData.country, description: tempData.weather_descriptions[0], temp: tempData.temperature, feelslike: tempData.feelslike, })
        }
    })
}

module.exports = forecast;