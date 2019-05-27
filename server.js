const Koa = require ('koa');

const Port = 3000;

const server = new Koa ();

server.use(() => {
    
});

server.listen(Port, () =>{
    console.log(`Server start on ${Port}`);
});