import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { ConnectToDb } from './db/Connect.db.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT=process.env.PORT;

app.listen(PORT,async()=>{
    await ConnectToDb();
    console.log(`port running on ${PORT}`);
})
