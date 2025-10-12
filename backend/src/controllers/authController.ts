import type { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import type { IUser } from '../models/userModel.js';  

// Generate JWT token
const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
};

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
 
  const { name, email, password } = req.body as {
    name: string;
    email: string;
    password: string;
  };

  try {
    
    const existingUser: (IUser & { _id: any }) | null = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const user: IUser & { _id: any } = await User.create({ name, email, password });

    const token = generateToken(user._id.toString());

    res.status(201).json({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Login existing user
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as {
    email: string;
    password: string;
  };

  try {
    const user: (IUser & { _id: any; comparePassword: (password: string) => Promise<boolean> }) | null =
      await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id.toString());

    res.json({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
