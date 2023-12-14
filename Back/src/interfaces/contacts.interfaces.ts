import {z} from "zod"
import {contactsReadSchema, contactCreateSchema, contactSchema} from "../schemas"
import { Repository, DeepPartial } from "typeorm"
import Contact from "../entities/contact.entitie"

type ContactCreate = z.infer<typeof contactCreateSchema>
type ContactsReturn = z.infer<typeof contactSchema>
type ContactRead = z.infer<typeof contactsReadSchema>
type ContactUpdate = DeepPartial<Contact>;

type ContactRepo = Repository<Contact>

export {ContactCreate, ContactRead, ContactsReturn, ContactRepo, ContactUpdate}