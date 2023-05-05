import { Request, Response } from "express";
import httpStatus from "http-status";
import { NewUser } from "../protocols/user";
import userService from "../services/user-service";

export async function postUser(req: Request, res: Response) {
  const data = req.body as NewUser;
  try {
    await userService.signUp(data);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    res.status(httpStatus.CONFLICT).send(error);
  }
}
