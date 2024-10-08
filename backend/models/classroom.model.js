import mongoose from 'mongoose';

// Define the schema for a classroom
const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, 
    required: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true  
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'  
  }],
  startTime: {
    type: String,
    required: true  
  },
  endTime: {
    type: String,
    required: true  
  },
  days: [{
    type: String,
    required: true  
  }],
}, {
  timestamps: true  
});

// Create and export the Classroom model based on the schema
export default mongoose.model('Classroom', classroomSchema);
