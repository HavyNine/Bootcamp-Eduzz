import  {Router,Request, Response, NextFunction} from 'express';
const Status = Router();


Status.get('/status', (req: Request, res: Response,next: NextFunction) => {
    res.status(200).send({foo: 'bar'});
});

export default Status;