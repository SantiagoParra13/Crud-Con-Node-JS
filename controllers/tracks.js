    const {tracksModel}=require("../models")
    
    
    
    /**
     * obtener lista de la base de datos
     *    @param{*} req
     *    @param{*} res 
     * 
     */ 
   
    const getItems=async (req,res)=>{
       const data=await tracksModel.find({})

    res.send({data})
};

    const getItem=(req,res)=>{};

   /**
     * Insertar un Registro
     *    @param{*} req
     *    @param{*} res 
     * 
     */ 

    const createItem=(req,res)=>{
        const {body}=req
        console.log(body)
        res.send({algo:1})
    };

  /**
     * Actualixar un Registro
     *    @param{*} req
     *    @param{*} res 
     * 
     */ 

    const updateItems=(req,res)=>{};

  /**
     *  Eliminar unn Registro
     *    @param{*} req
     *    @param{*} res 
     * 
     */ 

    const deleteItems=(req,res)=>{};

    module.exports={getItems,getItem,createItem,updateItems,deleteItems}