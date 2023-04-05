import { SESSION_BOXES } from "../constants/userCard-constants";
import boxRepository from "../repositories/boxes-repository";
import cardRepository from "../repositories/card-repository";
import userRepository from "../repositories/user-repository";
import userCardRepository from "../repositories/userCard-repository";
import { currentSession, sortCardsId } from "../utils/card-utils";

async function getCardSession(userId: number, numCards: number) {
  const { createdAt } = await userRepository.findById(userId);
  const learningSession = currentSession(createdAt);
  const boxesId = await boxRepository.findMany(learningSession);
  const sessionCardsId = await userCardRepository.findSessionCards(
    userId,
    boxesId
  );
  const sortedCardsId = sortCardsId(sessionCardsId, numCards);
  
  return await cardRepository.findSessionCards(sortedCardsId);
}

const cardService = {
  getCardSession,
};

export default cardService;
