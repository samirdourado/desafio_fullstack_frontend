import {z} from 'zod'

export const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  type: z.string(),
})

export const createContactSchema = contactSchema.omit({
  id: true,
})

export type contactData = z.infer<typeof contactSchema>