//needed at top of file for user authentication
require("dotenv").config();
const passport = require("passport");

// Passport config
passport.use( require("./config/jwtPassportStrategy") );

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const mongoose = require('mongoose');

app.use(passport.initialize());

// Passport config
passport.use( require("./config/jwtPassportStrategy") );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gainzz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

//needed before "catch-all" route for authentication
app.use( "/api", require("./routes/authentication") );
//can add API routes here before HTML routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
});