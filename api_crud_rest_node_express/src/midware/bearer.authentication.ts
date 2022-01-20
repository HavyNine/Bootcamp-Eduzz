import { Request,NextFunction, Response } from "express";
import ForbiddenError from "../models/forbidden.error";
import JWT from 'jsonwebtoken';


async function beareAuthentication(req: Request, res: Response, next: NextFunction){
    try {
        const authorizationHeader =  req.headers['authorization']
        
        if (!authorizationHeader) {

            throw new ForbiddenError('Credenciais não informadas');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if (authenticationType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }

        const tokenPaylod = JWT.verify(token, 'my_secret_key');
        

        if(typeof tokenPaylod !== 'object' || !tokenPaylod.sub){
            throw new ForbiddenError('Token inválido');
        }

        
        const user = {
            uuid: tokenPaylod.sub,
            username: tokenPaylod.username
        };
        req.user = user;
        next();

    } catch (error) {
        next(error);
    }
}


export default beareAuthentication;