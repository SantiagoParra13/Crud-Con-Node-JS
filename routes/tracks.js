const express = require("express");
const router = express.Router();
const authMiddleware = require ("../middleware/session")
const {
  validatorCreateItem,
  validatorGEtItem,
} = require("../validators/tracks");
const { getItems, getItem, createItem, updateItems, deleteItems } = require("../controllers/tracks");
const customHeader = require("../middleware/customHeader");

//TODO /tracks GET,POST,DELETE,PUT

router.get("/",authMiddleware, getItems);

router.get("/:id", validatorGEtItem, getItem);

router.post("/", validatorCreateItem, createItem);

router.put("/:id", validatorCreateItem, validatorGEtItem, updateItems);

router.delete("/:id", validatorGEtItem, deleteItems);


module.exports = router;
