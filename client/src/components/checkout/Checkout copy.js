import { useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

const Checkout = () => {
    const [color, setColor] = useState("red");

    const handleClick = async () => {
        setColor("green");

        try {
            const res = await fetch(
                "http://localhost:5000/api/create-checkout-session",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        items: [
                            { id: 1, quantity: 3 },
                            { id: 2, quantity: 1 },
                        ],
                    }),
                }
            );

            if (!res.ok) {
                throw new Error(res.message);
            }

            const { url } = await res.json();

            window.location.href = url;

            // <Navigate to={url} />;
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <CheckoutContainer>
            <button
                onClick={handleClick}
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
