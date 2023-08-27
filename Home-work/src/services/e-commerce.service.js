const{ Category,Product,User}=require("../models")

const getList = async (req, res) => {
    return Category.find(),Product.find(),User.find()
  };

module.exports={
  getList
}