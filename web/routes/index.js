var issue = require('./issue'); //引入issue.js文件
exports.all = function(app){
    app.get('/', function(req, res){
        //res.render('issue/index.ejs');
        issue.index(req, res);
    });
    app.get('/register', function(req, res){
        issue.register(req, res); //将register请求转向issue内的函数
    });
    debugger;
    app.post('/register', function(req, res){
	console.log('post register');
        debugger;
        issue.registerUses(req, res);
    });
}
