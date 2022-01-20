import { Request, Response } from "express";
import shortid from 'shortid'
import { config } from "../config/constant";
import { URLModel } from "../schemas/url";

export class urlController {
    public async shorten(req: Request, res: Response): Promise<void>{
        //Ver ser a url não existe
        const  {originURL} = req.body;
        const url = await URLModel.findOne( {originURL});
        if(url){
            res.json(url);
            return
        }
        //Criar o hash pra URL       
        const hash = shortid.generate();
        const shortURL = `${config.API_URL}/${hash}`;

        //Salvar a URL no banco 
        const newURL = await URLModel.create({ hash, shortURL, originURL})
        //Retornar a URL que agente salvou
        res.json({originURL, hash, shortURL});
    }

    public async redirect(req: Request, res: Response): Promise<void>{
        //Pegar o hash da URL
        const {hash} = req.params;
        const url = await URLModel.findOne({hash});
        if (url) {
            res.redirect(url.originURL);
            return
        }
        //Encontrar a url original
        //Redirecionar para url original 
        res.status(400).json({error: 'URL not found'});
    }
}