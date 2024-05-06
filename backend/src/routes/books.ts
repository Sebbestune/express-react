import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
    res.send({totalBooks: 2, books: [
        {
            author: "Sebbe",
            title: "The green book",
            pages: 394
        },
        {
            author: "Tomas",
            title: "The red book",
            pages: 584
        },
        
    ]});
})

export default bookRouter;