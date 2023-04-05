import { prisma } from "../config/database";

async function findByUserId(userId: number) {
  return prisma.session.findFirst({
    where: {
      userId,
    },
  });
}

async function findByToken(token: string) {
  return prisma.session.findFirst({ where: { token } });
}

async function createSession(token: string, userId: number) {
  return prisma.session.create({
    data: {
      token,
      userId,
    },
  });
}

const sessionRepository = {
  createSession,
  findByUserId,
  findByToken,
};

export default sessionRepository;
