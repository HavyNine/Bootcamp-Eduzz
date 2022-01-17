import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'

const usersRouter = Router();

usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Renan'}];
    res.json({users}).status(StatusCodes.OK);
});

usersRouter.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);
})

usersRouter.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.send(newUser).status(StatusCodes.CREATED);
});

usersRouter.put('/user/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const userAtt = req.params.uuid;
    //chamada do servidor para o put
    res.sendStatus(StatusCodes.OK);
});

usersRouter.delete('/user/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const user = req.params.uuid;
    console.log("Usuário deletado do BD");
    res.sendStatus(StatusCodes.OK);
});

export default usersRouter;