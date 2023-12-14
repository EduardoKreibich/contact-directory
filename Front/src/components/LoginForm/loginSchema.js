import { z } from "zod";


export const loginSchema = z.object({

    email:z.string().email("O e-mail é inválido"),

    password:z.string().min(1)
})