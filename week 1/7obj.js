const jsUser = {
    name: "Divyank",
    age: 77,
    email: "divyankh44@gmail.com",
    days: ["Sunday", "Saturday", "Monday"]
    
}

// accessing an element
console.log(jsUser["name"])
console.log(jsUser["days"][2])

//changing the value
jsUser.email = "divyank@google.com"
console.log(jsUser["email"])

//freeze an object so it can't be changed
//Object.freeze(jsUser)

//create a function inside an object
jsUser.street = function(){
    console.log("grand blue")
}
console.log(jsUser.street())

//object assign:- assign value of one or more objects into another object
// object.assign(target_object, source_object, source2, source3,,...)
const obj = {
    1: "omega",
    2: "balor",
    3: "styles",
    4: "nakamura"
}

const obj2 = Object.assign({}, obj, jsUser)
console.log(obj2)


//de-structuring an object --> renaming element of an object

const inst = {
    coursename: "js",
    courseprice: "1299",
    courseinstructor: "Alakh Pandey",
    buy: false
}

//destructure courseinstructor to something else
const {courseinstructor: instruct} = inst
console.log(instruct)
//curly braces are used for destructuring

//to obtain all keys of an object(element name):=
console.log(Object.keys(inst))
//it provides all keys in form of an array

//to obtain all values of an object:=
console.log(Object.values(inst))

//to get all the entries(key along w/ it's value in form of arrays):=
console.log(Object.entries(inst))

//to check if an object consists of a certain property or key
console.log(inst.hasOwnProperty('coursename'))
