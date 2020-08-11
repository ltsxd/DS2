const express = require('express');
const routes = express.Router();

routes.get();

//efetua a operação de adição

app.get('/adicao', (req, res) => {
    const valores = req.body;
    const resultado = valores.a + valores.b;

    res.send({resultado: resultado});

});

//efetua a operação de subtração

app.get('/subtracao', (req, res) => {
    const valores = req.body;
    const resultado = valores.a - valores.b;

    res.send({resultado: resultado});

});

//efetua a operação de multiplicação

app.get('/multiplicacao', (req, res) => {
    const valores = req.body;
    const resultado = valores.a * valores.b;

    res.send({resultado: resultado});

});

//efetua a operação de divisão

app.get('/divisao', (req, res) => {
    const valores = req.body;
    const resultado = valores.a / valores.b;

    res.send({resultado: resultado});

});

module.exports 