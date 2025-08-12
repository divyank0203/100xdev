//string length

function stringLength(str) {
    console.log(str.length);
}

stringLength("Rrrrrrrrrrrrr");



//Index of a character in the string
function stringIndex(str, char) {
    console.log(str.indexOf(char));
}

stringIndex("transponster hostile", "o");
//lastIndexOf gives the last available index of a string input parameter




//slice the string from a certain index to another
function stringSlice(str, start, end) {
    console.log(str.slice(start, end));
}
stringSlice("Hello, World!", 0, 4);


//replace the string with some other string

function rep(str, target, replacement){
    console.log(str.replace(target, replacement));
}

rep("Hello World", "World", "Hello");