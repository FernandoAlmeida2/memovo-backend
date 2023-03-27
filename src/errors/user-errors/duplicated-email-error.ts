import { ApplicationError } from "../../protocols/applicationError";

export function duplicatedEmailError(): ApplicationError {
  return {
    name: "DuplicatedEmailError",
    message: "There is already a user with the given email",
  };
}
