import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { FilmeEntity } from "../entity/filme.entity";

class FilmeController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const filmes: FilmeEntity[] = await getRepository(FilmeEntity).find();
            res.send(filmes);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const filme = req.body;

        try {

            await getRepository(FilmeEntity).save( filme );
            res.status(201).send(filme);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const filme = await getRepository(FilmeEntity).findOne(id);

            //Se não exnotrar uma filme, devolve erro 404
            if (filme) {
                res.send(filme);    
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
            const filme = await getRepository(FilmeEntity).findOne(id);

            //Se não exnotrar uma filme, devolve erro 404
            if (filme) {
                //Atualizar o registro
                await getRepository(FilmeEntity).update(filme.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = filme.id;
                
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
            const filme = await getRepository(FilmeEntity).findOne(id);

            //Se não exnotrar uma filme, devolve erro 404
            if (filme) {
                //Excluir o registro
                await getRepository(FilmeEntity).delete(filme);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new FilmeController();