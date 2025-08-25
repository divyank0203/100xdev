const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://divyankh444:fZmMsho4ncs4yS4Y@cluster0.ymjmmnx.mongodb.net/')


const User = mongoose.model('Users', { name: String, email: String, //creates a new collection called Users and stores the data in this format
    password: String
});


app.post('/signup', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existinguser =  User.findOne({email: email}); //checks if the user already exists
    if(existinguser){
        return res.status(400).send("User already exists");
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    });
    user.save();

    res.json({
        msg: "User Created Successfully"
    })
})



app.listen(3010);

