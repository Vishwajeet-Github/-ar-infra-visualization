const request = require("supertest");
const app = require("../src/app");

describe("API Endpoints", () => {

    test("GET /health should return server health", async() => {
        const res = await request(app).get("/health");

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("OK");
    });

    test("GET /api/status should return API status", async() => {
        const res = await request(app).get("/api/status");

        expect(res.statusCode).toBe(200);
        expect(res.body.api).toBe("running");
    });

});