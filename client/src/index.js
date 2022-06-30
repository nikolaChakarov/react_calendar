import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { GlobalProvider } from "./context/GlobalProvider";
import { BrowserRouter } from "react-router-dom";

(async () => {
    const { key } = await fetch(
        "http://localhost:5000/api/create-checkout-session"
    ).then((res) => res.json());

    const stripePromise = loadStripe(key);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <BrowserRouter>
            <GlobalProvider>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </GlobalProvider>
        </BrowserRouter>
    );
})();
