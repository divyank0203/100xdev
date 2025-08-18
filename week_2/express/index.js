// creating an HTTP server using Express
const express = require('express');
const app = express();

const users = [{
    name: 'Ron Killings',
    kidneys: [{
        healthy: false,
    }, {
    healthy: false,
    }],
    email: 'ronnotjon@gmail.com', 
}]


// 'get' method takes input using the query parameter req.query.(parameter_name)
app.get('/', function(req, res){
    const kidney = users[0].kidneys;
    const numberofkidneys = kidney.length;
    const health = kidney.filter(function(k){
        return k.healthy === true;
    })
    const healthykidneys = health.length;

    res.json({
        user: users[0].name,
        email: users[0].email,
        kidneys_present: numberofkidneys,
        healthy: healthykidneys,
        unhealthy: numberofkidneys - healthykidneys,
    })
})


// to parse the body of the request, we need to use express.json() middleware
app.use(express.json());


// 'post' method takes input using the body parameter req.body.(parameter_name)
app.post('/', function(req, res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy,
    })
    res.json({
        msg: "DONE"
    })
})


// 'put' method updates the data using the body parameter req.body.(parameter_name)
// In this case, we are updating the unhealthy kidney to healthy and the healthy one to unhealthy
app.put('/', function(req, res){
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy === false){
            users[0].kidneys[i].healthy = true;
            
        }
        else{
            users[0].kidneys[i].healthy = false;
        }
    }
    res.json({
        msg: "Updated the first unhealthy kidney to healthy"
    })

})


// 'delete' method deletes the data using the body parameter req.body.(parameter_name)
app.delete('/', function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy===false){
            delete users[0].kidneys[i].healthy;
        }
    }
    res.json({
        msg: "Deleted the unhealthy kidneys"
    })
})





// function getsum(n){
//     let sum=0; 
//     for(let i=0; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }

// app.get('/', function(req, res){
//      const n = parseInt(req.query.n);
//      const ans = getsum(n);
//      res.send(`The sum is <b>${ans.toString()}</b>`);
// })

app.listen(3003);