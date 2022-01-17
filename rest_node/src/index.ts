import  express, {Request, Response, NextFunction}  from "express";
import usersRouter from "./routes/users.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.listen('3000',() => console.log("Rodando na porta 3000"));


app.get('/status', (req: Request, res: Response,next: NextFunction) => {
    res.status(200).send({foo: 'bar'});
});

app.use(usersRouter);