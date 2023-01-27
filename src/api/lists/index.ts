import { Router } from 'express';
import { isAuthenticated, hasRole } from '../../auth/auth.services';


import {
    handleAllGetLists,
    handleGetLists,
    handleCreateLists,
    handleDeleteLists,
    handleUpdateLists,
    
} from './lists.controller';

const router = Router();
// RESTful API

// GET /api/users
router.get('/',isAuthenticated, handleAllGetLists);
// GET /api/users/:id
router.get('/:id', handleGetLists);
// POST /api/users
router.post('/',isAuthenticated, handleCreateLists);
// PATCH /api/users/:id
router.patch('/edit/:id',isAuthenticated, handleUpdateLists);
// DELETE /api/users/:id
router.delete('/:id', isAuthenticated, hasRole(['USER']), handleDeleteLists);


export default router;