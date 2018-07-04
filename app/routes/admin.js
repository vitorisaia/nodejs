module.exports = function(application) {
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia')
    })

    application.post('/noticias/salvar', function(req, res){
        const noticia = req.body
        
        req.assert('titulo','Título é obrigatório').notEmpty()
        req.assert('resumo','Resumo é obrigatório').notEmpty()
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
        req.assert('autor','Autor é obrigatório').notEmpty()
        req.assert('data_noticia','Data é obrigatório').notEmpty()//.isDate({format: 'YYYY-MM-DD'}) <- isDate foi removido!
        //https://stackoverflow.com/questions/47056283/typeerror-req-checkbody-optional-isdate-is-not-a-function 

        req.assert('noticia','Noticia é obrigatório').notEmpty()

        const errors = req.validationErrors()

        if (errors)
        {
            res.render('admin/form_add_noticia', {validacao : errors})
            return
        }

        const connection = application.config.dbConnection()
        const dao = new application.app.models.NoticiasDAO(connection); //second app is the app folder

        dao.salvarNoticia(noticia, function(error, result) {
            res.redirect('/noticias')})
    })
}
