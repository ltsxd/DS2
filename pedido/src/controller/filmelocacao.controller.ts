import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { FilmeLocacaoEntity } from "../entity/filmelocacao.entity";

class FilmeLocacaoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const filmelocacaos: FilmeLocacaoEntity[] = await getRepository(FilmeLocacaoEntity).find();
            res.send(filmelocacaos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const filmelocacao = req.body;

        try {

            await getRepository(FilmeLocacaoEntity).save( filmelocacao );
            res.status(201).send(filmelocacao);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const filmelocacao = await getRepository(FilmeLocacaoEntity).findOne(id);

            //Se não exnotrar uma filmelocacao, devolve erro 404
            if (filmelocacao) {
                res.send(filmelocacao);    
            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Buscar o registro pela ID
            const filmelocacao = await getRepository(FilmeLocacaoEntity).findOne(id);

            //Se não exnotrar uma filmelocacao, devolve erro 404
            if (filmelocacao) {
                //Atualizar o registro
                await getRepository(FilmeLocacaoEntity).update(filmelocacao.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = filmelocacao.id;
                
                res.send(novo);

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const filmelocacao = await getRepository(FilmeLocacaoEntity).findOne(id);

            //Se não exnotrar uma filmelocacao, devolve erro 404
            if (filmelocacao) {
                //Excluir o registro
                await getRepository(FilmeLocacaoEntity).delete(filmelocacao);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new FilmeLocacaoController();