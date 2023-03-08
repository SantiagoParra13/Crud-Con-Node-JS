const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * obtener lista de la base de datos
 *    @param{*} req
 *    @param{*} res
 *
 */

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find(id); // busca un elemento en la base de datos.
    res.send({ data }); //Se envía la respuesta con los datos obtenidos.
  } catch (e) {
    handleHttpError(res, "Error_Get_Items"); //error
  }
};

const getItem = async (req, res) => { //obtener elemento
  try {
    req = matchedData(req);  // Se obtiene los datos del request y se validan con matchedData.
    const { id } = req; // obtiene el id
    const data = await tracksModel.findById(id);  // se  busca el elemento
    res.send({ data }); // se envia
  } catch (e) {
    handleHttpError(res, "Error_Get_Item"); //error
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

const createItem = async (req, res) => { //crear elemento
  try {
    const body = matchedData(req);// Obtiene los datos del request(solicitud de respuesta).
    const data = await tracksModel.create(body); // Crea el elemento usando el modelo tracksModel.
    res.send({ data }); //envia con datos creados
  } catch (e) {
    handleHttpError(res, "Error_Create_Items"); //error
  }
};

/**
 * Actualixar un Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

const updateItems = async (req, res) => { //actualizar elementos
  try {
    const { id, ...body } = matchedData(req); //obtiene el id y el resto de los datos
    const data = await tracksModel.findOneAndUpdate(id, body); // Se busca y se actualiza el elemento con el id especificado.
    res.send({ data }); //envia los datos actualizados
  } catch (e) {
    handleHttpError(res, "Error_Update_Items"); //error
  }
};

/**
 *  Eliminar unn Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

const deleteItems = async (req, res) => { //eliminar elementos
 try {
   req = matchedData(req);// Obtiene los datos del request y los almacena 
   const { id } = req; // obtiene id
   const data = await tracksModel.delete({_id:id});// Elimina el elemento con el id especificado de la base de datos.
   res.send({ data }); //envia los datos
 } catch (e) {
   handleHttpError(res, "Error_Delete_Item"); //error
 }

};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
