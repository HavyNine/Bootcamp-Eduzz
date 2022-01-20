import express, { Request, Response } from 'express';
import { MongoConnection } from './database/mongo.connection';
import { urlController } from './urlController/urlController';

const app = express();
app.use(express.json());

const database = new MongoConnection();
database.connect();

const URLController = new urlController();
app.post('/shorten', URLController.shorten);
app.get('/:hash', URLController.redirect);

app.listen(3000, () => console.log('App rodando na 3000'));
