/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function one(){
    const p1 = new Promise(function(resolve){
        setTimeout(resolve, 1000);
    })
    return p1;
}
function two(){
    const p2 = new Promise(function(resolve){
        setTimeout(resolve, 2000);
    })
    return p1;
}
function three(){
    const p3 = new Promise(function(resolve){
        setTimeout(function(){
            
        })
    })
    return p1;
}
const ps = [one(), two(), three()];