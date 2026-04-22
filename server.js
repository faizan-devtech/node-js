const http=require('http');
http.createServer( (req,resp)=>{
resp.write('<h1>my name is faizan abbasi</h1>');
resp.end('hellow');
}).listen('4800');
