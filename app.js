var express = require('express') //fetch express
var app = express() //ou require('express')()

app.get('/', function(req, res){
    res.send('<html><body>Portal de noteecias</body></html>') //send é do express; end é node puro
})

app.listen(3000, function() {
    console.log('Servidor rodando com Express')
})