var mysql = require('mysql')

var connMySQL = function() {
    console.log('mysql connection established')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portal_noticias'
    })
}

module.exports = function() { 
    console.log('dbConnection autoloaded')
    return connMySQL
}
