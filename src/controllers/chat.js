module.exports.index = (app, req, res) => {
    const { apelido } = req.body;

    req.assert('apelido', 'O nome ou apelido de conter entre 3 e 15 caracteres').len(3, 15);

    const erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
        return;
    }

    app.get('io').emit(
        'novoParticipante',
        {
            apelido,
            mensagem: 'Entrou na conversa!'
        }
    );

    res.render('chat', { apelido });
}