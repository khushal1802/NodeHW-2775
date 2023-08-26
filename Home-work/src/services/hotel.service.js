const { Hotel } = require("../models");

const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

const getHotelslist = async (req, res) => {
  return Hotel.find({$or:{_is_active:true}});
};

const deleteHotel = async (hotelId) => {
  return Hotel.findByIdAndDelete(hotelId);
};

module.exports = {
  createHotel,
  getHotelslist,
  deleteHotel,
};
