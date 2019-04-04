/****** Configuration *******/

let jours = { 'mon' : 'Lundi',
              'tue' : 'Mardi',
              'wed' : 'Mercredi',
              'thu' : 'Jeudi',
              'fri' : 'Vendredi',
              'sat' : 'Samedi',
              'sun' : 'Dimanche' };


// On charge le framework Express...
var express = require('express');
// On crée l'application web
var app = express();
// On configure Express pour servir les fichiers contenus dans public/
// à l'url /s
app.use('/s', express.static('public'));

app.use('/s', express.static('static'));

const bodyP = require('body-parser');
app.use(bodyP.urlencoded({ extended: false }));

const cookieP = require('cookie-parser');
app.use(cookieP());





/****** Routes *******/

// On définit une route pour l'url /
app.all('/', function(req, res) {
  
  let i;
  res.write('<html>' + '<body>');
  for(i in req.query)
      res.write(i +" = "+req.query[i] + "<br>");
  for(i in req.body)
      res.write(i +" = "+req.body[i] + "<br>");
  for(i in req.headers)
      res.write(i +" = "+req.headers[i] + "<br>");
  for(i in req.cookies)
      res.write(i +" = "+req.cookies[i] + "<br>");
  res.write('</body>' + '</html>');
  res.send();
});

// On définit une route qui répond à toute url de la forme /blabla
// en répondant Hello blabla
app.get('/query_string', function(req, res) {
    res.send(req.query);
   // res.send(req._parsedUrl.query);
});

// On définit une route qui répond à toute url de la forme /blabla
// en répondant Hello blabla
app.get('/:n', function(req, res) {
    res.send('Bonjour <b>' + req.params.n + '</b>');
});

// On définit une route qui répond à toute url de la forme /blabla
// en répondant Hello blabla
app.post('/form_data', function(req, res) {
  
    res.send(req.body);
});

// On définit une route qui répond à toute url de la forme /blabla
// en répondant Hello blabla
app.all('/headers', function(req, res) {
    res.send(req.headers);
  //res.send(req.cookies);
});

// On définit une route qui répond à toute url de la forme /blabla
// en répondant Hello blabla
app.all('/cookies', function(req, res) {
    //res.send(req.headers);
  res.send(req.cookies);
});

/****** *******/

// On lance l'application
// (process.env.PORT est un paramètre fourni par Glitch)
app.listen(process.env.PORT);