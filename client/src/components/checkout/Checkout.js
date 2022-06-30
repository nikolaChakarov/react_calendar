import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useState } from "react";
import styled from "styled-components";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_KEiWcx0WozP4sA2S4R63NmRh00zNwynJIu");

const Checkout = () => {
    const [color, setColor] = useState("red");

    return (
        <CheckoutContainer>
            <button
                style={{
                    background: color,
                }}
            >
                Checkout
            </button>
        </CheckoutContainer>
    );
};

const CheckoutContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    button {
        padding: 10px;
    }
`;

export default Checkout;
