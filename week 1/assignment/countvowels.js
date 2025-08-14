/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countvowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const l = str.toLowerCase().split('');
    let count = 0;
    for(let i = 0; i < l.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(l[i] === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}
console.log(countvowels('Hello Warlord')); 