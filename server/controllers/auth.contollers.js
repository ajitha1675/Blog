import User from '../models/user.model.js'; // Adjust the path based on your file structure
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res) => {
   const { username, email, password } = req.body;

   // Validation
   if (!username || !email || !password || 
       username === '' || email === '' || password === '') {
      return res.status(400).json({
         message: 'All fields are required',
      });
   } {
      next(errorHandler(400, 'All fields are required!'));
   }

   const hashedPassword = bcryptjs.hashSync(password,10);

   const newUser = new User({
      username,
      email,
      password,
   });

   try {
      await newUser.save();
      res.json('Signup successfully');
   } catch (error) {
      next(error);
   }
};
