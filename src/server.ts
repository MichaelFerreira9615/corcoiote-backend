import http from 'node:http';

const users = [
	{
		name: 'Cristiano Ronaldo',
		status: true,
	},
	{
		name: 'Lionel Messi',
		status: true,
	},
	{
		name: 'Neymar Júnior',
		status: false,
	},
];

http
	.createServer((request, response) => {
		if (request.url === '/users' && request.method === 'GET') {
			response.writeHead(200, {
				'content-type': 'application/json',
			});
			response.end(JSON.stringify(users));
			return;
		}
		response.writeHead(404, {
			'content-type': 'text/plain',
		});
		response.end('Not found!');
	})
	.listen(Number(process.env.PORT));
