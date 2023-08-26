const {Travel}=require("../models")

const createTravel=async(reqBody)=>{
    return Travel.create(reqBody);
}

const getTravellist=async(req,res)=>{
    return Travel.find({$or:{_is_active:true}});
}

const deleteTravelById=async(travelId)=>{
    return Travel.findByIdAndDelete(travelId)
}
module.exports={
    createTravel,
    getTravellist,
    deleteTravelById
}