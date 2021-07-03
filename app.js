require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico.
app.use(express.static('public', { extensions: ['html'] }));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Jesús Zúñiga',
        titulo: 'Curso de NodeJs 2021'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Jesús Zúñiga',
        titulo: 'Curso de NodeJs 2021'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Jesús Zúñiga',
        titulo: 'Curso de NodeJs 2021'
    });
});

app.get('/form', (req, res) => {
    res.send('Ruta del formulario');
});

app.get('/clientes', (req, res) => {
    res.send('Catálogo de clientes');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`)
});

