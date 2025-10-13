import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';


export const protect = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Not authorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
   
    if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
      return res.status(401).json({ message: 'Token invalid' });
    }

    req.user = { id: decoded.id as string }; 
    next();
  } catch {
    res.status(401).json({ message: 'Token invalid' });
  }
};

export const authorizeRole = (...allowedRoles: string[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};