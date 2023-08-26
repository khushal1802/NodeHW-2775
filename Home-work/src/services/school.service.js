const {School}=require("../models")

const createSchool=async(reqBody)=>{
    return School.create(reqBody)
}

const getSchoolList=async(req,res)=>{
    return School.find();
}

const deleteSchool=async(schoolID)=>{
    return School.findByIdAndDelete(schoolID)
}

module.exports={
    createSchool,
    getSchoolList,
    deleteSchool
};