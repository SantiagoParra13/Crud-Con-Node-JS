const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
const { handleHttpError } = require("../utils/handleError");
const fs=require ("fs")


/**
 * obtener lista de la base de datos
 *    @param{*} req
 *    @param{*} res
 *
 */

const getItems = async (req, res) => { //se encarga de obtener los elementos almacenados en el modelo de almacenamiento.
  try {
    const data = await storageModel.find({}); //Se almacena el objeto en la base de datos y se obtiene el resultado de la operación 
     res.send({ data }); //Se envía una respuesta con los datos almacenados 
  } catch (e) {
    handleHttpError(res, "Error_List_Item"); //error
  }

 
};

const getItem = async (req, res) => { //se encarga de obtener un elemento del almacenamiento
    try {
      const {id}=matchedData(req) // Extraer el valor de la propiedad "id" del objeto "matchedData"
      const data = await storageModel.findById(id);
      res.send({ data });
    } catch (e) {
      handleHttpError(res, "Error_Detail_Item");
    }

    
};

/**
 * Insertar un Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

/* const createItem=async (req,res)=>{
    const {body}=req
    try {
        const data = await tracksModel.create(body)
        res.status(200).send({data})
    } catch (error) {
        res.status(400).send({error})
    } 
}; */

const createItem = async (req, res) => {
try{
  const { body, file } = req;                   //obtener el body y el file.
  console.log(file);
  const fileData = { 
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,       //Se crea el objeto con los datos del archivo
  };
  const data = await storageModel.create(fileData);    // Se almacena el objeto en la base de datos y se obtiene el resultado de la operación 
  res.send({ data });
}catch(e){
  handleHttpError(res, "Error_Detail_Item");      //error
}
  
};

/**
 * Actualixar un Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

const updateItems = async  (req, res) => {};

/**
 *  Eliminar unn Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

const deleteItems = async (req, res) => { //eliminar un elemento de la base de datos y su archivo asociado.
try {
  const { id }=  matchedData(req) //Obtiene el id del elemento
  const dataFile = await storageModel.findById(id); // Busca el elemento en la base de datos.
  await storageModel.deleteOne({_id:id}) //Elimina el elemento
  const {filename} = dataFile; //Obtiene el nombre del archivo asociado al elemento a eliminar
  const filePath = `${MEDIA_PATH}/${filename}` // Construye la ruta al archivo asociado al elemento a eliminar.
  //fs.unlinkSync(filePath);
  const data = {filePath,deleted:1} // Crea un objeto con los datos necesarios para responder a la solicitud.
  res.send(data)
} catch (e) {
  handleHttpError(res, "Error_Detail_Item");
}

};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems }; //exporta los modulos
