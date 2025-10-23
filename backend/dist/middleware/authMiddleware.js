import jwt from 'jsonwebtoken';
import { User } from "../models/userModel.js";
export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Not authorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
            return res.status(401).json({ message: 'Token invalid' });
        }
        const user = await User.findById(decoded.id).select("-password");
        if (!user)
            return res.status(401).json({ message: 'Not authorized' });
        req.user = user;
        next();
    }
    catch {
        res.status(401).json({ message: 'Token invalid' });
    }
};
export const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};
//# sourceMappingURL=authMiddleware.js.map