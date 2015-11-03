var express = require("express");
var program = require('commander');
var path = require("path");
var open = require("open");

module.exports = {
	run: function(argv) {
		program
		    .version('0.0.1')
		    .option('-s, --server [value]', '将本地文件夹加入本地服务器')
		    .option('-p, --port [value]', '指定本地服务器端口，默认端口3000')
		    .parse(argv);

		var localDir = path.normalize(program.server);
		var port = program.port || 3000;
		var app = express();
		app.use(express.static(localDir));
		var server = app.listen(port, function(){
			console.log("local start: ["+ localDir +"]");
			console.log("server start at: http://localhost:" + port);
			open("http://localhost:" + port);
		});
	}
};
