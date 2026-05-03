//sending request to server by using http module//
const http=require('http');
http.createServer( (req,resp)=>{
resp.write('<h1>my name is is faizan abbasi iam from mansehra </h1>');
resp.end('request is completed');
}).listen('4900');
//creating a file on server by using fs kmodule//
const fs=require('fs');
fs.writeFile('myfile.txt','my name is faizan rom shinkeri abbasi ' ,(err)=>{
    if(err) throw err;{
    console.log('file is created');
       
    }
});
console.log('servr is  loading on port 4800');



