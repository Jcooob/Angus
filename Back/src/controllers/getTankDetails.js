const axios = require('axios');


const getTankDetails = (res, id)=>{
    axios.get(`https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=125bac19716dc15a8c72c08830e84c0a&tank_id=${id}`)
    .then(result => result.data)
    .then(data => {
        const tank = data.data[id];
        res
        .writeHead(200, {'Content-Type': 'application/json'})
        .end(JSON.stringify(tank))
    })
    .catch(err => 
        res
        .writeHead(500, {'Content-Type': 'text/plain'})
        .end(err + `: Error`)
        )

};

module.exports = getTankDetails;