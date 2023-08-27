const { User } = require("../models");

// create user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

//  Get user list
const getUserList = async (req, res) => {
  return User.find()
};

// delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  deleteUser
};