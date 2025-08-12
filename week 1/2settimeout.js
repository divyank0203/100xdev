//setTimeout is a function that also passes the time it takes for the function to execute

function print(){
    console.log("called function");
}


// one parameter is the function to execute and the other parameter is the time after which the passed function will execute
setTimeout(print, 2000);

// Even though this operation is to be executed after the setTimeout,
//js will not wait for setTimeout to be executed and it will execute the next line of code
console.log(3+2);



//setInterval also takes the same parameters
// the difference is that it will keep on executing the function at the interval of time specified


