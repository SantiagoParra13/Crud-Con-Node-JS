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
    const data = await tracksModel.find(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_Get_Items");
  }
};

const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_Get_Item");
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
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_Create_Items");
  }
};

/**
 * Actualixar un Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

const updateItems = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_Update_Items");
  }
};

/**
 *  Eliminar unn Registro
 *    @param{*} req
 *    @param{*} res
 *
 */

const deleteItems = async (req, res) => {
 try {
   req = matchedData(req);
   const { id } = req;
   const data = await tracksModel.delete({_id:id});
   res.send({ data });
 } catch (e) {
   handleHttpError(res, "Error_Delete_Item");
 }

};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
