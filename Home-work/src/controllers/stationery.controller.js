const { stationeryService } = require("../services");

const createStationery = async (req, res) => {
  try {
    const reqBody = req.body;
    const stationery = await stationeryService.createStationery(reqBody);
    if (!stationery) {
      throw new Error("Error creating Stationery");
    }
    res.status(200).json({
      success: true,
      message: "Stationery created successfully",
      data: {stationery},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getStationerylist = async (req, res) => {
  try {
    const getlist = await stationeryService.getStationerylist(req, res);
    if (!getlist) {
      throw new Error("Stationery list found");
    }
    res.status(200).json({
      success: true,
      message: "get Stationery list successfully",
      data: {getlist},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteStationeryById = async (req, res) => {
  try {
    const stationeryId = req.params.stationeryId;
    if (!stationeryId) {
      throw new Error("stationery not found !");
    }
    await stationeryService.deleteStationeryById(stationeryId);
    res.status(200).json({
      success: true,
      message: "stationery delete successfuly !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createStationery,
  getStationerylist,
  deleteStationeryById,
};
