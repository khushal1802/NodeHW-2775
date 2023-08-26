const express = require("express");
const { busValidation } = require("../../validations");
const { busController } = require("../../controllers");

const router = express.Router();

/**create bus */
router.post(
    "/create-bus",
     busController.createBus
);

/**get bus list */
router.get(
    "/list",
    busController.getBuslist
);

/** delete bus */
router.delete(
    "/delete-bus/:busId",
     busController.deleteBus
);

module.exports = router;
