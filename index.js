var express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));


var views = path.join(process.cwd(), "views");

var todos = [
              {
                index: 0,
                title: "Do Laundry",
                description: "Two Loads"
              }
            ];

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});


app.listen(3000, function () {
  console.log("WORKING");
});
