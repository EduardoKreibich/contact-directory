import { Request, Response } from "express";
import userServices from "../services/user.services";
import { UserReturn, UserReturnCreate } from "../interfaces/user.interfaces";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturnCreate = await userServices.createUser(req.body);

  return res.status(201).json(user);
};

const readUsers = async (req: Request, res: Response): Promise<Response> => {
  const users: UserReturn[] = await userServices.readUsers();

  return res.status(200).json(users);
};

const retrieveUser = async (req: Request, res: Response): Promise<Response> => {
  const id: string = String(req.params.id);
  const recipe = await userServices.retrieveUser(id);

  return res.status(201).json(recipe);
};

const updatePartialUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundEntity } = res.locals;
  const { body } = req;

  const user: UserReturnCreate = await userServices.updatePartialUser(
    foundEntity,
    body
  );

  return res.status(200).json(user);
};

const removeUser = async (req: Request, res: Response): Promise<Response> => {
  await userServices.removeUser(res.locals.foundEntity);

  return res.status(204).json();
};

export default { createUser, readUsers, updatePartialUser, removeUser, retrieveUser };