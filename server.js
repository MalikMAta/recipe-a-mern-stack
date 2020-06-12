// Bring in everything that we need to create the server
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// initialize express into a variable called app
const app = express();

// Set/require routes
const items = require("./routes/api/items");

//BodyParser middleware // Json
app.use(bodyParser.json());

// Set the mongoDb  URI from keys
const db = require("./config/keys").mongoURI;

//Connect to mongoDb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose Is connected"))
  .catch((err) => console.log(err));

// use routes
app.use("/api/items", items);

// Set port you want the app to listen on
const port = process.env.PORT || 5000;

// Listen on port...
app.listen(port, () => console.log(`Server has started on port" ${port}`));
