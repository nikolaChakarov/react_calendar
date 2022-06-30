const router = require("express").Router();

router.use("/api/create-checkout-session", require("./routes/checkout"));

module.exports = router;
