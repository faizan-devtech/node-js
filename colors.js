const colors=require('colors');
//sendign http request to server //
const http=require('http');
http.request((req,res)=>{
    res.end('hello world');
})
console.log(colors.red('my name is faizan abbasi'));
console.log(colors.green('my name is faizan abbasi'));
