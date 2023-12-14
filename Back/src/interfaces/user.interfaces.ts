import {z} from "zod"
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import {usersReadSchema, userCreateSchema, userReturnSchema, userReturnCreatedSchema } from "../schemas"

type UserCreate = z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof usersReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserReturnCreate = z.infer<typeof userReturnCreatedSchema>
type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>;
export {UserCreate, UserRead, UserReturn, UserUpdate, UserRepo, UserReturnCreate}