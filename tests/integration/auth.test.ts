import { faker } from "@faker-js/faker";
import httpStatus from "http-status";
import supertest from "supertest";
import app, { init } from "../../src/app";
import { createInvalidBody, createValidBody } from "../factories/users-factory";
import { createUser } from "../factories/users-factory";
import { cleanDb } from "../helpers";

const server = supertest(app);

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

describe("POST /auth", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/auth");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });
  it("should respond with status 400 when body is not valid", async () => {
    const { email, password } = createInvalidBody("email");

    const response = await server.post("/auth").send({ email, password });

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });

  describe("when body is valid", () => {
    it("should respond with status 401 if there is no user for given email", async () => {
      const { email, password } = createValidBody();

      const response = await server.post("/auth").send({ email, password });

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });
    it("should respond with status 401 if there is a user for given email but password is not correct", async () => {
      const body = createValidBody();
      await createUser(body);

      const response = await server.post("/auth").send({
        email: body.email,
        password: faker.internet.password(15, false, /^[a-zA-Z0-9]*$/),
      });

      expect(response.status).toBe(httpStatus.UNAUTHORIZED);
    });
    it("should respond with status 200 and session body", async () => {
      const body = createValidBody();
      await createUser(body);

      const response = await server.post("/auth").send({
        email: body.email,
        password: body.password,
      });

      expect(response.status).toBe(httpStatus.OK);
      expect(response.body).toEqual({
        name: body.name,
        userId: expect.any(Number),
        token: expect.any(String)
      });
    });
  });
});
