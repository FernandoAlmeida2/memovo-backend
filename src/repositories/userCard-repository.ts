import { prisma } from "../config/database";
import { SESSION_BOXES } from "../constants/userCard-constants";

async function createUserDeck(userId: number) {
  const userDeck = [];
  const { id: boxId } = await prisma.box.findFirst({
    where: { name: "CURRENT" },
  });
  const totalOfCards = await prisma.card.count();
  const { id: initialId } = await prisma.card.findFirst();
  for (let cardId = initialId; cardId <= totalOfCards; cardId++) {
    userDeck.push({
      userId,
      cardId,
      boxId,
    });
  }
  return prisma.userCard.createMany({
    data: userDeck,
  });
}

async function findSessionCards(userId: number, boxesId: boxesIdArray) {
  return prisma.userCard.findMany({
    where: {
      userId,
      OR: boxesId,
    },
    select: {
      cardId: true,
    },
  });
}

async function findUserCard(userId: number, cardId: number) {
  return prisma.userCard.findFirst({
    where: {
      userId,
      cardId,
    },
  });
}

async function updateBox(id: number, newBox: string) {
  const { id: newBoxId } = await prisma.box.findFirst({
    where: { name: newBox },
  });
  return prisma.userCard.update({
    where: {
      id,
    },
    data: {
      boxId: newBoxId,
    },
  });
}

export type boxesIdArray = { boxId: number }[];

const userCardRepository = {
  createUserDeck,
  findSessionCards,
  findUserCard,
  updateBox,
};

export default userCardRepository;
