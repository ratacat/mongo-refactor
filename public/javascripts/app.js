// wait for the window to load
$(function () {
  var $newTodo = $("#newTodo");
  var $todosCon = $("#todosCon");
  var todos = [];

  var todoTemp = _.template($("#todoTemp").html())

  // wait for #newTodo submit
  $newTodo.on("submit", function (e) {
    // prevent the page from reloading
    e.preventDefault();

    // turn form data into a string we can use
    var todoData = $newTodo.serialize();

    // POST form data
    $.post("/todos". todoData).
      done(function (data) {
        // reset the form
        $newTodo[0].reset();
        var $todo = $(todoTemp(data));
        
        // add id to $todo
        $todo.data("id", data.id);
        $todosCon.append($todo);
        todos.push(data);
      });

  });

});
