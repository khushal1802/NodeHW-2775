const {Music}=require("../models")

const createMusic=async(reqBody)=>{
    return Music.create(reqBody)
}

const getMusicList=async(req,res)=>{
    return Music.find({$or:{_is_active:true}});
}

const deleteMusicById=async(MusicId)=>{
    return Music.findByIdAndDelete(MusicId)
}

module.exports={
    createMusic,
    getMusicList,
    deleteMusicById
};