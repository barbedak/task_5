const Koa = require ('koa');
const routes = require('./routes/users');
const serve = require('koa-static');

const Port = 3000;

const server = new Koa();

server.use(serve('.'));

server.use(routes.routes());
server.use(routes.allowedMethods());

server.listen(Port, () =>{
    console.log(`Server start on port ${Port}`);
});

module.exports = server;