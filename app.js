// Imports
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const deanAPI = require('./routes/api/deanAPI');
const deanClient = require('./routes/client/deanClient');

const app = express()
app.use(cors());
app.use(bodyParser.json());

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set Templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')

// Routes
app.use('/api', deanAPI.routes); //deploy api
app.use('/', deanClient.routes); //call api 

// app.get('',(req, res) => {
//     res.render('index', { title: 'Home Page', layout: './layouts/sidebar'})
// })

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', layout: './layouts/sidebar' })
})

// Listen on Port 8080
app.listen(config.port, () => console.info(`App listening on port ${config.port}`))