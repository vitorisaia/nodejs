module.exports = function(app) {
    app.get('/noticia', function(req, res){
        var connection = app.config.dbConnection()
        var noticiasModel = app.app.models.noticiasModel; //second app is the app folder

        noticiasModel.getNoticia(connection, function(error, result) {
            res.render('noticias/noticia', {noticia : result})})
    }) 
}