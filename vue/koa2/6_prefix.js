const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router({
    prefix: '/hao'
});
router.get('/abc', (ctx, next) => {
    ctx.body = 'come';
});

router.get('/test', (ctx, next) => {
    ctx.body = 'TEST';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx=>{

});

app.listen(3000, () => {
    console.log('服务开启成功在3000端口');
});


// http://192.168.0.100:3000/login
// http://192.168.0.100:3000/register