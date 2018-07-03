module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia')
    })

    application.post('/noticias/salvar', function(req, res){
        const noticia = req.body
        
        const connection = application.config.dbConnection()
        const dao = new application.app.models.NoticiasDAO(connection); //second app is the app folder

        dao.salvarNoticia(noticia, function(error, result) {
            res.redirect('/noticias')})
    })
}
