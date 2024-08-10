import Timetable from '../models/timetable.model.js';
import mongoose from 'mongoose';

export const createTimetable = async (req, res) => {
  const { classroomId, startTime, endTime, day } = req.body;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(classroomId)) {
    return res.status(400).json({ message: 'Invalid classroom ID' });
  }

  try {
    const timetable = new Timetable({
      classroom: classroomId,
      startTime,
      endTime,
      day,
    });

    await timetable.save();
    res.status(201).json(timetable);
  } catch (error) {
    res.status(500).json({ message: 'Error creating timetable', error });
  }
};

export const getTimetables = async (req, res) => {
  try {
    const timetables = await Timetable.find().populate('classroom');
    res.status(200).json(timetables);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timetables', error });
  }
};
