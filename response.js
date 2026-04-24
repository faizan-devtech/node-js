const http=require('http');
const age=30;
http.createServer((req,resp)=>{
    resp.setHeader('content-type','text/html');
    resp.write(`
        <html>
            <head>
                <title>Node js</title>
            </head>
            <body>
                <h1>Hello, World!</h1>
                <h2>`+age+`</h2>
                <h2>`+Date()`</h2>

                </body>
        </html>`);
    resp.end();
}).listen(4900);