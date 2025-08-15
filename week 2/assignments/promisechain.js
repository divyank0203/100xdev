/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function one(){
    const p1 = new Promise(function(resolve){
        setTimeout(function(){
            // console.log("Promise 1 resolved after 1 second");
            resolve("Result from Promise 1");
        }, 1000);
    })
    return p1;
}
function two(){
    const p2 = new Promise(function(resolve){
        setTimeout(function(){
            // console.log("Promise 2 resolved after 2 seconds")
            resolve("Result from Promise 2")
        }, 2000);
    })
    return p2;
}
function three(){
    const p3 = new Promise(function(resolve){
        setTimeout(function(){
            // console.log("Promise 3 resolved after 3 seconds")
            resolve("Result from promise 3")
            
        }, 3000)
    })
    return p3;
}

function promisechain(){
    return one().then(function(result1){
        console.log(result1);
    })
    .then(function(){
        return two().then(function(result2){
            console.log(result2);
        })
    }).then(function(){
        return three().then(function(result3){
            console.log(result3);
        })
    })
}
const start = new Date().getTime();

promisechain()

    .then(function(){
        
        console.log("All promises resolved");
        const end = new Date().getTime(); 
        console.log(`Time taken === ${end-start} ms`);
    })









    



/* function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third Promise");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = new Date().getTime();
  return wait1(t1)
    .then(() => {
      console.log("first promise done");
      return wait2(t2);
    })
    .then(() => {
      console.log("second promise done");
      return wait3(t3);
    })
    .then(() => {
      console.log("third promise done");
      const endTime = new Date().getTime();
      console.log("Time taken == ")
      return endTime - startTime;
    });
}

calculateTime(1, 2, 3)
    .then((time) => {
        console.log(`Total time taken for all promises: ${time} ms`);
    })
 */