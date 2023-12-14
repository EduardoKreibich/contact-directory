import { Request, Response } from "express";
import { SessionReturn } from "../interfaces";
import sessionServices from "../services/session.services";

const createToken = async (req: Request, res: Response): Promise<Response> => {
  const token: SessionReturn = await sessionServices.createToken(req.body);
  return res.status(200).json(token);
};

export default { createToken };