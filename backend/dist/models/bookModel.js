import mongoose, { Schema, Document } from 'mongoose';
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    fileUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    category: { type: String, default: 'drawing' },
}, { timestamps: true });
export const Book = mongoose.model('Book', bookSchema);
//# sourceMappingURL=bookModel.js.map