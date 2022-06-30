const router = require("express").Router();

const { checkoutController } = require("../controllers/checkout.controller");

router.get("/", checkoutController);

module.exports = router;
