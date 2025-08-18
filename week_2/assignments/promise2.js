let p = new Promise(function(resolve){
        console.log("Promise started");
        setTimeout(function(){
            resolve("Third Promise");
        }, 2000);
})

p.then(function(){
    console.log(2+2);
})
console.log(p);

async function one(){
    let value = await p;
    console.log(`one() resolved with: ${value}`);
}
one();