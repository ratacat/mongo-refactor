var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/todos_app");

var todoSchema = new mongoose.Schema({
	title: {
		type: String,
		default: ""
	},
	description: {
		type: String,
		default: ""
	},
	completed: {
		type: Boolean,
		default: false
	}
});

var Todo = mongoose.model("Todo", todoSchema);
module.exports.Todo = Todo;