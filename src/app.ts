import express, { Express, Request, Response } from "express";
import cors from "cors";
import { connectDB, disconnectDB } from "./config/database";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (req: Request, res: Response) => res.send("OK!"));

export function init(): Promise<Express> {
  connectDB();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
