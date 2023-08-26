const { Bus}=require("../models");

const createBus=async(reqBody)=>{
    return Bus.create(reqBody)
}

const getBuslist=async(req, res)=>{
    return Bus.find({$or:{_is_active:true}});
}

const deleteBus=async(busId)=>{
    return Bus.findByIdAndDelete(busId);
}

module.exports={
    createBus,
    getBuslist,
    deleteBus
}