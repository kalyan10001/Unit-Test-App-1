import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectToDb } from './db/Connect.db.js';
import router from './routes/user.routes.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'https://unit-test-app-1.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 

app.use(express.json());

app.use('/api/users', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await ConnectToDb();
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error('Failed to connect to DB:', err);
  }
});
