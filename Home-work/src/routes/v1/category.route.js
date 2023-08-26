const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  // validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/** Get categort list */
router.get(
  "/list",
  // validate(categortValidation.getcategortList),
  categoryController.getCategoryList
);

/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  // validate(categoryValidation.getDetails),
  categoryController.deleteCategory
);
module.exports = router;