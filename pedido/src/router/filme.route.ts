import { Router } from 'express';
import filmeController from '../controller/filme.controller'

class FilmeRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de filme
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(filmeController.findAll)
            .post(filmeController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(filmeController.findByID)
            .put(filmeController.update)
            .delete(filmeController.delete);
    }

}

export default new FilmeRoute().router;
