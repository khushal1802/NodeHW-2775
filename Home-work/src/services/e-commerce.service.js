const{ Category}=require("../models")

const getCategoryList = async (req, res) => {
    return Category.find()
  };

module.exports={
    getCategoryList
}