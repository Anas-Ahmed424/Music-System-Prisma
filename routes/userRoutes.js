import { Router } from 'express';

import { updateUser, fetchUsers, showUser, deleteUser, createUser } from '../Controller/UserController.js';

const router = Router()

router.post('/add', createUser);
router.post('/update/:id', updateUser);
router.get('/fetch', fetchUsers);
router.get('/', showUser);
router.delete('/:id', deleteUser);

export default router;