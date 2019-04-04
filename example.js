/****** Configuration *******/

// On charge le framework Express...
var express = require('express');
// On crée l'application web
var app = express();
// On configure Express pour servir les fichiers contenus dans public/
// à l'url /s
app.use('/s', express.static('public'));

/****** Routes *******/

// On définit une route pour l'url /
app.get('/', function(req, res) {
    res.send('Hello world!');
});

// On définit une route qui répond à toute url de la forme /blabla
// en répondant Hello blabla
app.get('/:n', function(req, res) {
    res.send('Hello <b>' + req.params.n + '</b>');
});

/****** *******/

// On lance l'application
// (process.env.PORT est un paramètre fourni par Glitch)
app.listen(process.env.PORT);
