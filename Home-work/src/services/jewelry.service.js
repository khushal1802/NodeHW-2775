const {Jewelry}=require("../models")

const createJewelry=async(reqBody)=>{
    return Jewelry.create(reqBody)
}

const getJewelryList=async(req,res)=>{
    return Jewelry.find({$or:{_is_active:true}});
}

const deleteJewelryById=async(jewelryId)=>{
    return Jewelry.findByIdAndDelete(jewelryId)
}

module.exports={
    createJewelry,
    getJewelryList,
    deleteJewelryById
};