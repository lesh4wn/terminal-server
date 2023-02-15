#!/usr/bin/env node

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middlewares
app.use(express.json({ limit: "500mb" }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Routes
require("./routes/user.route")(app);
require("./routes/location.route")(app);
require("./routes/product.route")(app);
require("./routes/customer.route")(app);
require("./routes/ticket.route")(app);

// Starts the server
app.listen(process.env.API_PORT, () =>
  console.log(`Server is now listening on port ${process.env.API_PORT}`)
);
