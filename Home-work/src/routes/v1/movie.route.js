const express = require("express");
const {movieValidation}=require("../../validations");
const {movieController}=require("../../controllers");

const router=express.Router();

router.post(
    "/create-movie",
    movieController.createMovie
)

router.get(
    "/list",
    movieController.getMovieList
)

router.delete(
    "/delete-movie/:movieId",
    movieController.deleteMovieById,
)

module.exports=router;