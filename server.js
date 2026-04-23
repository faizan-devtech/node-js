//sending request to server by using http module//

const http=require('http');
http.createServer( (req,resp)=>{
resp.write('<h1>my name is faizan abbasi</h1>');
resp.end('hellow');
}).listen('4800');
console.log('servr is  loading on port 4800');
