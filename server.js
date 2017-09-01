var express = require("express");
var mongojs = require("mongojs");
var app = express();

app.use(express.static("public"));

var databaseUrl = "zoo";
var collections = ["animals"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.get("/all", function(req, res) {
  db.animals.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/name", function(req, res) {
  db.animals.find().sort({ name: 1 }, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/weight", function(req, res) {
  db.animals.find().sort({ weight: -1 }, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
