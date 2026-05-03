//imprting http module to create a server and fs module to read the html file//
const http=require('http');
const fs=require('fs');
const { text } = require('stream/consumers');

const server=http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(err,data)=>{
       
        if(err){
             res.writeHead(500,{'content-type':'text/plain'});
            res.end('Error occurred while reading the file');

            return;
        }  
         res.writeHead(200,{'content-type':'text/html'});
        if(req.url==='/'){
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data)
        }
        else if(req.url=='/submit'){
           
            res.write('<h1>data is submitted</h1>');
             
        }
        res.end();
    });
});
server.listen(2300);
