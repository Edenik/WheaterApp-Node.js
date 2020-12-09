const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Eden Nahum'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

app.get('/help', (req, res) => {
    res.render('help', { title: "Help", message: "How can I help You?" })
})

app.get('/weather', (req, res) => {
    res.send({ forecast: 'it is raining', location: 'Israel' })
})

app.listen(3000, () => console.log('Server is running on port 3000'))