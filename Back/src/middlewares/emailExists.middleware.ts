import { Response, Request, NextFunction } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import AppError from "../errors/App.error";

export const emailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  const foundUser: User | null = await userRepo.findOneBy({ email });

  if (foundUser) throw new AppError("Email already exists", 409);

  res.locals.foundUser = foundUser;

  return next();
};