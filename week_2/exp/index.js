const express = require('express')
const app = express()
app.use(express.json());
app.get('/', function(req, res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username!="divyank"&&password!="susupotty"){
        res.status(403).json({
            msg: "Access Denied"
        })
        return ;
    }
    if(kidneyId!=1&&kidneyId!=2){
        res.status(411).json({
            msg: "Invalid Kidney ID"
        })
        return ;
    }

    res.send('Healthy...')

})

app.listen(3003);

