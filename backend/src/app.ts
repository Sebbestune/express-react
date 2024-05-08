import express, { Express, Request, Response } from "express";
import cors from "cors";
import bookRouter from "./routes/books";
import connectDB from "./db/db"

const app: Express = express();

connectDB;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/books", bookRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default app;