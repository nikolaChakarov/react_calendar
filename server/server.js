require("dotenv").config();
const express = require("express");
const app = express();

const expressConfig = require("./config/express.config");
expressConfig(app);

app.listen(process.env.PORT, () => {
    console.log(`server is listening at port ${process.env.PORT}`);
});
