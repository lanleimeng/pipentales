import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};
// Register a new user
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: 'Email already exists' });
        const user = await User.create({ name, email, password });
        const token = generateToken(user._id.toString());
        res.status(201).json({
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            token,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
// Login existing user
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: 'Invalid credentials' });
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.status(400).json({ message: 'Invalid credentials' });
        const token = generateToken(user._id.toString());
        res.json({
            _id: user._id.toString(),
            name: user.name,
            email: user.email,
            token,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
//# sourceMappingURL=authController.js.map