module.exports = function(app) {
    app.get('/noticias', function(req, res){
        var connection = app.config.dbConnection()
        var dao = new app.app.models.NoticiasDAO(connection); //second app is the app folder

        dao.getNoticias(function(error, result) {
            res.render('noticias/noticias', {noticias : result})})
    }) 
}