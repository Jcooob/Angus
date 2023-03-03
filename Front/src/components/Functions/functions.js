// Se debe convertir el nombre plano del tipo de tanque a un modelo mas legible y agradable
// Para eso sirve esta funcion
export const tankTypeName = (name) => {
    if (name === "lightTank") {
       return "Light Tank"
    }
    if (name === "heavyTank") {
       return "Heavy Tank"
    }
    if (name === "mediumTank") {
       return "Medium Tank"
    }
    if (name === "AT-SPG") {
       return "Tank Destroyer"
    }
    if (name === "SPG") {
       return name
    }
}

// Los paises cuyos nombres obtenemos en abreviatura (USA, USSR, UK) los convertimos en mayusula
// Mientras que los demas solo convertimos a mayuscula la primera letra (China, italy, France)

export const tankNationName = (name) => {
    if (name.length <= 4) {
        return name.toUpperCase()
    } else {
    return name.charAt(0).toUpperCase() + name.slice(1)
    }
}

// En el juego los niveles de los tanques (tiers) se muestran en numeros romanos
// Esta funcion obtiene el tier del tanque en numero decimal y lo convierte en romano para asemejarse al juego

export const convertToRoman = (num) => {
    const romanNumeralMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let roman = '';
    for (let key in romanNumeralMap) {
      while (num >= romanNumeralMap[key]) {
        roman = roman + key;
        num -= romanNumeralMap[key];
      }
    }
    return roman;
}

 

