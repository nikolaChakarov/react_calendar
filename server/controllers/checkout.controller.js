const stripe = require("stripe")(process.env.STRIPE_KEY);

// db of services and prices
const storeItems = new Map([
    [1, { priceInCents: 1000, name: "Learn React Today" }],
    [2, { priceInCents: 2000, name: "Learn Css Today" }],
]);

exports.checkoutController = async (req, res, next) => {
    console.log("ok from controller");

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            // one time payment; no subscription
            mode: "payment",
            // redirect if success
            success_url: "http://localhost:3000/login",
            // redirect if fail
            cancel_url: "http://localhost:3000/",
            // purchesed items from the front-end
            line_items: req.body.items.map((item) => {
                const storeItem = storeItems.get(item.id);

                return {
                    price_data: {
                        currency: "BGN",
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                };
            }),
        });

        res.status(200).json({
            status: "sucess",
            url: session.url,
        });
    } catch (err) {
        next(err);
    }
};
