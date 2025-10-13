import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  description: string;
  author: string;
  price: number;
  fileUrl: string;
  thumbnailUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    fileUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    category: { type: String, default: 'drawing' },
  },
  { timestamps: true }
);

export const Book = mongoose.model<IBook>('Book', bookSchema);
