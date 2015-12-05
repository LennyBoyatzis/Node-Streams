// The function call fs.createReadStream() gives you a readable stream. Initially, this is in a static state
// As soon as you listen to a data event and attach a callback it starts flowing
// After that - chunks of data are read and passed to your callback

// By default the data you read from a stream is a Buffer object

// readableStream.setEncoding('utf8');

'use strict';

const fs = require('fs');
const readableStream = fs.createReadStream('data/data.text');
let data = '';

readableStream.on('data', (chunk) => {
	console.log("Chunck:", chunk);
	data += chunk;
});

readableStream.on('end', () => {
	console.log("Data:", data);
})
