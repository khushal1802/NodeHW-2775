const { Category } = require("../models");

//  Create category
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

//  Get category list
const getCategoryList = async (req, res) => {
  return Category.find()
};

// delete category
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};


module.exports = {
  createCategory,
  getCategoryList,
  deleteCategory
};