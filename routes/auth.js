const express = require("express");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require ("../utils/handlePassword")
const router = express.Router();
const {usersModel} = require ("../models")
const { tokenSign} = require ("../utils/handleJwt")
const {validatorLogin, validatorRegister}=require("../validators/auth");
const {loginCtrl,registerCtrl} = require ("../controllers/auth")


//TODO /tracks GET,POST,DELETE,PUT

router.post("/register",validatorRegister, registerCtrl)    
router.post("/login",validatorLogin, loginCtrl)    

module.exports = router;
