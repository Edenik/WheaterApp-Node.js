const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_API_KEY}&limit=1`
    console.log(url)
    
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Geocoding service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to get Geocoding from location', undefined)
        } else {
            const data = body.features[0];
            callback(undefined, { latitude: data.center[0], longitude: data.center[1], location: data.place_name });
        }
    })
}

module.exports = geocode;