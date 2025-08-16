// const fs = require("fs");

const express = require('express')
const app = express();
const port = 3000

//fs.redFileSync('index.html', 'utf8', (err, data) => {
//  if (err) throw err;
//  console.log(data);
//});


//GET is the default method for a request. '/' is the route.
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req, res){
  res.send('Hello World!')
})


app.post('/conversation', function(req, res){
    const message = req.query.message || 'No message provided';
    console.log(`Received message: ${message}`);
    res.send(`Message received: ${message}`);
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})


// This above code creates a simple HTTP server using Express.js.
// It listens on port 3000 and responds with "Hello World!" when the root URL is accessed.
  