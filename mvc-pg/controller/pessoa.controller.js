const pessoaRepository = require('../repository/pessoa.repository');

module.exports = {
    //Retorna tudo
    find: (req, res) => {
        pessoaRepository.find()
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },
    //Retorna pelo ID
    findOne: (req, res) => {
        const id = req.params.id;
        pessoaRepository.findOne(id)
            .then((result) => {
                if (result.rows.length > 0) {
                    res.send(result.rows[0]);
                } else {
                    res.status(404).send({ msg: 'Registro não encontrado' });
                }
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },
    //Adiciona um registro
    create: (req, res) => {
        const pessoa = req.body;
        pessoaRepository.create( pessoa )
            .then((result) => {
                res.send(result.rows);
            })
            .catch((error) => {
                res.status(500).send({ msg: error.message });
            });
    },
}