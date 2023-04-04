import { SESSION_BOXES } from "../constants/userCard-constants";
import { UserCardsItem } from "../protocols/userCards";
import boxRepository from "../repositories/boxes-repository";
import userRepository from "../repositories/user-repository";
import userCardRepository from "../repositories/userCard-repository";
import { currentSession } from "../utils/card-utils";

async function postLearningSession(
  userId: number,
  userCardsData: UserCardsItem[]
) {
  const { createdAt } = await userRepository.findById(userId);
  const learningSession = currentSession(createdAt).toString();
  const firstBoxSession: string = SESSION_BOXES[learningSession].filter(
    (el: { name: string }) => el.name.split("-")[0] === learningSession
  )[0].name;
  const lastBoxSession: string = SESSION_BOXES[learningSession].filter(
    (el: { name: string }) => el.name.split("-")[3] === learningSession
  )[0].name;
  console.log(lastBoxSession);
  for (let i = 0; i < userCardsData.length; i++) {
    const { boxId } = await userCardRepository.findUserCard(
      userId,
      userCardsData[i].cardId
    );

    const { name: box } = await boxRepository.findBox(boxId);
    if(box === "CURRENT" && userCardsData[i].result === "HIT") {
      //update o card pra firtBoxSession
    }
    if(box !== "CURRENT" && userCardsData[i].result === "MISS") {
      //update o card pra CURRENT
    }
    if (box === lastBoxSession && userCardsData[i].result === "HIT") {
        //update o card pra RETIRED BOX
    }
  }
}

const userCardsService = {
  postLearningSession,
};

export default userCardsService;
