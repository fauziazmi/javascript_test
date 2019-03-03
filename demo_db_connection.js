var mysql = require('mysql');
var http = require('http');
var url = require('url');

var con = mysql.createConnection({
    host: "35.240.248.249",    // your host, usually localhost
    user: "kumparanGuest",         // your username
    password: "guestForKumparan",           // your password
    database: "20190226_Achmad_Fauzi_Azmi"
  });

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;  

con.connect(function(err) {
    if (err) throw err;
    var txt = q.id;
    var sql = "SELECT title FROM stories WHERE story_id = ?";
        con.query(sql, txt, function (err, result, fields) {
        if (err) throw err;
            console.log(result);
    });
});
}).listen(8081);