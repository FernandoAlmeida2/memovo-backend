import { Router } from "express";
import { getCardSession } from "../controllers/cards-controller";
import { authenticateToken } from "../middlewares/authentication-middleware";

export const cardRouter = Router();

cardRouter.all("/*", authenticateToken).get("/:numCards", getCardSession);

