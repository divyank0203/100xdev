// function callbacks:- passing a function as a parameter in another function

function sum(n1, n2){
    return n1+n2;
}
function dif(n1, n2){
    return n1-n2;
}

// fntocall parameter is a function that is passed 
function calculate(n1, n2, fntocall){
     console.log(`The result is ${fntocall(n1, n2)}`);
}


calculate(5, 3, dif);
