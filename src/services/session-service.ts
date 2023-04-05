import { invalidCredentialsError } from "../errors/user-errors/invalid-credentials-error";
import { SignInParams } from "../protocols/user";
import userRepository from "../repositories/user-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sessionRepository from "../repositories/session-repository";

async function signIn(data: SignInParams) {
  const { email, password } = data;

  const userExists = await userRepository.findByEmail(email);
  if (!userExists) {
    throw invalidCredentialsError();
  }

  const isPasswordCorrect = await bcrypt.compare(password, userExists.password);
  if (!isPasswordCorrect) {
    throw invalidCredentialsError();
  }

  let token: string;
  
  const sessionExists = await sessionRepository.findByUserId(userExists.id);
  if (!sessionExists) {
    token = generateToken(userExists.id);
    await sessionRepository.createSession(token, userExists.id);
  } else {
    token = sessionExists.token;
  }

  return {
    name: userExists.name,
    userId: userExists.id,
    token,
  };
}

function generateToken(id: number) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

const sessionService = {
  signIn,
};

export default sessionService;
