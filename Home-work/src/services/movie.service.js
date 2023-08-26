const {Movie}=require("../models")

const createMovie=async(reqBody)=>{
    return Movie.create(reqBody)
}

const getMovieList=async(req,res)=>{
    return Movie.find({$or:{_is_active:true}});
}

const deleteMovieById=async(MovieId)=>{
    return Movie.findByIdAndDelete(MovieId)
}

module.exports={
    createMovie,
    getMovieList,
    deleteMovieById
};