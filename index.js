const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const PORT = 8080;
const mongoose = require('mongoose');

//Database
mongoose.connect('mongodb://localhost/Todo');
mongoose.Promise = global.Promise;

// Routes
const Router = require('./routes/routes');

//App use
app.use(BodyParser.json());
app.use(Router);

app.listen(process.env.port || PORT, ()=>{
    console.log("Server started on " + PORT)
});