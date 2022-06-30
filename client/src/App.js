import { Routes, Route } from "react-router-dom";

import styled from "styled-components";

import Navigation from "./components/navigation/Navigation";
import Calendar from "./pages/Calendar";

import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Stripe from "./components/stripe/Stripe";

const App = () => {
    return (
        <AppContainer>
            <Navigation />

            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/calendar"} element={<Calendar />} />

                <Route path="/checkout" element={<Stripe />} />

                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/logout"} element={<Logout />} />
            </Routes>

            <Footer />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export default App;
