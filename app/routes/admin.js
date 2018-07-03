module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia')
    })

    application.post('/noticias/salvar', function(req, res){
        const noticia = req.body
        
        const connection = application.config.dbConnection()
        const noticiasModel = application.app.models.noticiasModel; //second app is the app folder

        noticiasModel.salvarNoticia(noticia, connection, function(error, result) {
            res.redirect('/noticias')})
    })
}
