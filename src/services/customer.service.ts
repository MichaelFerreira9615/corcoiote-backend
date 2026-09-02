import { NotFoundError } from '../errors/index.ts';
import type {
	CreateCustomer,
	UpdateCustomer,
} from '../schemas/customer.schema.ts';
import type { Customer } from '../types.ts';
import prisma from '../lib/prisma.ts';

export async function findAllCustomers(): Promise<Customer[]> {
	const customers = await prisma.customer.findMany();

	return customers;
}

export async function findCustomerById(id: number): Promise<Customer> {
	const customer = await prisma.customer.findUnique({ where: {id} });

	if (!customer) {
		throw new NotFoundError(`Cliente com id ${id} não encontrado.`);
	}

	return customer;
}

export async function insertCustomer({ name, email }: CreateCustomer): Promise<Customer> {


	const customer = await prisma.customer.create({ data: {
		name,
		email}});

		return customer;
}
export async function modifyCustomer(
	id: number,
	{ name, email, imageUrl }: UpdateCustomer,
): Promise<Customer> {
	const findCustomer = await prisma.customer.findUnique({ where: {id} });

	if (!findCustomer){
		throw new NotFoundError ('Ciente não encontrado');
	}

	const customer = await prisma.customer.update({
		where: {id},
		data:{
			name,
			email,
			imageUrl
		}
	})

	if (!customer) {
		throw new NotFoundError(`Cliente com id ${id} não encontrado.`);
	}

	return customer;
}

export async function removeCustomer(id: number): Promise<void> {
	const findCustomer = await prisma.customer.findUnique({ where: {id} });

	if (!findCustomer){
		throw new NotFoundError ('Ciente não encontrado');
	}

	await prisma.customer.delete({ where: {id}});
}