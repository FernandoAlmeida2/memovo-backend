import httpStatus from "http-status";
import supertest from "supertest";
import app, { init } from "../../src/app";
import { createInvalidBody } from "../factories/users-factory";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

describe("POST /users", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/users");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  it("should respond with status 400 when email is invalid", async () => {
    const body = createInvalidBody("email");
    const response = await server.post("/users").send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
    expect(response.text).toEqual(`[\"\\\"email\\\" must be a valid email\"]`);
  });
});
