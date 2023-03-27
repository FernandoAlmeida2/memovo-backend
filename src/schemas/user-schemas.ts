import Joi from "joi";
import { NewUser } from "../protocols/user";

export const userSchema = Joi.object<NewUser & { repeat_password: string }>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]*$"))
    .required(),
  repeat_password: Joi.ref("password"),
}).with("password", "repeat_password");
