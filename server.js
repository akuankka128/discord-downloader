const download = require('./download');
const http = require('http');

const server = http.createServer(async (req, res) => {
	if(req.url.startsWith("/download/")) {
		let url = req.url.slice(10);
		download(url);

		res.writeHead(200, { 'access-control-allow-origin' : '*' });
		return res.end();
	}

	res.writeHead(404);
	res.end();
}).listen({ port:8083 });

server.on('listening', () => console.log(`Listening on :${server.address().port}`));