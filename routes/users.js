const Router = require('koa-router');
const koaBody = require('koa-body');

const router = new Router();

//работа с бд
const Pool  = require('pg').Pool; 
const connectionString = 'postgresql://postgres:12345678@localhost:5432/task_5'

const pool = new Pool({
    connectionString: connectionString
});

pool.connect().then( () => console.log('DB connected') );

//взято с https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
const getUsers = async (ctx) => {
    const result =  await pool.query('SELECT * FROM users;')
    .then(()=>{
        ctx.status = 200;
        ctx.body = result.rows;
    });
};

const createUser = async (ctx) => {
    const result = await pool.query('INSERT INTO users (name, password) VALUES ($1, $2);',[req.body.name, req.body.password]);
    ctx.status = 201;
    ctx.body = result.rows;
};

const getUserByName = async (ctx) => {
    const result = await pool.query('INSERT INTO users (name, password) VALUES ($1, $2);',[req.body.name, req.body.password])
    .then(() => {
        ctx.status = 200;
        ctx.body = result.rows;
    });
};

router.get('/test', getUsers);
router.get('/test1', getUserByName);
router.post('/test2', createUser);

module.exports = router;