const express = require('express');
const app = express();

const oneController = require('./projects/projController')

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use(express.urlencoded({ extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.use('/',oneController);   


app.listen(3000, () => {
    console.log('Server listening on port 3000...')
})