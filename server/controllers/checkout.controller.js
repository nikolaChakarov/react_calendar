exports.checkoutController = async (req, res, next) => {
    console.log("ok from controller");

    try {
        res.status(200).json({
            status: "sucess",
            key: process.env.STRIPE_KEY,
        });
    } catch (err) {
        next(err);
    }
};
