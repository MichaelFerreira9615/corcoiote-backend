type customerStatus = 'active' ; 'inactive';

export type Customer = {
	id: number;
	name: string;
	email: string;
	imageUrl?: string | null;
	status?:customerStatus;
};

type invoiceStatus = 'PENDIND' ; 'PAID';

export type Invoice = {
	id:number;
	amount:number;
	status:invoiceStatus;
	date: Date;
	customerId:number;
	createdAt:Date;
}

export type ValidationFieldError = {
	field: string;
	message: string;
};