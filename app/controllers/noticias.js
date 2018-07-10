module.exports.noticias = function(app,req, res) {
    var connection = app.config.dbConnection()
    var dao = new app.app.models.NoticiasDAO(connection); //second app is the app folder, cus it loads from the root

    dao.getNoticias(function(error, result) {
        res.render('noticias/noticias', {noticias : result})})
}

module.exports.noticia =  function(app, req, res){
    var connection = app.config.dbConnection()
    var dao = new app.app.models.NoticiasDAO(connection); //second app is the app folder, cus it loads from the root

    let id_noticia = req.query.id_noticia

    dao.getNoticia(id_noticia, function(error, result) {
        res.render('noticias/noticia', {noticia : result})})
}
