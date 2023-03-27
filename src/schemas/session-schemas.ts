import Joi from "joi";

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]*$"))
    .required(),
});
