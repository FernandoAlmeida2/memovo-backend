import { Router } from "express";
import { postUser } from "../controllers/user-controller";
import { validateBody } from "../middlewares/validation-middleware";
import { userSchema } from "../schemas/user-schemas";

export const userRouter = Router();

userRouter.post("/", validateBody(userSchema), postUser);
