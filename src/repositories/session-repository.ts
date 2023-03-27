import { prisma } from "../config/database";

async function findByUserId(userId: number) {
  return prisma.session.findFirst({
    where: {
      userId,
    },
  });
}

async function createSession(token: string, userId: number) {
  const session = prisma.session.findFirst({
    where: { userId },
  });
  if (session) {
    return session;
  }

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
};

export default sessionRepository;
