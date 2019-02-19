//开启服务


const Koa = require('koa');
const app = new Koa();

//解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));


// 接收前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


//加载路由
const Router = require('koa-router');
let user = require('./controller/user.js');

let router = new Router();
router.use('/user',user.routes());                            // /user跟前端代码里传来的地址后后面的控制器名称有关


app.use(router.routes());
app.use(router.allowedMethods());                    //配置什么请求只能接收什么请求



const {connect, initSchemas} = require('./init.js');
(async ()=>{
    await connect();                //异步，因为只有连接上，才可以加载
    initSchemas();
})();                                  //立即调用函数


app.use(async (ctx)=>{
    ctx.body = '123';
})

app.listen(3000,()=>{
    console.log('start shop_server');
})