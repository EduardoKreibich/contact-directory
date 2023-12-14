import { Router } from "express";
import middleware from "../middlewares";
import { contactCreateSchema, contactUpdateSchema } from "../schemas";
import { contactControllers } from "../controllers";

export const contactRouter: Router = Router();

contactRouter.post(
  "",
 middleware.validateBody(contactCreateSchema),
 middleware.validateToken,
 contactControllers.createContact
);

contactRouter.get("/:id", middleware.validateToken, contactControllers.retrieveContact);

contactRouter.get(
  "",
  middleware.validateToken,
  contactControllers.readContact
);

contactRouter.put(
  "/:id",
  middleware.idContactExists,
  middleware.validateToken,
  middleware.validateBody(contactUpdateSchema),
  contactControllers.updatePartialContact
);

contactRouter.delete(
  "/:id",
  middleware.idContactExists,
  middleware.validateToken,
  contactControllers.removeContact
);