//шаблоны
const Main = {template: `
    <h1>Main</h1>
`};

const Logon = {template: `<form>
<h2>Для входа введите имя пользователя и пароль</h2>
<div>Имя пользователя:</div>
<input type="text" name="login" id="login">
<div>Пароль:</div>
<input type="text" name="password" id="password">
<br>
<br>
<button>Вход</button>
</form>`};

const Registr = {template: `    <form>
<h2>Регистрация нового пользователя</h2>
<div>Имя пользователя:</div>
<input type="text" name="login" id="login">
<div>Пароль:</div>
<input type="text" name="password" id="password">
<br>
<br>
<button>Регистрация</button>
</form>`};

const DB = {template: `    <form>
<h2>Список пользователей</h2>
<ul>
    <li>Тут будет имя пользователя</li>
</ul>

</form>`};
//конец шаблонов

const routes = [
    {path: '/', component: Main},
    {path: '/logon', component: Logon},
    {path: '/registr', component: Registr},
    {path: '/db', component: DB}
];

const router = new VueRouter({
    routes: routes
});

new Vue({
    el:'#app',
    data: {
        message: 'Hello message!'
    },
    router:router
})