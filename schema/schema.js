const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Database
const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    chat_id: {
        type: String,
        required: true
    },
    todoMessage: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }

});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;