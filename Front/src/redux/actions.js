import { GET_ALL_TANKS, CLEAN_TANK_DETAILS, GET_TANK_DETAILS } from "./action-types";
import axios from "axios";

// Esta función es un action creator que devuelve un thunk
// Un thunk es una función que puede ser ejecutada de forma asíncrona y que puede despachar acciones a un store de Redux
  export const getAllTanks = () => {
    return function(dispatch) { 
        // Se hace una petición fetch a una URL local
        fetch("http://localhost:3001/undefined/onsearch")
        .then (response => response.json()) // Se convierte la respuesta a formato JSON
        .then (data => {
            // Se convierte el objeto con los datos de los tanques a un array con los valores de sus propiedades
            const tanks = Object.values(data);
            // Se despacha una acción de tipo GET_ALL_TANKS con el array de tanques como payload
            return dispatch({type: GET_ALL_TANKS, payload: tanks})
        })
    }
  }

  export const getTankDetails = (tank_id) => { 
    // Definición de la función con un parámetro para el ID del tanque
    return function(dispatch) { 
      // Retorno de una función que recibe un objeto 'dispatch'
      fetch(`http://localhost:3001/undefined/detail/${tank_id}`) 
      // Envío de solicitud HTTP al servidor local con el ID del tanque específico
        .then(response => response.json()) 
        // Conversión de la respuesta HTTP a formato JSON
        .then(tank => { 
          return dispatch({type: GET_TANK_DETAILS, payload: tank}) 
          // Se envía un objeto con el tipo de acción y los detalles del tanque a través de la función 'dispatch'
        })
    }
  }
  

export const cleanTankDetails = () => {
    return {type: CLEAN_TANK_DETAILS}
}
