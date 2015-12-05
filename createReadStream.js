const http = require('http');
const fs = require('fs');
const port = 8000;

let server = http.createServer((req, res) => {
	let stream = fs.createReadStream(__dirname + '/data.text');
	stream.pipe(res);
});

server.listen(8000, () => {
	console.info("==> 🌎  Listening on port %s.", port);
});

// Here .pipe() takes care of listening for 'data' and 'end' events from the fs.createReadStream(). This code is not only cleaner, but now the data.txt file will be written to clients one chunk at a time immediately as they are received from the disk.

//Using .pipe() has other benefits too, like handling backpressure automatically so that node won't buffer chunks into memory needlessly when the remote client is on a really slow or high-latency connection.

// There are 5 kinds of streams: readable, writable, transform, duplex, and "classic".
