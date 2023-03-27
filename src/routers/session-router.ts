import { Router } from "express";
import { postSession } from "../controllers/session-controller";
import { validateBody } from "../middlewares/validation-middleware";
import { signInSchema } from "../schemas/session-schemas";

export const sessionRouter = Router();

sessionRouter.post("/", validateBody(signInSchema), postSession);