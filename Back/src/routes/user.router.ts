import { Router } from "express";
import middleware from "../middlewares";
import userControllers from "../controllers/user.controllers";
import { userCreateSchema, userUpdateSchema } from "../schemas";

export const userRouter: Router = Router();

userRouter.post(
  "",
 middleware.validateBody(userCreateSchema), 
 middleware.emailExists, 
 middleware.telephoneExists, 
 userControllers.createUser,
);

userRouter.get("/:id", middleware.validateToken, userControllers.retrieveUser);

userRouter.get(
  "",
  middleware.validateToken,
  userControllers.readUsers
);

userRouter.patch(
  "/:id",
  middleware.idUserExists,
  middleware.validateToken,
  middleware.validateBody(userUpdateSchema),
  middleware.validateUserPermission,
  userControllers.updatePartialUser
);

userRouter.delete(
  "/:id",
  middleware.idUserExists,
  middleware.validateToken,
  middleware.validateUserPermission,
  userControllers.removeUser
);