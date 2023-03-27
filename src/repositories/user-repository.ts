import { prisma } from "../config/database";
import { NewUser } from "../protocols/user";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function createUser(data: NewUser) {
  return prisma.user.create({ data });
}

const userRepository = {
  findByEmail,
  createUser,
};

export default userRepository;
