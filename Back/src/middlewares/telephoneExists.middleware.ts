import { Response, Request, NextFunction } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import AppError from "../errors/App.error";

export const telephoneExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const telephone: string = req.body.telephone;

  const foundUser: User | null = await userRepo.findOneBy({ telephone });

  if (foundUser) throw new AppError("Telephone already exists", 409);

  res.locals.foundUser = foundUser;

  return next();
};