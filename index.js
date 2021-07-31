const http = require('http');

const port = 5000;
const ip = '165.227.159.23';

const server = http.createServer((req, res) => {
  console.log('There was a request!');

  res.writeHead(200);
  res.write('Hello from Simple NodeJS Server!');
  res.end();
});

server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log(`http://${ip}:${port}`);
});
