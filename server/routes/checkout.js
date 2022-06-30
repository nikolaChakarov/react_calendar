const router = require("express").Router();

const { checkoutController } = require("../controllers/checkout.controller");

router.post("/", checkoutController);

module.exports = router;
