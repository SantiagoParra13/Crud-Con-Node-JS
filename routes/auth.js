const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {validatorLogin, validatorRegister}=require("../validators/auth");


//TODO /tracks GET,POST,DELETE,PUT

router.post("/register",validatorRegister,(res,res) =>{
    req=matchedData(req);
    res-RTCRtpSender({data:req})
})

module.exports = router;
