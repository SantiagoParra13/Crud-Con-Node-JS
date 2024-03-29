const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem,getItem,getItems,updateItems, deleteItems,} = require("../controllers/storage");
const { validatorGEtItem } = require("../validators/storage");


//localhost:3001/api/storage

//lista de item
router.get("/", getItems);

//detalle de item
router.get("/:id",validatorGEtItem, getItem); //obtener

//eliminar item
router.delete("/:id",validatorGEtItem, deleteItems);    //eliminar

//crear item
router.post("/", uploadMiddleware.single("myfile"), createItem);  //crear

module.exports = router;
