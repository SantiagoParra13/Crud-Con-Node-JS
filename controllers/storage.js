    const {storageModel}=require("../models")
    const PUBLIC_URL = process.env.PUBLIC_URL;

    
    
    
    /**
     * obtener lista de la base de datos
     *    @param{*} req
     *    @param{*} res 
     * 
     */ 
   
    const getItems=async (req,res)=>{
       const data = await storageModel.find({});

    res.send({data})
};

    const getItem=(req,res)=>{};

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

const createItem=async (req,res) =>{
  const {body,file} = req
  console.log(file)
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
}

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
