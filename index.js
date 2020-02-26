const express = require('express');
const BodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 8080;

//Database
mongoose.connect('mongodb://mongo:27017/Todo')
    .then(() => {console.log("Connected to DB")} )
    .catch(err => console.log(err));
mongoose.Promise = global.Promise;

// Routes
const Router = require('./routes/routes');

//App use
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(Router);

app.listen(process.env.port || PORT, ()=>{
    console.log("Server started on " + PORT)
});