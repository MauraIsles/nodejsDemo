var issue = require('./issue'); //引入issue.js文件
exports.all = function(app){
    app.get('/', function(req, res){
        //res.render('issue/index.ejs');
        issue.index(req, res);
    });
    app.get('/register', function(req, res){
        issue.register(req, res); //将register请求转向issue内的函数
    });
    app.post('/register1', function(req, res){
	    console.log('post register');
        issue.registerUser(req, res);
    });
}
