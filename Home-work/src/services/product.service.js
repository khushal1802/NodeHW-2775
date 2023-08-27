const {Product}=require("../models")

const createProduct=async(reqBody)=>{
    return Product.create(reqBody);
}

const getProductlist=async(req,res)=>{
    return Product.find({$or:[{is_active:true}]});
}

const deleteProductById=async(ProductId)=>{
    return Product.findByIdAndDelete(ProductId)
}
module.exports={
    createProduct,
    getProductlist,
    deleteProductById
}