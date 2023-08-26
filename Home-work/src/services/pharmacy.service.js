const {Pharmacy}=require("../models")

const createPharmacy=async(reqBody)=>{
    return Pharmacy.create(reqBody);
}

const getPharmacylist=async(req,res)=>{
    return Pharmacy.find({$or:{_is_active:true}});
}

const deletePharmacyById=async(pharmacyId)=>{
    return Pharmacy.findByIdAndDelete(pharmacyId)
}
module.exports={
    createPharmacy,
    getPharmacylist,
    deletePharmacyById
}