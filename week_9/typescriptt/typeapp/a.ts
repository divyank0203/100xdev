let x: number = 44;
console.log(x);

const y: string = "Helloooo";
console.log(y);

function hello(name: string){
    console.log(`Hello ${name}`);
}

hello("My name is this"); 

function sum(a: number, b: number): number{
    console.log("The Sum is: ") 
    return a+b;
}

console.log(sum(4,5));

function islegal(age: number ): boolean{
    if(age>=18){
        return true;
    }
    else return false;
}

console.log(islegal(20));

function delay(fn: () => void, ms: number){
    setTimeout(fn, ms);
}

delay(function(){console.log("Delayed hello")}, 2000);