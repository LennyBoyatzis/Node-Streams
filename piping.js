// Piping is a great mechanism in which you can read data from the source and write to destination without managing the flow yourself

const fs = require('fs');
const readableStream = fs.createReadStream('data/data.text');
const writableStream = fs.createWriteStream('data/write.text');

readableStream.pipe(writableStream);
