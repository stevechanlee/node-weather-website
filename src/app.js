const path = require('path')
const express = require('express')
const hbs = require('hbs')
const getWeather = require('./utils/getWeather')



const app = express()
// Define Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Steve Lee'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Steve Lee'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        help: 'I\'m here to help',
        title: 'Help',
        name: 'Steve Lee'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.city) {
        return res.send({
            error: 'You must provide city name'
        })
    }
    
    getWeather(req.query.city, (response) => {
        res.send({
            city: req.query.city,
            temp: response.temperature,
            prec: response.precip
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404error', {
        title: '404 error',
        errorMessage: 'Help article not found!',
        name: 'Steve Lee'
    })
})

app.get('*', (req, res) => {
    res.render('404error', {
        title: '404 error',
        errorMessage: 'Page not found!',
        name: 'Steve Lee'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})