const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose1 = require('mongoose');
app.use(express.json());

let count = 0;
function reqmiddleware(req, res, next){ //middleware to count the number of requests
    
    count++;
    console.log(count);
    next();
    
}

//mddleware to limit rate of requests per second
let users = {};
setTimeout(function(){ //clearing the users object after 1 second
    users={};
}, 1000)
function limitmiddleware(req, res, next){
    const userid = req.headers['userId'];
    if(!users[userid]){
        users[usersid]=1;
    }
    else{
        users[userid]++;
    }
    if(users[userid]>5){
        return res.status(429).json({"msg": "Too many requests"});
    }
    next();
}

app.use(reqmiddleware); // universal so it works before any route

app.get('/create', limitmiddleware, function(req, res){
    res.status(200).json({msg: "success"});
})

app.post('/create', limitmiddleware, function(req, res){
    res.status(200).json({msg: "user created successfully"});
})



app.listen(3000)



