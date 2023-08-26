const { groceryService } = require("../services");

const createGrocery = async (req, res) => {
  try {
    const reqBody = req.body;
    const grocery = await groceryService.createGrocery(reqBody)
    if (!grocery) {
      throw new Error("Something went wrong , please try again or later !!");
    }
    res.status(200).json({
      success: true,
      message: "Successfully created a new grocery",
      data: { grocery },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getGroceryList = async (req, res) => {
  try {
    const getList = await groceryService.getGroceryList(req, res);
    if (!getList) {
      throw new Error("grocery list found");
    }
    res.status(200).json({
      success: true,
      message: "Get grocery list successfully!",
      data: { getList },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteGroceryById = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    if (!groceryId) {
      throw new Error("grocery not found !");
    }
    await groceryService.deleteGroceryById(groceryId)
    res.status(200).json({
        success: true,
        message: "grocery delete successfully!",
      });
  } catch (error) {
    res.status(400).json({
        success: false,
        message: error.message,
      });
  }
};

module.exports = {
    createGrocery,
    getGroceryList,
    deleteGroceryById
};
