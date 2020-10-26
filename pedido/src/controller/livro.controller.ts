import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LivroEntity } from "../entity/livro.entity";

class LivroController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const livros: LivroEntity[] = await getRepository(LivroEntity).find();
            res.send(livros);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const livro = req.body;

        try {

            await getRepository(LivroEntity).save( livro );
            res.status(201).send(livro);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const livro = await getRepository(LivroEntity).findOne(id);

            //Se não exnotrar uma livro, devolve erro 404
            if (livro) {
                res.send(livro);    
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
            const livro = await getRepository(LivroEntity).findOne(id);

            //Se não exnotrar uma livro, devolve erro 404
            if (livro) {
                //Atualizar o registro
                await getRepository(LivroEntity).update(livro.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = livro.id;
                
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
            const livro = await getRepository(LivroEntity).findOne(id);

            //Se não exnotrar uma livro, devolve erro 404
            if (livro) {
                //Excluir o registro
                await getRepository(LivroEntity).delete(livro);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new LivroController();