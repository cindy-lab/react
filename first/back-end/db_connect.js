const express = require('express');
const app = express();
var http = require('http');
var fs = require('fs');
const bodyParser = require('body-parser');
const cors =require('cors');
const mongoose = require('mongoose');
const DB = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(DB.DB, {useNewUrlParser: true}).then(
    ()=>{
        console.log("Database is connected successfullly")
    }, err =>{
        console.log(err)
    }
)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

