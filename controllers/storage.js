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

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
     res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_List_Item");
  }

 
};

const getItem = async (req, res) => {
    try {
      const {id}=matchedData(req)
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
  const { body, file } = req;
  console.log(file);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
}catch(e){
  handleHttpError(res, "Error_Detail_Item");
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

const deleteItems = async (req, res) => {
try {
  const { id }=  matchedData(req)
  const dataFile = await storageModel.findById(id);
  await storageModel.deleteOne({_id:id})
  const {filename} = dataFile;
  const filePath = `${MEDIA_PATH}/${filename}`
  //fs.unlinkSync(filePath);
  const data = {filePath,deleted:1}
  res.send(data)
} catch (e) {
  handleHttpError(res, "Error_Detail_Item");
}

};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
