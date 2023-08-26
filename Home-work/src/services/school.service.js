const {School}=require("../models")

const createSchool=async(reqBody)=>{
    return School.create(reqBody)
}

const getSchoolList=async(req,res)=>{
    return School.find({$or:{_is_active:true}});
}

const deleteSchool=async(schoolId)=>{
    return School.findByIdAndDelete(schoolId)
}

module.exports={
    createSchool,
    getSchoolList,
    deleteSchool
};