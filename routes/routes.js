const express = require('express');
const Router = express.Router();
const todo = require('../schema/schema');

Router.get('/', (req, res)=>{
    console.log(req);
    res.send("Hello World")
});

//GET all todos
Router.get('/todo/:chatID', function (req, res) {
    todo.find({chat_id: req.params.chatID}, function (err, users) {
        var userMap = {};
        users.forEach(function (user) {
            userMap[user._id] = [ user.todoMessage, user.deadline] ;
        });
        res.json(userMap)
    });
});

//Create Todo
Router.post('/todo', (req, res)=>{
    todo.create(req.body).then(function (todo) {
        res.send(todo)
    })
});

module.exports = Router;