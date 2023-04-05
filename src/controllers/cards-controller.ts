import { Response } from "express";
import httpStatus from "http-status";
import { AuthenticatedRequest } from "../middlewares/authentication-middleware";
import cardService from "../services/cards-service";

export async function getCardSession(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { numCards } = req.params;
  try {
    const response = await cardService.getCardSession(userId, Number(numCards));
    res.status(httpStatus.OK).send(response);
  } catch (error) {
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}