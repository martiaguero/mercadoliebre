const express = require('express')
const path = require('path')
const app = express()
const port = 3030

app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor funcionando');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})