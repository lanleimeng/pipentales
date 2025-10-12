import type { IUser } from '../../models/userModel.js';

declare global {
  namespace Express {
    interface Request {
      user?: IUser | { id: string }; // optional, matches what you attach in middleware
    }
  }
}
