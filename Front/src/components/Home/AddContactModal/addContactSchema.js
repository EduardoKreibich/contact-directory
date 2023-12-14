import { z } from "zod";


export const addContactSchema = z.object({

    name:z
    .string().min(1),

    email:z
    .string()
    .min(1),

    telephone:z
    .string().min(1)

})