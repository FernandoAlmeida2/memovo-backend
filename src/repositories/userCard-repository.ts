import { prisma } from "../config/database";

async function createUserDeck(userId: number) {
  const userDeck = [];
  const { id: boxId } = await prisma.box.findFirst({
    where: { name: "CURRENT" },
  });
  const cards = await prisma.card.findMany();
  for (let i = 0; i < cards.length; i++) {
    userDeck.push({
      userId,
      cardId: cards[i].id,
      boxId,
    });
  }
  return await prisma.userCard.createMany({
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
