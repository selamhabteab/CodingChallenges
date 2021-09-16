//WEEK 1

// DAY 3 - Su, 9/12 - Factorialize

// Check for Palindrome. Return true if the given string is a palidrome. Otherwise, return false. 
//My logic (pseudocode): 
//Create a function that takes in a string
//assign a variable to hold: split string into an array 
//create a conditional that checks if that variable matches with it in reverse. 

function palindrome (string) {
    let string1 = string
    let string2 = string.split('').reverse().join('')
    console.log(`reversed string: `, string2);
    console.log(`original string: `, string1);
    if (string1 === string2) {
        return true
    }
    return false
}
console.log(palindrome("racecar"));

//After working on the function i learned I could shorten the function. 
function pali (string) {
    let reversed = string.split('').reverse().join('')
    if (reversed === string) return true;
    return false
}
console.log(pali("racecar")); //true
console.log(pali("selam")); //false
