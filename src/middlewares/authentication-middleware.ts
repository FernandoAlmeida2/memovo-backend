import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { unauthorizedError } from "../errors/auth-errors/unauthorized-error";
import sessionRepository from "../repositories/session-repository";

export async function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
    return;
  }

  try {
    const session = await sessionRepository.findByToken(token);
    if (!session) {
      res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
      return;
    }

    req.userId = session.userId;
    next();
  } catch (error) {
    res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
  }
}

export type AuthenticatedRequest = Request & { userId: number };
