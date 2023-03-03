const http = require('http');
const getTanks = require('./controllers/getTanks')
const getTankDetails = require('./controllers/getTankDetails')


http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split('/').at(-1)

    if(req.url.includes("onsearch")){
        getTanks(res)
    }

    if(req.url.includes("detail")){
        getTankDetails(res, id)
    }
    

}).listen(3001, 'localhost');