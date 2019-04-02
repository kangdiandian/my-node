const request = require('./serve02.js');
const router = require('./router.js');
const requestHandlers = require('./requestHandlers.js');

let handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

request.start(router.route, handle);
