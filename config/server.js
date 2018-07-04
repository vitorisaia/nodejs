var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

//body-parser é um middleware, tem que vir antes do consign;
//tem que botar isso pra o conteúdo dos forms virem traduzidos para JSON
app.use(bodyParser.urlencoded({extended:true}))

//express-validator é um middleware, tem que vir antes do consign;
//usamos pra validar inputs; pelo fato de ser um middleware, os
//objetos de request nas rotas já virão populados com uma função 'assert()'
app.use(expressValidator())

consign().include('app/routes')
.then('config/dbConnection.js') //se não colocar a extensão ele acha que é pasta
.then('app/models')
.then('app/controllers')
.into(app)



module.exports = app