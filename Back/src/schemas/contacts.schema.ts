import { z } from "zod"
import { userSchema } from "./user.schema";

const contactSchema = z.object({
    id: z.string().uuid(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    telephone: z.string().max(13),
    createdAt: z.string().or(z.date()),
})

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

const contactUpdateSchema = contactCreateSchema.partial();

const contactsReadSchema = z.array(contactSchema)

export {contactsReadSchema, contactCreateSchema, contactSchema, contactUpdateSchema}