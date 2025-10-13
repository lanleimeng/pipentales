import type { Request, Response } from 'express';
import { Book } from '../models/bookModel.js';

//get all books
export const getBooks = async (_req: Request, res: Response) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// get book by id
export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// add book for admin
export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description, author, price, fileUrl, thumbnailUrl, category } = req.body;
    const book = await Book.create({ title, description, author, price, fileUrl, thumbnailUrl, category });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

