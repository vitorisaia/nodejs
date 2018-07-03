var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')

var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

//body-parser é um middleware, tem que vir antes do consign;
//tem que botar isso pra o conteúdo dos forms virem traduzidos para JSON
app.use(bodyParser.urlencoded({extended:true}))

consign().include('app/routes')
.then('config/dbConnection.js') //se não colocar a extensão ele acha que é pasta
.then('app/models')
.into(app)



module.exports = app