/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function one(){
    const p1 = new Promise(function(resolve){
        setTimeout(function(){
            console.log("Promise 1 resolved after 1 second");
            resolve("Result from Promise 1");
        }, 1000);
    })
    return p1;
}
function two(){
    const p2 = new Promise(function(resolve){
        setTimeout(function(){
            console.log("Promise 2 resolved after 2 seconds")
            resolve("Result from Promise 2")
        }, 2000);
    })
    return p2;
}
function three(){
    const p3 = new Promise(function(resolve){
        setTimeout(function(){
            console.log("Promise 3 resolved after 3 seconds")
            resolve("Result from promise 3")
            
        }, 3000)
    })
    return p3;
}
const ps = [one(), two(), three()];

const start = new Date().getTime();
return Promise.all(ps)
    .then(function(results){
        const end = new Date().getTime();
        console.log("All promises resolved");
        console.log(results);
        console.log(`Time taken === ${end-start} ms`);
    })