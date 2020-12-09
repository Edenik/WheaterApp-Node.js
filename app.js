require('dotenv').config()
const geocode = require('./services/geocode')
const forecast = require('./services/forecast')






forecast(34.78254, 32.088545, (err, data) => {
    console.log('Error:', err)
    console.log('Data:', data)
})

geocode('Tel-Aviv', (err, data) => {
    console.log('Error:', err)
    console.log('Data:', data)
})