import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { LocacaoEntity } from "../entity/locacao.entity";

class LocacaoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const locacaos: LocacaoEntity[] = await getRepository(LocacaoEntity).find();
            res.send(locacaos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const locacao = req.body;

        try {

            await getRepository(LocacaoEntity).save( locacao );
            res.status(201).send(locacao);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar o registro pela ID
            const locacao = await getRepository(LocacaoEntity).findOne(id);

            //Se não exnotrar uma locacao, devolve erro 404
            if (locacao) {
                res.send(locacao);    
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
            const locacao = await getRepository(LocacaoEntity).findOne(id);

            //Se não exnotrar uma locacao, devolve erro 404
            if (locacao) {
                //Atualizar o registro
                await getRepository(LocacaoEntity).update(locacao.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = locacao.id;
                
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
            const locacao = await getRepository(LocacaoEntity).findOne(id);

            //Se não exnotrar uma locacao, devolve erro 404
            if (locacao) {
                //Excluir o registro
                await getRepository(LocacaoEntity).delete(locacao);

                res.status(204).send();

            } else {
                res.status(404).send({message: 'Record not found'})
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new LocacaoController();