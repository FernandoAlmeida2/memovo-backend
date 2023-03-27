import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateBody(schema: ObjectSchema): ValidationMiddleware {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send(error.details.map((detail) => detail.message));
      return;
    }
    next();
  };
}

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
