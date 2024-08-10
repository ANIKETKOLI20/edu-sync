import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import classroomRoutes from './routes/classroom.routes.js';
import timetableRoutes from './routes/timetable.routes.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import { protectRoute } from './middleware/protectRoute.js';


dotenv.config();

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', protectRoute , userRoutes);
app.use('/api/classrooms', protectRoute , classroomRoutes);
app.use('/api/timetables', protectRoute , timetableRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB()
});
  
