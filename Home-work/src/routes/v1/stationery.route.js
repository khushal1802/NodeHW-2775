const express = require("express");
const {stationeryValidation}=require("../../services");
const {stationeryController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-stationery",
    stationeryController.createStationery
)

router.get(
    "/list",
    stationeryController.getStationerylist
)

router.delete(
    "/delete-stationery/:stationeryId",
    stationeryController.deleteStationeryById,
)

module.exports=router;