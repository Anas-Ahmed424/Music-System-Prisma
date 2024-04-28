import {Router} from 'express'
import musicRoutes from './musicRoutes.js';
import userRoutes from './userRoutes.js';
import authRoutes from './authRoutes.js';

import express from 'express';


const router = Router()

const app = express();


router.use('/api/music', musicRoutes)
router.use('/api/user', userRoutes)
router.use('/api/auth', authRoutes)


export default router