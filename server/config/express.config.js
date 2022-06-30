const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("../router");
const handleError = require("../middlewares/handleError");

const expressConfig = (app) => {
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );

    app.use(express.json());

    app.use(cookieParser());

    app.use(router);

    app.use(handleError);
};

module.exports = expressConfig;
