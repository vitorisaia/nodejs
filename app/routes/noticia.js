module.exports = function(app) {
    app.get('/noticia', function(req, res){
        var connection = app.config.dbConnection()
        var dao = new app.app.models.NoticiasDAO(connection); //second app is the app folder

        dao.getNoticia(function(error, result) {
            res.render('noticias/noticia', {noticia : result})})
    }) 
}