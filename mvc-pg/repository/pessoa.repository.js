const conn = require('../pg-connection')

module.exports = {
    find: () => {
        return conn.query('select * from pessoa');
    },

    findOne: (id) => {
        return conn.query('select * from pessoa where id = ' + id);
    },
    create: (pessoa) => {
        return conn.query("insert indo pessoa(nome, email, fone, endereco) values('"+pessoa.nome +"', '"+pessoa.email + "', '"+pessoa.fone +"', '"+pessoa.endereco +"')");
    }
}