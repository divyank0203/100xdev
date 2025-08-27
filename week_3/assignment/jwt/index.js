const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const zod = require("zod");

const jwtpass = "secrettt";

app.use(express.json());

const schema = zod.object({
    email: zod.string(),
    password: zod.string().min(6)
});

function validate(req, res, next){
    const result = schema.safeParse(req.body);
    if(!result.success){
       return res.status(400).json({
            msg: "Invalid Input"
        })
    }
    else{
        next();
    }
}

app.post('/register', validate, function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    let token = jwt.sign({email: email}, jwtpass);
    res.status(200).json({token});
})

app.listen(3000);

