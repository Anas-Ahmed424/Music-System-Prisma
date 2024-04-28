import { Router } from 'express';
import { loginUser } from '../Controller/authController.js';

const router = Router()

router.post('/login', loginUser);

export default router;
