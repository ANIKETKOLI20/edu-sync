
import { Router } from 'express';
import { getUserDetails, updateUserDetails, deleteUser } from '../controller/user.controller.js';
import { checkPrincipal } from '../middleware/checkPrincipal.js';

const router = Router();

router.get('/:id', getUserDetails);
router.put('/:id', checkPrincipal , updateUserDetails);
router.delete('/:id', checkPrincipal ,  deleteUser);

export default router;

 
