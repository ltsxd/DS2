import { Router } from 'express';
import clienteController from '../controller/cliente.controller'

class ClienteRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de cliente
        this.init();
    }

    private init(): void {
        this.router.get('/', clienteController.findAll)
        this.router.post('/', clienteController.create)
    }

}

export default new ClienteRoute().router;