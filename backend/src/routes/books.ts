import { Router } from "express";
import { addBook, changeAmountOfBooks, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/bookcontroller";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/", addBook);
bookRouter.get("/:id", getBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

bookRouter.post("/change/:id-:amount", changeAmountOfBooks)

export default bookRouter;
