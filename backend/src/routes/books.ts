import { Router } from "express";
import { getAllBooks } from "../controllers/bookcontroller";

const bookRouter = Router();

bookRouter.get("/", getAllBooks)

export default bookRouter;