var http = require('http')

var server = http.createServer( function(req, res){

    var category = req.url

    if (category == '/tecnologia') {
        res.end('<html><body>Notícias de tecnologia</body></html>')    
    }
    else if (category == '/moda') {
        res.end('<html><body>Notícias de moda</body></html>')    
    }
    else if (category == '/beleza') {
        res.end('<html><body>Notícias de beleza</body></html>')    
    } else {
        res.end('<html><body>Portal de noteecias</body></html>')
    }

}).listen(3000)