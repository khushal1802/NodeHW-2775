const express = require("express");
const {pharmacyValidation}=require("../../validations");
const {pharmacyController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-pharmacy",
    pharmacyController.createPharmacy
)

router.get(
    "/list",
    pharmacyController.getPharmacylist
)

router.delete(
    "/delete-pharmacy/:pharmacyId",
    pharmacyController.deletePharmacyById,
)

module.exports=router;