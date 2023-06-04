import {z} from 'zod'

export const userSchema = z.object({  
  name: z.string().nonempty('Nome obrigatório'),
  email: z.string().email().nonempty('Email é obrigatório'),
  password: z.string().nonempty("Senha é obrigatório"),
  phone: z.string().nonempty('Telefone é obrigatório'),
  // registredAt: z.string().optional()
})


export const loginSchema = userSchema.omit({
    name: true,
    phone: true,
})

export type UserData = z.infer<typeof userSchema>
export type LoginData = z.infer<typeof loginSchema>