const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3030
const mainRoutes = require('./routes/homeRoutes')
const registerRoutes = require('./routes/registerRoutes')

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor funcionando');
}); /* heroku*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/', registerRoutes)
    /*------------------------------------------------
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/home.html'))
    })

    app.get('/register.html', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/register.html'))
    })

    app.get('/login.html', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/login.html'))
    })*/