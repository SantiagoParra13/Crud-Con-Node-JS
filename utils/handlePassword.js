const bcryptjs = require("bcryptjs");

/**
 * contraseña en texto plano
 * @param {*} passwordPlain
 *
 */

//funcion para encriptar
const encrypt = async (passwordPlain) => {
  // La función recibe como parámetros la contraseña en texto plano y el número de veces que se aplicará el algoritmo de cifrado
  const hash = await bcryptjs.hash(passwordPlain, 10);
  //7skp#a95&1
  return hash;
};


/**
 * pasar contraseña sin encriptar y encriptada
 * @param {*} passworPlain
 * @param {*}  hashPassword
 *
 */
//funcion para comparara el password encriptado
const compare = async (passworPlain,hashPassword) => {
     // Usamos la librería bcryptjs para comparar las contraseñas
    return await bcryptjs.compare(passworPlain,hashPassword)
};

module.exports = { encrypt, compare };
