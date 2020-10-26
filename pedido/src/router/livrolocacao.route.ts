import { Router } from 'express';
import livrolocacaoController from '../controller/livrolocacao.controller'

class LivrolocacaoRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de livrolocacao
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(livrolocacaoController.findAll)
            .post(livrolocacaoController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(livrolocacaoController.findByID)
            .put(livrolocacaoController.update)
            .delete(livrolocacaoController.delete);
    }

}

export default new LivrolocacaoRoute().router;
