import jwt from 'jsonwebtoken';
export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Not authorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
            return res.status(401).json({ message: 'Token invalid' });
        }
        req.user = { id: decoded.id };
        next();
    }
    catch {
        res.status(401).json({ message: 'Token invalid' });
    }
};
//# sourceMappingURL=authMiddleware.js.map