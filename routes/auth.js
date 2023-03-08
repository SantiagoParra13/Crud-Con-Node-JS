const express = require("express");
const { matchedData } = require("express-validator");
const router = express.Router();
const {validatorLogin, validatorRegister}=require("../validators/auth");


//TODO /tracks GET,POST,DELETE,PUT

router.post("/register",validatorRegister,(res,req) =>{    //Esta función es una ruta POST que recibe dos parámetros: validatorRegister y una función de devolución de llamada (res, req). 
    req=matchedData(req);// toma los datos enviados en la solicitud y los almacena en un objeto. 
    res-RTCRtpSender({data:req}) //devuelve un objeto con los datos de la solicitud.
})

module.exports = router;
