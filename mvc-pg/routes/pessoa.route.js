const express = require('express');
const routes = express.Router();
const PessoaController = require('../controller/pessoa.controller');

//listar todos o registros
routes.get('/pessoas'.PessoaController.find);

routes.get('/pessoas'.PessoaController.create);

//retorna apenas o item com o Id pasasdo por parametro na URI 
routes.get('/pessoas/:id'.PessoaController.findOne);

module.exports = routes;