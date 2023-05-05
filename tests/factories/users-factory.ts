import { faker } from "@faker-js/faker";

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
