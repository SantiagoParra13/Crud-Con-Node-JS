const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * //Controlador encargado de registrar un Usuario
 *    @param{*} req
 *    @param{*} res
 *
 */

const registerCtrl = async (req, res) => {
  try {
    req = matchedData(req); // toma los datos enviados en la solicitud y los almacena en un objeto.
    const password = await encrypt(req.password);
    const body = { ...req, password }; //sobre escribe lo que se encuetra con el atributo password
    const dataUser = await usersModel.create(body);
    dataUser.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_Register_User"); //error
  }
};

/**
 * //Controlador encargado de logear a una persona
 *    @param{*} req
 *    @param{*} res
 *
 */

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await usersModel.findOne({ email: req.email})
      .select("password name role email");
    if (!user) {
      handleHttpError(res, "User_No_Existe", 404);
      return;
    }

    const hashPassword = user.get("password");
    const check = await compare(req.password, hashPassword); //compara la contraseña enciptada y la que eta en la base de datos (hashPassword)

    if (!check) {
      handleHttpError(res, "Password_Invalid", 401);
      return;
    }

    user.set("password", undefined ,{strict:false})
    const data = {
      token: await tokenSign(user),
      user 
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, "Error_Login_User"); //error
  }
};

module.exports = { registerCtrl, loginCtrl };
