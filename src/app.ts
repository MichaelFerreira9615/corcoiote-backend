import express from 'express';
import { pinoHttp } from 'pino-http';
import logger from './lib/logger.ts';
import errorHandler from './middlerwares/errorHandler.ts';
import CustomerRouter from './routes/customer.routes.ts';
import invoiceRouter from './routes/invoice.route.ts'

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use('/customers', CustomerRouter);
app.use('/invoices', invoiceRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!',
	});
});

app.use(errorHandler);

export default app;