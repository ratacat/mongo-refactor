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
                description: "Two Loads",
                completed: false
              }
            ];

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});


app.post("/todos", function (req, res) {
  var todo = req.body.todo;
  todo.index = todos.length;
  todo.completed = false;
  todos.push(todo);
  res.send(todo);
});

app.get("/todos", function (req, res) {
  res.send(todos);
});

app.delete("/todos/:index", function (req, res) {
  todos.splice(req.params.index);
  res.send(200);
});

app.listen(3000, function () {
  console.log("WORKING");
});
