const { Book } = require("../models");

//  Create category
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

//  Get category list
const getBookList = async (req, res) => {
  return Book.find()
};

// delete category
const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};


module.exports = {
    createBook,
  getBookList,
  deleteBook
};