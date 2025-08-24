const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken"); //to import jsonwebtoken
const jwtPass = "123456789";

const app = express();
app.use(express.json());

const all_users = [{
    "id": 1,
    "username": "admin",
    "password": "user1pass"
}, {
    "id": 2,
    "username": "user",
    "password": "user2pass"
},
{
    "id": 3,
    "username": "user3",
    "password": "user3pass"
}];

const schema = zod.object({
    id: zod.number(),
    username: zod.string(),
    password: zod.string()
});

function userexists(username, password){
    for(let i=0; i<all_users.length; i++){
        if(all_users[i].username===username&&all_users[i].password===password){
            return true;
        }

    }
    return false;
}

app.post('/signin', function(req, res){
    const result = schema.safeParse(req.body);
    const username = req.body.username;
    const password = req.body.password;
    if(!result.success){
        return res.status(400).send('Invalid input');
    }
    if(!userexists(username, password)){
        return res.status(401).send('User does not exist');
    }
    let token = jwt.sign({username:username}, jwtPass);
    return res.status(200).json({token});

})

app.get('/users', function(req, res){

    let token = req.headers.authorization;
    try{
        
        let decoded = jwt.verify(token, jwtPass);
        let dusername = decoded.username;
        let userarray = [];
        for(let i=0; i<all_users.length; i++){
            if(all_users[i].username!==dusername){
                userarray.push(all_users[i]);
            }
        }
        return res.json({users: userarray});
    }
    catch(err){
        return res.status(401).send('Unauthorized');
    }
  
})




app.listen(3009);