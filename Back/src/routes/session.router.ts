import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionCreate } from "../schemas";
import { sessionControllers } from "../controllers";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  validateBody(sessionCreate),
  sessionControllers.createToken
);

export default sessionRouter;
