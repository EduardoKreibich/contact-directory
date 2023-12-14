import { Response, Request, NextFunction } from "express";
import { User } from "../entities";
import { userRepo } from "../repositories";
import AppError from "../errors/App.error";

export const idUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundEntity: User | null = await userRepo.findOneBy({
    id: String(req.params.id),
  });
  if (!foundEntity) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
