import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { GeneroEntity } from "../entity/genero.entity";

class GeneroController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const generos: GeneroEntity[] = await getRepository(GeneroEntity).find();
            res.send(generos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const genero = req.body;

        try {

            await getRepository(GeneroEntity).save( genero );
            res.status(201).send(genero);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const genero = await getRepository(GeneroEntity).findOne(id);

            //Se não exnotrar uma genero, devolve erro 404
            if (genero) {
                res.send(genero);    
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
            const genero = await getRepository(GeneroEntity).findOne(id);

            //Se não exnotrar uma genero, devolve erro 404
            if (genero) {
                //Atualizar o registro
                await getRepository(GeneroEntity).update(genero.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = genero.id;
                
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
            const genero = await getRepository(GeneroEntity).findOne(id);

            //Se não exnotrar uma genero, devolve erro 404
            if (genero) {
                //Excluir o registro
                await getRepository(GeneroEntity).delete(genero);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new GeneroController();