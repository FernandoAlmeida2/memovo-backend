import { Router } from "express";
import { postLearningSession } from "../controllers/userCard-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateBody } from "../middlewares/validation-middleware";
import { postSessionSchema } from "../schemas/userCard-schemas";

export const userCardsRouter = Router();

userCardsRouter
  .all("/*", authenticateToken)
  .post("/", validateBody(postSessionSchema), postLearningSession);
