import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();


router.get('/test', (req,res)=>{
  res.json({message: 'Server route is working!!'})
})

export default router;