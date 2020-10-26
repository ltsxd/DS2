import { Router } from 'express';
import livroController from '../controller/livro.controller'

class LivroRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de livro
        this.init();
    }

    private init(): void {
        //Rota raíz
        this.router.route('/')
            .get(livroController.findAll)
            .post(livroController.create);

        //Reta para um registro especificado pelo ID
        this.router.route('/:id([0-9]+)')
            .get(livroController.findByID)
            .put(livroController.update)
            .delete(livroController.delete);
    }

}

export default new LivroRoute().router;
