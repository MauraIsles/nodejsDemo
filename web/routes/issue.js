var site = require('../config/site');
function index( req, res ){ //定义注册转向
    console.log('index request');
    //首页没有页面路径，需要指定path及 filename
    res.render('issue/index.ejs', site.setting(req, '/issue/index', '/index'));
}
function register( req, res ){ //定义注册转向
    console.log('register request');
    //首页没有页面路径，需要指定path及 filename
    res.render('issue/register.ejs', site.setting(req, '/issue'));
}
function registerUser(req, res){
    console.log('registerUser request');
    res.send({code:0, msg:'register info access success', data:req.body});
};
module.exports = { //对外公开register函数
    register: register,
    index: index,
    registerUser: registerUser
}
