import { Schema, model } from "mongoose";
import { IBook } from "../interfaces/IBook";

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: false },
  read: { type: Boolean, required: true },
});

const Book = model<IBook>("Book", bookSchema);

export default Book;
