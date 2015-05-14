// wait for the window to load
$(function () {
  var $newTodo = $("#newTodo");
  var $todosCon = $("#todosCon");
  var todos = [];

  var todoTemp = _.template($("#todoTemp").html())
  
  $.get("/todos").
      done(function (todos) {
          
        _(todos).each(function (todo) {
            var $todo = $(todoTemp(todo))
            $todo.data("index", todo.index);
            console.log($todo.data())
            $todosCon.
              append($todo);
          });
      });

  // wait for #newTodo submit
  $newTodo.on("submit", function (e) {
    // prevent the page from reloading
    e.preventDefault();

    // turn form data into a string we can use
    var todoData = $newTodo.serialize();

    // POST form data
    $.post("/todos", todoData).
      done(function (data) {
        console.log(data);
        // reset the form
        $newTodo[0].reset();
        var $todo = $(todoTemp(data));

        // add id to $todo
        $todo.data("index", data.index);
        $todosCon.append($todo);
        todos.push(data);
      });

  });

  $todosCon.on("click", ".todoCon .delete", function (e) {
    var $todo = $(this).closest(".todoCon");
    var index = $todo.data("index");
    console.log("DELETE", index);
    $.ajax({
      url: "/todos/" +index,
      type: "DELETE"
    }).done(function () {
      $todo.remove();
    });
  });
});
