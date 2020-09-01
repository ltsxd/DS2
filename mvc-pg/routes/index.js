const express = require('express');
const routes = new express.Router();

//Importa as rotas da aplicação
const cidadeRoute = require('../routes/cidade.route');
const pessoaRoute = require('../routes/pessoa.route');
const usuarioRoute = require('../routes/usuario.route');

const fotoRoute = require('./foto.route');
const curtidaRoute = require('./curtida.route');
const comentarioRoute = require('./comentario.route');

routes.use('/cidades', cidadeRoute);
routes.use('/pessoas', pessoaRoute);
routes.use('/account', usuarioRoute);

routes.use('/fotos', fotoRoute);
routes.use('/curtida', curtidaRoute);
routes.use('/comentario', comentarioRoute);

module.exports = routes;