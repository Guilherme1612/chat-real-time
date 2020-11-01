const { emit } = require("../../config/server");

module.exports.index = (app, req, res) => {
    const { apelido } = req.body;

    req.assert('apelido', 'O nome ou apelido não pode ser vazio').notEmpty();
    req.assert('apelido', 'O nome ou apelido de conter entre 3 e 15 caracteres').len(3, 15);

    const erros = req.validationErrors();

    if (erros) {
        res.render('index', { validacao: erros });
    }

    app.get('io').emit(
        'msgParaCliente',
        {
            apelido,
            mensagem: ' acabou de entrar no chat!'
        }
    );

    res.render('chat');
}