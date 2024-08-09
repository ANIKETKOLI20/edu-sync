import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';


// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());



// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
    connectMongoDB();
});
