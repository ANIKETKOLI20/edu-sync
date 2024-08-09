import { Router } from 'express';
import { createTimetable, getTimetables } from '../controller/timetable.controller.js';

const router = Router();

router.post('/', createTimetable);
router.get('/', getTimetables);

export default router;
