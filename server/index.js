import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
      console.log('MongoDB is connected');
   })
   .catch(err => {
      console.log('Error connecting to MongoDB:', err);
   });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Server listening
app.listen(4000, () => {
   console.log('Server is running on port 4000');
});

app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';

   res.status(statusCode).json({
      success: false,
      statusCode,
      message,
   })
})