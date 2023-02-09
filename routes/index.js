const express =require("express")
const fs=require("fs")
const router= express.Router();

const PATH_ROUTES=__dirname;
const removeExtension=(fileName)=>{
    //todo tracks.js[tracks,js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{   
    const name=removeExtension(file)        //todo index,track
    if(name !== 'index'){
       
        router.use(`/${name}`,require(`./${file}`))  //todo localhost3000/api/tracks
    }
})


module.exports=router