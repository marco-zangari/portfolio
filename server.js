'use strict';

const EXPRESS = require ('express');
const requestProxy = require ('express-request-proxy');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('./public'));

APP.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));


APP.get('/github/*', proxyGitHub)

function proxyGitHub(req, res, next){
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('/new', (request, response) => response.sendFile('new.html', {root: './public'}));
app.get('/admin', (request, response) => response.sendFile('admin.html', {root: './public'}));

APP.listen(PORT, function () {
  console.log(`You are running on port ${PORT}`);
})
