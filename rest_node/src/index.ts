import  express from "express";
import usersRouter from "./routes/users.route";
import Status from "./routes/status";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(Status);
app.use(usersRouter);

app.listen('3000',() => console.log("Rodando na porta 3000"));




