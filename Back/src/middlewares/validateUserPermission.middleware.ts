import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";


export const validateUserPermission = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const { sub } = res.locals.decoded;

  if (id !== sub) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
