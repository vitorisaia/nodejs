var express = require('express') //fetch express
var app = express() //ou require('express')()
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = app