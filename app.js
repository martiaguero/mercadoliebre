const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3030
const homeRoutes = require('./routes/homeRoutes')
const registerRoutes = require('./routes/registerRoutes')
const loginRoutes = require('./routes/loginRoutes')

app.use(express.static('public'));
app.use('/', homeRoutes);
app.use('/', registerRoutes)
app.use('/', loginRoutes)

app.set('view engine', 'ejs')

app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor funcionando');
}); /* heroku*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})