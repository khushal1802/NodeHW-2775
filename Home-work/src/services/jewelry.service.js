const {Jewelry}=require("../models")

const createJewelry=async(reqBody)=>{
    return Jewelry.create(reqBody)
}

const getJewelryList=async(req,res)=>{
    return Jewelry.find({$or:{_is_active:true}});
}

const getJewelryById = async (jewelryId) => {
    return Jewelry.findById(jewelryId);
  };
  
  const updateDetails = async (jewelryId, updateBody) => {
    return Jewelry.findByIdAndUpdate(jewelryId, { $set: updateBody });
  };

const deleteJewelryById=async(jewelryId)=>{
    return Jewelry.findByIdAndDelete(jewelryId)
}

module.exports={
    createJewelry,
    getJewelryList,
    getJewelryById,
    updateDetails,
    deleteJewelryById
};