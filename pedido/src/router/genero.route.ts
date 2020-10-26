import { Router } from 'express';
import generoController from '../controller/genero.controller'

class GeneroRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de genero
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(generoController.findAll)
            .post(generoController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(generoController.findByID)
            .put(generoController.update)
            .delete(generoController.delete);
    }

}

export default new GeneroRoute().router;
