import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LivroLocacaoEntity } from "../entity/livrolocacao.entity";

class LivroLocacaoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const livrolocacaos: LivroLocacaoEntity[] = await getRepository(LivroLocacaoEntity).find();
            res.send(livrolocacaos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const livrolocacao = req.body;

        try {

            await getRepository(LivroLocacaoEntity).save( livrolocacao );
            res.status(201).send(livrolocacao);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const livrolocacao = await getRepository(LivroLocacaoEntity).findOne(id);

            //Se não exnotrar uma livrolocacao, devolve erro 404
            if (livrolocacao) {
                res.send(livrolocacao);    
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
            const livrolocacao = await getRepository(LivroLocacaoEntity).findOne(id);

            //Se não exnotrar uma livrolocacao, devolve erro 404
            if (livrolocacao) {
                //Atualizar o registro
                await getRepository(LivroLocacaoEntity).update(livrolocacao.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = livrolocacao.id;
                
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
            const livrolocacao = await getRepository(LivroLocacaoEntity).findOne(id);

            //Se não exnotrar uma livrolocacao, devolve erro 404
            if (livrolocacao) {
                //Excluir o registro
                await getRepository(LivroLocacaoEntity).delete(livrolocacao);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new LivroLocacaoController();