'use strict';

const EXPRESS = require ('express');
const requestProxy = require ('express-request-proxy');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

APP.listen(PORT, function () {
  console.log(`You are running on port ${PORT}`);
})
