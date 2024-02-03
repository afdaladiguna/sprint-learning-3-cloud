const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/profile', (req, res) => {
    res.send({
        name: 'afdal',
        email: 'afdal@gmail.com',
        address: 'gowa',
    })
})

app.listen(3000, () => {
    console.log('Server listening to 3000');
})