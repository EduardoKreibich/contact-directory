import { z } from "zod";


export const userModalSchema = z.object({

    name:z.string().min(1),
    
    password:z.string().min(1),

    email:z.string().email("O e-mail é inválido"),
    
    telephone:z.string().min(1),

})