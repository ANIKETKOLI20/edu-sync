import Classroom from '../models/classroom.model.js';
import User from '../models/user.model.js';

export const createClassroom = async (req, res) => {
  const { name, teacher, students , startTime, endTime, days } = req.body;

  try {
    const classroom = new Classroom({ name, teacher, students, startTime, endTime, days });
    await classroom.save();
    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Error creating classroom', error });
  }
};

export const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find()
      .populate({
        path: 'teacher',
        select: '-password', 
      })
      .populate({
        path: 'students',
        select: '-password', 
      });
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching classrooms', error });
  }
};

export const assignTeacher = async (req, res) => {
  const { id } = req.params;
  const { teacher } = req.body;

  try {
    // Find the user by the provided teacher ID
    const user = await User.findById(teacher).select("-password");
    console.log(user); // Log the user for debugging purposes

    // Check if the user exists and has the 'Teacher' role
    if (!user || user.role !== 'teacher') {
      return res.status(400).json({ message: 'Invalid teacher ID or user is not a teacher' });
    }

    // Find the classroom by ID
    const classroom = await Classroom.findById(id);

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    // Assign the teacher and save the classroom
    classroom.teacher = teacher;
    await classroom.save();

    res.status(200).json({ message: 'Teacher assigned successfully', classroom });
  } catch (error) {
    res.status(500).json({ message: 'Error assigning teacher', error });
  }
};

export const assignStudents = async (req, res) => {
  const { studentIds } = req.body;
  
  try {
    const classroom = await Classroom.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { students: { $each: studentIds } } },
      { new: true }
    );

    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    res.status(200).json(classroom);
  } catch (error) {
    console.error('Error assigning students:', error); // Log the full error for debugging
    res.status(500).json({ message: 'Error assigning students', error: error.message });
  }
};

