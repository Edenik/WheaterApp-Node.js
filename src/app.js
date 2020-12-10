const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

// const { title } = require('process')
const geocode = require('./services/geocode')
const forecast = require('./services/forecast')

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

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({location, forecastData })
        })
    })

    
})


app.get('/help/*', (req,res) => {
    res.render('404', {
        error:'Help article not found',
        name:"Eden Nahum",
        title:'404'
    })
})

app.get('*', (req,res)=> {
    res.render('404', {
        error:'Page not found',
        name:"Eden Nahum",
        title:'404'
    })
})

app.listen(3000, () => console.log('Server is running on port 3000'))