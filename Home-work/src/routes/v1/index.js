const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const busRoute = require("./bus.route");
const hotelRoute=require("./hotel.route");
const stationeryRoute=require("./stationery.route");
const schoolRoute=require("./school.route");
const travelRoute=require("./travel.route");
const pharmacyRoute=require("./pharmacy.route");
const jewelryRoute=require("./jewelry.route");
const movieRoute=require("./movie.route");
const musicRoute=require("./music.route");
const groceryRoute=require("./grocery.route");


const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/bus", busRoute);
router.use("/hotel",hotelRoute);
router.use("/stationery",stationeryRoute);
router.use('/school',schoolRoute);
router.use("/travel", travelRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/jewelry", jewelryRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/grocery", groceryRoute);


module.exports = router;
