
const http=require('http');
const userForm=require('./userForm');
                http.createServer((req,res)=>{
                    res.witeHead(200,{'Content-Type':'text/html'});
                    userForm(req,res);
                    res.end();
                }).listen( 1500);