import Joi from "joi";
import { UserCardsBody } from "../protocols/userCards";

export const postSessionSchema = Joi.object<UserCardsBody>({
  cards: Joi.array()
    .items(
      Joi.object({
        cardId: Joi.number().integer().min(1).required(),
        result: Joi.string().valid("HIT", "MISS"),
      })
    )
    .required(),
});
