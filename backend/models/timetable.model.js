import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  day: { type: String, required: true }, // Example: 'Monday'
});

export default mongoose.model('Timetable', timetableSchema);
