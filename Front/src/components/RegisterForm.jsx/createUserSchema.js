import { string, z } from "zod";


export const createUserSchema = z.object({

    name:z
    .string()
    .min(2,"O nome precisa ter pelo menos 2 caracteres."),

    email:z
    .string()
    .email("O e-mail é inválido"),

    password:z
    .string()
    .min(8,"A deve ter no mínimo 8 caracteres")
    .regex(/(?=.*\d)/, "A senha deve conter ao menos um número")
    .regex(/(?=.*[a-z])/, "A senha deve conter ao menos uma letra minúscula")
    .regex(/(?=.*[A-Z])/, "A senha deve conter ao menos uma letra maiúscula")
    .regex(/(?=.*[$*&@#])/, "A senha deve conter ao menos um caractere especial")
    .regex(/[0-9a-zA-Z$*&@#]{8,}$/, "A senha deve conter ao menos 8 dos caracteres mencionados"),

    confirmPassword:string(),

    telephone:z
    .string()
    .min(10, "O telephone precisa ter pelo menos 10 caracteres."),
  
}).refine(({password, confirmPassword})=> password === confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
});
