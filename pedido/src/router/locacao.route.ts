import { Router } from 'express';
import locacaoController from '../controller/locacao.controller'

class LocacaoRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de locacao
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(locacaoController.findAll)
            .post(locacaoController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(locacaoController.findByID)
            .put(locacaoController.update)
            .delete(locacaoController.delete);
    }

}

export default new LocacaoRoute().router;
