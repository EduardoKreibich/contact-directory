import { User } from "../entities";
import { sessionCreate } from "../schemas";
import { z } from "zod";

type SessionCreate = z.infer<typeof sessionCreate>;
type SessionReturn = { token: string, user: User };

export { SessionCreate, SessionReturn };
