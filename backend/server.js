import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectToDb } from './db/Connect.db.js';
import router from './routes/user.routes.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://unit-test-app-1.vercel.app', 
  optionsSuccessStatus: 200,
}));

app.use(express.json());

app.use(express.json());

app.use('/api/users',router);

const PORT=process.env.PORT;
app.listen(PORT,async()=>{
    await ConnectToDb();
    console.log(`port running on ${PORT}`);
})
