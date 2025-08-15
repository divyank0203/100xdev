/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function promisen(n){
    const p = new Promise(function(resolve){
        setTimeout(resolve, n*1000);
    })
    return p;
}

const d = promisen(5);
d.then(function(){
    console.log("promise resolved after 5 seconds");
})