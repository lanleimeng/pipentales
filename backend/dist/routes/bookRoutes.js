import express from 'express';
import { getBooks, getBookById, createBook } from '../controllers/bookController.js';
import { authorizeRole, protect } from '../middleware/authMiddleware.js';
const router = express.Router();
//public routes
router.get('/', getBooks);
router.get('/:id', getBookById);
//admin routes
router.post('/', protect, authorizeRole('admin'), createBook);
export default router;
//# sourceMappingURL=bookRoutes.js.map