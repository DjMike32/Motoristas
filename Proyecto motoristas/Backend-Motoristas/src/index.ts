import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { ruta as usuariosRouters} from './routers/Usuarios.routers'


dotenv.config();



const app: Express = express();
const port:string | undefined = process.env.PORT;


app.use('/Usuarios', usuariosRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});