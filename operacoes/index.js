const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

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

//   /subtracao, /multiplicacao e /divisao
app.listen(port, () => {
    console.log('Running in port '+port)
});