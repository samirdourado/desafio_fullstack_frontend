import {z} from 'zod'

export const contactSchema = z.object({
  id: z.string().nonempty('não encontrei o ID'),
  name: z.string().nonempty('Nome obrigatório'),
  email: z.string().email().nonempty('Email é obrigatório'),
  phone: z.string().nonempty('Telefone é obrigatório'),
  type: z.string().nonempty('Valores: Main, House, Work'),
})

export const createContactSchema = contactSchema.omit({
  id: true,
})

export const editContactSchema = contactSchema.partial()

export type ContactData = z.infer<typeof contactSchema>
export type NewContactData = z.infer<typeof createContactSchema>
export type EditContactData = z.infer<typeof editContactSchema>