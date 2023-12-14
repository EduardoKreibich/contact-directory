import { sign } from "jsonwebtoken";
import { SessionCreate, SessionReturn } from "../interfaces";
import { User } from "../entities";
import { compare } from "bcryptjs";
import { userRepo } from "../repositories";
import AppError from "../errors/App.error";

const createToken = async ({
  email,
  password,
}: SessionCreate): Promise<SessionReturn> => {
  const foundUser: User | null = await userRepo.findOne({relations:{contacts:true}, where:{email}});
  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const samePwd: boolean = await compare(password, foundUser.password);
  if (!samePwd) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { user: foundUser.id },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return ({ token: token, user: foundUser! });
};

export default { createToken };