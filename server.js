const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("client/build"));
app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/nytimes-scraper";

mongoose.Promise = global.Promise;

  mongoose.connect(MONGODB_URI,function(error){
      if(error){
          console.log(error)
      } else {
          console.log("Successfully connected to DB");
      }
    });
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
