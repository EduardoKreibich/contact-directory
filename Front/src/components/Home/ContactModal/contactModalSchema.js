import { z } from "zod";


export const contactModalSchema = z.object({

    name:z.string().min(1),

    email:z.string().email("O e-mail é inválido"),

    password:z.string().min(1)
})