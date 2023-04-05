import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import { UserCardsBody } from "../protocols/userCards";
import userCardsService from "../services/userCards-service";

export async function postLearningSession(
  req: AuthenticatedRequest,
  res: Response
) {
  const { userId } = req;
  const userCardsData = req.body as UserCardsBody;
  try {
    await userCardsService.postLearningSession(userId, userCardsData.cards);
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}
