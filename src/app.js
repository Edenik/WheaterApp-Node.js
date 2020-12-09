const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname , '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

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
        title: "About",
        name:"Eden Nahum"
    })
})

app.get('/help', (req, res) => {
    res.render('help', { 
        title: "Help", 
        message: "How can I help You?" ,
        name:"Eden Nahum"
    })
})

app.get('/weather', (req, res) => {
    res.send({ forecast: 'it is raining', location: 'Israel' })
})

app.listen(3000, () => console.log('Server is running on port 3000'))