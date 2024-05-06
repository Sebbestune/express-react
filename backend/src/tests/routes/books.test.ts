import request from "supertest";
import app from "../../app";

describe("Test express book feature", () => {
    test("'Getting all books' should respond to GET method", async () => {
        const response = await request(app).get('/api/books');
        expect(response.statusCode).toBe(200);
    })

    test("Should include 2 books", async () => {
        const response = await request(app).get('/api/books');
        expect(response.body).toStrictEqual({"books": [{"author": "Sebbe", "pages": 394, "title": "The green book"}, {"author": "Tomas", "pages": 584, "title": "The red book"}], "totalBooks": 2});
    })
})