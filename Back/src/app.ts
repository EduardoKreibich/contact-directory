import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express";

import { userRouter } from "./routes/user.router"
import { contactRouter } from "./routes/contact.router";
import sessionRouter from "./routes/session.router";

import middlewares from "./middlewares"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"
import cors from "cors"

const app: Application = express();
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

app.use("/login", sessionRouter);
app.use("/users", userRouter);
app.use("/contacts", contactRouter);


app.use(middlewares.handleErrors);
export default app