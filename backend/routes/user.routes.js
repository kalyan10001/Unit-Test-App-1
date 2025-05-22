import express from 'express';
import { AddUser, DeleteUser, GetUser } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/',GetUser);

router.post('/',AddUser);

router.delete('/:id',DeleteUser);

export default router;