    const customHeader = (req,res,next) =>{
        try{
            const apiKey = req.headers.api_key;
            if(apiKey === 'leifer-01'){
                next();
            }else{
                res.status(403);
                res.send({error:"Api_key_no_es_correcto"});
                }
        }catch(e){
                res.status(403);
                res.send({ error: "Algo_Ocurrio_en_el_custom_hedader" });
        }
    };


    module.exports=customHeader