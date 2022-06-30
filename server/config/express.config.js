const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("../router");
const handleError = require("../middlewares/handleError");

const whitelist = ["http://localhost:3000", "http://192.168.0.102:3000"];

const expressConfig = (app) => {
    app.use(
        cors({
            origin: function (origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                    callback(null, true);
                } else {
                    callback(new Error("Not allowed by CORS"));
                }
            },
            credentials: true,
        })
    );

    app.use(express.json());

    app.use(cookieParser());

    app.use(router);

    app.use(handleError);
};

module.exports = expressConfig;
