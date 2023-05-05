import httpStatus from "http-status";
import supertest from "supertest";
import app, { init } from "../../src/app";
import { prisma } from "../../src/config/database";
import { createInvalidBody, createValidBody } from "../factories/users-factory";
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

  it("should respond with status 400 when the password confirmation does not match the password", async () => {
    const body = createInvalidBody("password");
    const response = await server.post("/users").send(body);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
    expect(response.text).toEqual(
      `[\"\\\"repeat_password\\\" must be [ref:password]\"]`
    );
  });
  it("should respond with status 409 when there is already a user with the given email", async () => {
    const body = createValidBody();
    await prisma.user.create({ data: body });
    const response = await server.post("/users").send({...body, repeat_password: body.password});

    expect(response.status).toBe(httpStatus.CONFLICT);
  });
  it("should respond with status 201 and create a user when body is valid", async () => {
    const body = createValidBody();
    const response = await server.post("/users").send({...body, repeat_password: body.password});

    const userCreated = await prisma.user.findUnique({where: {
      email: body.email
    }})

    expect(response.status).toBe(httpStatus.CREATED);
    expect(userCreated).toBeTruthy;
  });
});
