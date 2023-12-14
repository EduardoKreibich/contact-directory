import { z } from "zod"
import { contactsReadSchema } from "./contacts.schema";

const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telephone: z.string().max(13),
    createdAt: z.string().or(z.date()),
})

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userReturnCreatedSchema = userSchema.omit({password:true})

const userReturnSchema = userSchema.omit({
  password: true,
}).extend({contacts:contactsReadSchema})


const userUpdateSchema = userCreateSchema.partial();

const usersReadSchema = z.array(userReturnSchema)

export {usersReadSchema, userCreateSchema, userSchema, userUpdateSchema, userReturnSchema, userReturnCreatedSchema}