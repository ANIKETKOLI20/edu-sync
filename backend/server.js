import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
//import userRoutes from './routes/user.routes.js';
import classroomRoutes from './routes/classroom.routes.js';
import timetableRoutes from './routes/timetable.routes.js';
import { connectMongoDB } from './db/connectMongoDB.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
//app.use('/api/users',  userRoutes);
app.use('/api/classrooms',  classroomRoutes);
app.use('/api/timetables',  timetableRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB()
});
  
