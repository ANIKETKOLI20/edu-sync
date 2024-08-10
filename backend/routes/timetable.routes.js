import { Router } from 'express';
import { createTimetable, getTimetables } from '../controller/timetable.controller.js';
import { checkPrincipal } from '../middleware/checkPrincipal.js';

const router = Router();

router.post('/', checkPrincipal , createTimetable);
router.get('/', getTimetables);

export default router;
