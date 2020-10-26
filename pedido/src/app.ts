import cors from 'cors';

import clienteRoute from './router/cliente.route'
import filmeRoute from './router/filme.route'
import filmelocacaoRoute from './router/filmelocacao.route'
import generoRoute from './router/genero.route'
import livroRoute from './router/livro.route'
import livrolocacaoRoute from './router/livrolocacao.route'
import locacaoRoute from './router/locacao.route'

export class App {
    public express: express.Application;
@@ -20,6 +24,10 @@ export class App {
    

    private routes(): void {
        this.express.use('/clientes', clienteRoute);
        this.express.use('/filmes', filmeRoute);
        this.express.use('/filmelocacaos', filmelocacaoRoute);
        this.express.use('/generos', generoRoute);
        this.express.use('/livro', livroRoute)
        this.express.use('/livrolocacao', livrolocacaoRoute)
        this.express.use('/locacao', locacaoRoute)
    }

}
