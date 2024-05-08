import { IBook } from "../interfaces/IBook";
import Book from "../models/bookModel";

const create = async (data: IBook) => {
  return await Book.create(data);
};
const readAll = async () => {
  const books = await Book.find({});
  return books;
};
const read = async (id: any) => {
  return await Book.findById(id);
};
const update = async (id: any, data: IBook) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};
const deleteOne = async (id: any) => {
  return await Book.findByIdAndDelete(id);
};

export const getAllBooks = async (req: any, res: any) => {
  const books = await readAll();
  res.status(200).json(books);
};
export const addBook = async (req: any, res: any) => {
  const { title, author, publisher, read } = req.body;

  const result = await create({ title, author, publisher, read });

  res.status(201).json({ message: "Book created successfully", book: result });
};
export const getBook = async (req: any, res: any) => {
  const id = req.params.id;
  const book = await read(id);

  res.status(200).json(book);
};
export const updateBook = async (req: any, res: any) => {
  const { title, author, publisher, read } = req.body;
  const id = req.params.id;

  const updatedBook = await update(id, { title, author, publisher, read });

  res
    .status(200)
    .json({ message: "Update succeeded", updatedBook: updatedBook });
};
export const deleteBook = async (req: any, res: any) => {
  const id = req.params.id;

  const deletedBook = await deleteOne(id);

  res.status(200).json({ message: "Book deleted", deletedBook: deletedBook });
};
