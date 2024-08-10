import { Router } from 'express';
import { createClassroom, getClassrooms, assignTeacher, assignStudents } from '../controller/classroom.controller.js';
import { checkPrincipal } from '../middleware/checkPrincipal.js';

const router = Router();

router.post('/', checkPrincipal, createClassroom);
router.get('/', getClassrooms);
router.put('/:id/assign-teacher', checkPrincipal , assignTeacher);
router.put('/:id/assign-students', checkPrincipal , assignStudents);

export default router;
