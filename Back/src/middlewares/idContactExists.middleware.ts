import { Response, Request, NextFunction } from "express";
import { Contact } from "../entities";
import { contactRepo } from "../repositories";
import AppError from "../errors/App.error";

export const idContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundEntity: Contact | null = await contactRepo.findOneBy({
    id: String(req.params.id),
  });
  if (!foundEntity) throw new AppError("Contact not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
