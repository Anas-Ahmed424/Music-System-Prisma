import { Router } from 'express';

import { updateMusic, fetchMusics, showMusic, deleteMusic, createMusic } from '../Controller/MusicController.js';

const router = Router()

router.post('/create', createMusic);
router.post('/update/:id', updateMusic);
router.get('/fetch', fetchMusics);
router.get('/', showMusic);
router.delete('/:id', deleteMusic);

export default router;