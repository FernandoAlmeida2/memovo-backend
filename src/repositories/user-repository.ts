import { prisma } from "../config/database";
import { NewUser } from "../protocols/user";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findById(id: number) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

async function createUser(data: NewUser) {
  return prisma.user.create({ data });
}

const userRepository = {
  findByEmail,
  createUser,
  findById,
};

export default userRepository;
