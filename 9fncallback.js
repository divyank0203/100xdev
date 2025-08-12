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