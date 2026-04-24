const http=require('http');
http.createServer((req,resp)=>{
    resp.setHeader('content-type','text/html');
    resp.write('<h1>my name is faizan abbasi iam from gilgit</h1>');
    resp.end();
}).listen(4900);