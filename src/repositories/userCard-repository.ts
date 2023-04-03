import { prisma } from "../config/database";

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

const userCardRepository = {
  createUserDeck,
};

export default userCardRepository;
