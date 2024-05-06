import request from "supertest";
import app from "../app";

describe("Test express app root", () => {
    test("Root should respond to GET method", async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    })

    test("Root should include text 'Express + TypeScript Server'", async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe("Express + TypeScript Server");
    })
})