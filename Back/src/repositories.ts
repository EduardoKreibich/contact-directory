import { AppDataSource } from "./data-source";
import Contact from "./entities/contact.entitie";
import User from "./entities/user.entitie";
import { UserRepo } from "./interfaces/user.interfaces";
import { ContactRepo } from "./interfaces/contacts.interfaces";

const userRepo: UserRepo = AppDataSource.getRepository(User);
const contactRepo: ContactRepo = AppDataSource.getRepository(Contact);


export { userRepo, contactRepo };
