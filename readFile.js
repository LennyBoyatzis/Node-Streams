// This code works but it's bulky and buffers up the entire data.txt file into memory for every request before writing the result back to clients. If data.txt is very large, your program could start eating a lot of memory as it serves lots of users concurrently, particularly for users on slow connections.

//Luckily both of the (req, res) arguments are streams, which means we can write this in a much better way using fs.createReadStream() instead of fs.readFile()

'use strict';

const http = require('http');
const fs = require('fs');
const port = 8000;

let server = http.createServer((req, res) => {
	fs.readFile(__dirname + '/data.text', (err, data) => {
		console.log("DATA", data);
		res.end(data);
	});
});
server.listen(8000, () => {
	console.info("==> 🌎  Listening on port %s.", port);
});
