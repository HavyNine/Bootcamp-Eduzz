import moongoose from 'mongoose';
import { config } from '../config/constant';
export class MongoConnection {
    public async connect(): Promise<void>{
        try {
            await moongoose.connect(config.MONGO_CONNECTION);
            console.log('Conectado ao DB com sucesso');
        } catch (error) {
            console.error("Deu ruim");
            process.exit(1);
        }
    }
}