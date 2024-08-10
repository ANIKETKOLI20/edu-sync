import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, 
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Principal', 'Teacher', 'Student'], required: true },
});

export default mongoose.model('User', userSchema);
