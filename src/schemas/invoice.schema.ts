import { z } from 'zod';

export const createInvoiceSchema = z.object({
    amount:z
    .number('Entrada inválida : esperava-se um nùmero.')
    .positive('O vaor deve ser maior que zero.'),
    status: z.enum(['PENDING', 'PAID']),
    date: z.coerce.date('Data inválida.'),
    customerId: z
    .number('Entrada inválida : esperava-se um nùmero.')
    .positive('O vaor deve ser maior que zero.'),
});

export const updadeInvoiceSchema = createInvoiceSchema.partial();

export type CreateInvoice = z.infer<typeof createInvoiceSchema>;
export type UpdateInvoice = z.infer<typeof updadeInvoiceSchema>;