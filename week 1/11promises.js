// promise is syntactic sugar for callbacks
// it is a way to handle asynchronous operations in a more manageable way

// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.


//Wrapping an async function in another function
function myownsetTimeout(callback, delay) {
    setTimeout(callback, delay);
}
myownsetTimeout(function(){
    console.log("This is a custom setTimeout function");
}, 1000);


//Another way of doing this is using a promise i.e, wrapping it in a promise
function myPromiseSetTimeout(delay) {
    const p = new Promise(function(resolve){
        setTimeout(resolve, delay);
    });
    return p;
}
// Whatever is returned from the promise is a promise object
// We can use .then() to handle the resolved value of the promise
// What we pass in the .then() is a callback function that will be executed when the promise is resolved
// We can also use .catch() to handle the rejected value of the promise
myPromiseSetTimeout(2000).then(function() {
    console.log("This is a custom promise setTimeout function");
});