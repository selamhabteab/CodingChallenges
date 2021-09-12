// Week 1

// DAY 1 - 9/10 - Reverse a string
//My logic: 1)split string into an array 2)reverse order of array 3)return array into a string with .join("")
function reverseString (string) {
    let tempArr = string.split('').reverse()
    return tempArr.join('')
}
console.log('original version: ',reverseString('hello'));

//short version:
const reverseStr = (string) => tempArr = string.split('').reverse().join('')
console.log('short version: ', reverseStr('hello'));

//using a for loop 
function reverseForLoop (string) {
    let tempStr = '';
    for (let i=string.length-1; i>=0; i--){
        tempStr+=string[i]
    }
    return tempStr
}
console.log('For Loop version: ',reverseForLoop('hello'));
//------------------------------------

// DAY 2 - 9/11 - Factorialize

//Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//factorials are often represented with the shorthand notation "n!" For example: 5! = 1 * 2* 3 * 4 * 5 = 120

//My logic: 
//Create a function
//Pass in an argument for 'n'
//declare a variable to catch each iteration of the for loop
//Create a for loop that counts down i--
//Reassign the variable with a multiplication assignment operator
function factorial (n) {
    let solution = 1
    for (let i=n; i>0; i--) {
        solution *= i;
    }
    return solution
}
console.log('factorial: ',factorial(5));

//------------------------------------

// DAY 3 - 9/12 - Factorialize

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
