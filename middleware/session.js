const { handleHttpError } = require("../utils/handleError");
const {verifyToken} =require ("../utils/handleJwt")


const authMiddleware = async (req,res,next) =>{
     try{
        if(!req.headers.authorization){
            handleHttpError (res,"Not_Token" ,401)
            return
        }

        const token= req.headers.authorization.split(" ").pop();                         //llega todo el token lo separa y omite la palabra bearer
        const dataToken = await verifyToken(token);

        if(!dataToken._id){
            handleHttpError (res,"Error_Id_Token" ,401)
            return  
        }
        next()

     } catch(e){
        
        handleHttpError (res,"Not_Session" ,401)
     }
}

module.exports= authMiddleware