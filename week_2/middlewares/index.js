const express = require('express')
const app = express()
app.use(express.json());

//Using middleware functions:-
function usermiddleware (req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username==="divyank"&&password==="standan"){

        //if the first condition checks, it moves on to the next

        next();
    }
    else{
        
            res.status(403).json({
            msg: "Access denied"
        })
    }
}

function kiddneymiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId!=1&&kidneyId!=2){
        res.status(411).json({
            msg: "Invalid input"
        })
    }
    else{
        //same as above
        next();
    }
}


//here, it will first precheck both the middleware functions and if succeeded then move on with the third and final function
// We can use app.use(middleware_function) before this get response and it will check it before moving on with anything after it
app.get('/health-checkup', usermiddleware, kiddneymiddleware, function(req, res){
    res.send('Healthy and Pissing');
})
    

// app.get('/', function(req, res){
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username!="divyank"&&password!="susupotty"){
//         res.status(403).json({
//             msg: "Access Denied"
//         })
//         return ;
//     }
//     if(kidneyId!=1&&kidneyId!=2){
//         res.status(411).json({
//             msg: "Invalid Kidney ID"
//         })
//         return ;
//     }

//     res.send('Healthy...')

// })

app.listen(3005);

