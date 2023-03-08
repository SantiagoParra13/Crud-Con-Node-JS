const express =require("express")
const fs=require("fs")
const router= express.Router();

const PATH_ROUTES=__dirname;                        // Establece la ruta del directorio
const removeExtension=(fileName)=>{                 //Eliminar la extension del archivo
    //todo tracks.js[tracks,js]
    return fileName.split('.').shift()              //Separa el nombre del archivo de su extensión y devuelve el nombre sin extensión
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{        //filtra los archivos del directorio (path_routes) que cumplan con la condicion
    const name=removeExtension(file)                //todo index,track  Obtiene el nombre del archivo sin extensión 
    if(name !== 'index'){                           // Si el nombre es diferente a index, se agrega al router 
       
        router.use(`/${name}`,require(`./${file}`))         //agrega todo localhost3000/api/tracks
    }
})


module.exports=router