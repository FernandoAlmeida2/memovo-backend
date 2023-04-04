import { prisma } from "../config/database";
import { cardIdMapped } from "../utils/card-utils";

async function findSessionCards(cardsId: cardIdMapped) {
  return prisma.card.findMany({
    where: {
      OR: cardsId,
    },
    include: {
      Translation: {
        select: {
          translation: true,
        },
        take: 3
      },
    },
  });
}

const cardRepository = {
  findSessionCards,
};

export default cardRepository;
