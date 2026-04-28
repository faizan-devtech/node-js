//simple api to send data to client 
const http=require('http');
const usersData=[
   user1={
        name:'faizanabbasi',
        rollNo:'302231092',
        location:'shinkiari'
    },
     user2={
         name:'faizanabbasi',
        rollNo:'302231092',
        location:'shinkiari'
    },
     user3={
       name:'faizanabbasi',
        rollNo:'302231092',
        location:'shinkiari'
    },
     user4={
         name:'faizanabbasi',
        rollNo:'302231092',
        location:'shinkiari',
        location:'shinkiari'
    }

];
http.createServer((req,resp)=>{
    resp.setHeader('Content-Type','application/json');
resp.write(JSON.stringify(usersData));
resp.end();
}).listen(4000);