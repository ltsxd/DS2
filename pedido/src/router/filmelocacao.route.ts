import { Router } from 'express';
import filmelocacaoController from '../controller/filmelocacao.controller'

class FilmelocacaoRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de filmelocacao
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(filmelocacaoController.findAll)
            .post(filmelocacaoController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(filmelocacaoController.findByID)
            .put(filmelocacaoController.update)
            .delete(filmelocacaoController.delete);
    }

}

export default new FilmelocacaoRoute().router;
