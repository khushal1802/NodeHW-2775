const { productService } = require("../services");

const createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    const product = await productService.createProduct(reqBody);
    if (!product) {
      throw new Error("Error creating product");
    }
    res.status(200).json({
      success: true,
      message: "product created successfully",
      data: { product },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductlist = async (req, res) => {
  try {
    const getlist = await productService.getProductlist(req, res);
    if (!getlist) {
      throw new Error("product list found");
    }
    res.status(200).json({
      success: true,
      message: "get product list successfully",
      data: { getlist },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    if (!productId) {
      throw new Error("product not found !");
    }
    await productService.deleteProductById(productId);
    res.status(200).json({
      success: true,
      message: "product delete successfuly !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProductlist,
  deleteProductById,
};
