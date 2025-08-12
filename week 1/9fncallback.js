function square(x){
    return x*x;
}
function cube(x){
    return x*x*x;
}

// Callback function example
function sumofsnc(x, y, fntocall){
    return fntocall(x) + fntocall(y);
}

console.log(sumofsnc(2, 3, square)); // Outputs: 13
console.log(sumofsnc(2, 3, cube)); // Outputs: 35

//another example of callback function
function sum(a, b, fn){
    return fn(a) + fn(b);
}
//anonymous function as a callback
console.log(sum(2, 3, function(a){
    return a * a; // square function
}))