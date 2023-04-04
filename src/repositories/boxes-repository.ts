import { prisma } from "../config/database";
import { SESSION_BOXES } from "../constants/userCard-constants";

async function findMany(session: number) {
  const boxes = await prisma.box.findMany({
    where: {
      OR: SESSION_BOXES[session],
    },
    select: {
      id: true,
    },
  });

  return boxes.map((elem) => {
    return { boxId: elem.id };
  });
}

async function findBox(boxId: number) {
  return prisma.box.findUnique({
    where: { id: boxId },
  });
}

const boxRepository = {
  findMany,
  findBox,
};

export default boxRepository;
