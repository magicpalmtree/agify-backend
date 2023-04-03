import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import request from './utils/request';
import { predictHandler } from './controllers/predictController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send("Api running");
});

app.post('/predict', (req: Request, res: Response, next: NextFunction) => request(predictHandler, req, res, next));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});