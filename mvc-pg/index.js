const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./pg-connection');
const pessoaRoutes = require('./routes/pessoa.route');

//instanciar aplicação
const app = express();

//Porta da aplicação
const port = 3000;

//adiciona o body-parser a aplicação
app.use(bodyParser.json());

//rota para raiz
app.get('/', (req, res) => {
    res.send('<h1> Projeto de exemplo de conexão com Banco de Dados </h1>')
});

//adiciona rota pessoa para tabela "pessoa"
app.use(pessoaRoutes);


//estabelece conexão com o bando de dados
connection.connect()
    //se deu certo \/
    .then(() => {
        //levanta o serviço na porta 3000
        app.listen(port, () => {
            console.log('Executando na porta ' + port)
        });

    })
    //se der erro \/
    .catch(error => {
        console.log('Não foi possivel conectar ao banco de dados: ' +error.message);
    });
