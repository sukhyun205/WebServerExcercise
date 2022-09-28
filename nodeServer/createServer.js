const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.write('<h1>Create webServer using node.js</h1>');
    res.end('<h1>localhost:8080</h1>')
})
.listen(8080, () =>{
    console.log('8080 포트넘버에서 서버대기중입니다.');
});

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
    res.write('<h1>Create webServer using node.js</h1>');
    res.end('<h1>localhost:8081</h1>')
})
.listen(8081, () =>{
    console.log('8081 포트넘버에서 서버대기중입니다.');
});