import User from "../entities/user.entitie";
import AppError from "../errors/App.error";
import { UserCreate, UserReturn, UserUpdate } from "../interfaces";
import { UserReturnCreate } from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import { userReturnCreatedSchema, userReturnSchema } from "../schemas";


const createUser = async (payload: UserCreate): Promise<UserReturnCreate> => {
  const newUser: User = userRepo.create(payload);
  await userRepo.save(newUser);

  return userReturnCreatedSchema.parse(newUser);
};

const readUsers = async (): Promise<UserReturn[]> => {
  const users = await userRepo.find({
    relations: {contacts: true}
  });

  return userReturnSchema.array().parse(users);
};

const retrieveUser = async (userId: string): Promise<UserReturn> => {
  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!user) throw new AppError("User not found", 404);

  return userReturnSchema.parse(user);
};

const updatePartialUser = async (
  user: User,
  payload: UserUpdate
): Promise<UserReturnCreate> => {
  const updateUser = userRepo.create({
    ...user,
    ...payload,
  });
  await userRepo.save(updateUser);
  const userValid: UserReturnCreate = userReturnCreatedSchema.parse(updateUser);
  return userValid;
};


const removeUser = async (user: User): Promise<void> => {
  await userRepo.remove(user);
};

export default { createUser, readUsers, updatePartialUser, removeUser, retrieveUser };
