const express=require("express");
const { schoolValidation}=require("../../validations")
const {schoolController}=require("../../controllers")

const router=express.Router();

router.post(
    "/create-school",
    schoolController.createSchool
)

router.get(
    "/list",
    schoolController.getSchoolList
)

router.delete(
       "/delete-school/:schoolId",
    schoolController.deleteSchool
)

module.exports=router;