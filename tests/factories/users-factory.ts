import { faker } from "@faker-js/faker";
import { prisma } from "../../src/config/database";
import { NewUser } from "../../src/protocols/user";
import bcrypt from "bcrypt";

export function createValidBody() {
  const password = faker.internet.password(15, false, /^[a-zA-Z0-9]*$/);
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password,
  };
}

export function createInvalidBody(field: string) {
  const password = faker.internet.password(15, false, /^[a-zA-Z0-9]*$/);
  if (field === "email") {
    return {
      name: faker.name.firstName(),
      email: faker.datatype.string(),
      password,
      repeat_password: password,
    };
  }

  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password,
    repeat_password: faker.internet.password(15, false, /^[a-zA-Z0-9]*$/),
  };
}

export async function createUser(body: NewUser) {
  const hashedPassword = await bcrypt.hash(body.password, 10);
  return prisma.user.create({
    data: {
      ...body,
      password: hashedPassword,
    },
  });
}
