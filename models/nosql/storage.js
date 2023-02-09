const mongoose=require("mongoose")

const StorageScheme = new mongoose.Schema(


{   
        url:{
            type:String
        },
        filename:{
            type:Number
        }
     
},

{
        timestamps:true, // TODO createdAt, updateAt
        versionkey:false
    }
);

module.exports=mongoose.model("Storages",StorageScheme)