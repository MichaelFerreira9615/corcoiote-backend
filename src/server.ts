import express from 'express';
import { customers } from './mocks/customer.mock.ts';

const app = express();

app.use(express.json());

app.get('/customers', (_request, response) => {
	response.status(200).json(customers);
});

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!',
	});
});

app.listen(Number(process.env.PORT));
