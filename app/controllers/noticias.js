module.exports.noticias = function(app,req, res) {
    var connection = app.config.dbConnection()
    var dao = new app.app.models.NoticiasDAO(connection); //second app is the app folder

    dao.getNoticias(function(error, result) {
        res.render('noticias/noticias', {noticias : result})})
}

module.exports.noticia =  function(app, req, res){
    var connection = app.config.dbConnection()
    var dao = new app.app.models.NoticiasDAO(connection); //second app is the app folder

    dao.getNoticia(function(error, result) {
        res.render('noticias/noticia', {noticia : result})})
}
