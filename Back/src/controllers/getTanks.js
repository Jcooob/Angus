// Se importa la librería axios
const axios = require('axios');

// Se define una función que recibe como parámetro el objeto de respuesta del servidor
const getTanks = (res) => {

  // Se hace una solicitud GET a la API externa con axios
  axios.get("https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=125bac19716dc15a8c72c08830e84c0a")
    .then(result => result.data) // Se extraen los datos de la respuesta
    .then(data => {
      const tanks = Object.values(data.data); // Se obtienen los tanques desde los datos recibidos
      // Se envía la respuesta al cliente en formato JSON
      res.writeHead(200, {'Content-Type': 'application/json'})
        .end(JSON.stringify(tanks))
    })
    .catch(err =>
      // Si hay un error, se envía una respuesta de error al cliente
      res.writeHead(500, {'Content-Type': 'text/plain'})
        .end(err + ` Tank not found :(`)
    )
};

// Se exporta la función para ser utilizada en otras partes del código
module.exports = getTanks;
