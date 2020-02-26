const express = require('express');
const Router = express.Router();
const todo = require('../schema/schema');

Router.get('/', (req, res) => {
    //console.log(req);
    res.send("Hello World")
});

//GET all todos
Router.get('/todo/:chatID', function (req, res) {
    //console.log(req.params)
    todo.find({
        chat_id: req.params.chatID
    }, function (err, users) {
        var userMap = {};
        users.forEach(function (user) {
            userMap[user._id] = [user.todoMessage, user.deadline];
        });
        res.json(userMap)
    });
});

//Create todo
Router.post('/todo', (req, res) => {
    console.log("POST Request Received")
    todo.create(req.body).then(function (todo) {
        res.send(todo)
    })
});

//Delete todo by it's name
Router.delete('/todo/:chatID/:todoMessage', (req, res)=>{
    todo.deleteOne({
        chat_id: req.params.chatID ,
        todoMessage: req.params.todoMessage
    }, function (err) {
        if (err)
            return handleError(err);
    }).then(()=>{
        res.json({
            message: "Successfully deleted!",
            statusCode: 200
        })
    })
});


module.exports = Router;