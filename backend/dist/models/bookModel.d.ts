import mongoose, { Document } from 'mongoose';
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
export declare const Book: mongoose.Model<IBook, {}, {}, {}, mongoose.Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=bookModel.d.ts.map