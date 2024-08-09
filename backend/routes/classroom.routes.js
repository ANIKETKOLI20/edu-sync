import { Router } from 'express';
import { createClassroom, getClassrooms } from '../controller/classroom.controller.js';

const router = Router();

router.post('/', createClassroom);
router.get('/', getClassrooms);


export default router;
