import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const elements = useElements();
    const stripe = useStripe();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        // do something with the elements;
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>Pay</button>
        </form>
    );
};

export default CheckoutForm;
