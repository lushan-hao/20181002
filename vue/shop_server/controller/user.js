const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');


router.post('/registUser', async (ctx) => {
    console.log('c00000000000henggong1');
    // // 获取model
    // const User = mongoose.model('User');
    // // 接收post请求封装成user对象
    // let newUser = new User(ctx.request.body);
    // // 使用save保存用户信息
    // await newUser.save().then(() => {                 //成功
    //     ctx.body = {
    //         code: 200,
    //         message: '注册成功'
    //     };
    // }).catch(err => {                           //失败
    //     ctx.body = {
    //         code: 500,
    //         message: err
    //     };
    // });
});



module.exports = router;