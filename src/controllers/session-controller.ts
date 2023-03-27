import { Request, Response } from "express";
import httpStatus from "http-status";
import { SignInParams } from "../protocols/user";
import sessionService from "../services/session-service";

export async function postSession(req: Request, res: Response) {
  const data = req.body as SignInParams;
  try {
    const createdSession = await sessionService.signIn(data);

    res.status(httpStatus.OK).send(createdSession);
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}
