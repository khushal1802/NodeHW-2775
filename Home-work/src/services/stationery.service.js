const {Stationery}=require("../models")

const createStationery=async(reqBody)=>{
    return Stationery.create(reqBody);
}

const getStationerylist=async(req,res)=>{
    return Stationery.find({$or:{_is_active:true}});
}

const deleteStationeryById=async(StationeryId)=>{
    return Stationery.findByIdAndDelete(StationeryId)
}
module.exports={
    createStationery,
    getStationerylist,
    deleteStationeryById
}