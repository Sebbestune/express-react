import express, { Express, Request, Response } from "express";
import bookRouter from "./routes/books";

const app: Express = express();

app.use("/books", bookRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default app;