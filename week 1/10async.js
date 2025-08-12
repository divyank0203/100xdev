//some asynchronous funtions provided by JS

// setTimeout, setInterval, clearTimeout, clearInterval
// fetch -- used to fetch some data ferom an API endpoint
// fs.readFile, fs.writeFile -- used to read and write files in Node.js

// readfile:-
const fs = require("fs"); //this gives access to the file system i.e., read and write

// fs.readFile("10read.txt", "utf-8", (err, data) => {
//     console.log((data));
// })

setTimeout(function(){
    console.log("First timeout executed");
}, 4000);

let a =0;
for(let i=0; i<10; i++){
    a++;
console.log(a);
}

setTimeout(function(){
    console.log("Second timeout executed");
}, 2000);




console.log("In between");
