const http = require('node:http');
const db = require('./database');

http.createServer(async (req, res)=>{
        // THIS IS FOR CORS ERRORS
        res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,POST');
        res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    console.log(req.url, req.method);
    if(req.url == '/api/todo'){
        res.writeHead(200, {'Content-Type':'application/json'});
        const data = await db.getData();
        res.end(data);
    } 
    else if(req.url = '/create'){
        req.on('data', (chunk)=> {
            const data = JSON.parse(chunk.toString());
            console.log(data);
            db.sendData(data.head, data.body);
        });
        res.end();
    }
}).listen(4000);