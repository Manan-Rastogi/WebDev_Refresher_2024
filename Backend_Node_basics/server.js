console.log('Server Running');

import { createServer } from 'node:http';                 // ECMA script -- mjs
import {a} from "./exports.js";                           // importing named exports
import obj from "./exports.js"                            // importing default exports -- can use any name -- no { } used

console.log('a = ', a);

console.log('obj= ', obj)

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
