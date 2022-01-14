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

export default usersRouter;