import  express from "express";
import usersRouter from "./routes/users.route";
import Status from "./routes/status";
import errorHandler from "./midware/errorHandler";
import authorizationRoute from "./routes/authorization.route";
import basicAuthenticationMiddleware from "./midware/ads";
const app = express();


//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Configuração das rotas
app.use(Status);
app.use(usersRouter);
app.use(basicAuthenticationMiddleware, usersRouter);
app.use(authorizationRoute);

//Configuração dos Handlers de erro
app.use(errorHandler);

//Inicialização do servidor
app.listen('3000',() => console.log("Rodando na porta 3000"));




