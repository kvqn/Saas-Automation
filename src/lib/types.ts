import { z } from 'zod'

export const EditUSerProfileSchema = z.object({
    email: z.string().email("Required"),
    name: z.string().min(3, "Required"),
    
})