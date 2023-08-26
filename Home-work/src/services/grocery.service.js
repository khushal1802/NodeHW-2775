const {grocery}=require("../models")

const createGrocery=async(reqBody)=>{
    return grocery.create(reqBody)
}

const getGroceryList=async(req,res)=>{
    return grocery.find({$or:{_is_active:true}});
}

const deleteGroceryById=async(groceryId)=>{
    return grocery.findByIdAndDelete(groceryId)
}

module.exports={
    createGrocery,
    getGroceryList,
    deleteGroceryById
};