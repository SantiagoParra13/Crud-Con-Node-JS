const express =require("express");
const router= express.Router();
const { validatorCreateItem,validatorGEtItem } = require ("../validators/tracks")
const {getItems,getItem,createItem}=require ("../controllers/tracks")
const customHeader = require ("../middleware/customHeader")



//TODO /tracks GET,POST,DELETE,PUT

router.get("/",getItems);
router.get("/:id",validatorGEtItem,getItem);

router.post("/", validatorCreateItem, createItem);



module.exports=router