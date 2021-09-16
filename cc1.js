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
//------------------------------------

// DAY 4 - 9/13 - Factorialize

// Find the longest word in a string. Retrn the length of the longest word in the provided sentence.
//My logic (pseudocode): 
//Create a function that takes in a string
//Assign a variable to hold: split string into an array 
//Assign a variable to hold the longestword
//create a filter or for loop that iterates through the array and filter out the value.stringlength that is longest. 
//return string length

function longestWord (string) {
    stringArray = string.split(' '); //["chris", "ate", "a", "hotdog"]
    longest = 0
    for (let i=0; i<stringArray.length; i++){
        if (stringArray[i].length > longest){
            longest = stringArray[i].length
        }
    }
    return longest
}
console.log("longest word count: ", longestWord("Chris ate a hotdog")); 
//longest word count: 6

//example used online:
var fruits = ["apple", "mango", "strawberries", "lemon"]
for (let fruit of fruits){
    console.log(fruit);
}
//another technique was to use a sort method on the string.split array and have the longest word at the beginning of array.
//------------------------------------

// DAY 5 - 9/14 - Title Case a Sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase. 
//My logic (pseudocode): 
//Create a function that takes in a string "this is a string"
//Assign a variable to hold: split string into an array 
//Apply a for loop to iterate through the array and use substring method to isolate the first letter of every value: string[i].substring(0,1)
//Apply uppercase method to the substring
//then join array to return to sentence 
    //["this", "is", "a", "string"]. --> ["t", "h", "i"...]

function titleCase (string) {
    sentence = string.split(" "); //-->["this", "is", "a", "string"]
    cap = []
    for (let i=0; i<sentence.length; i++){
        sentence[i].substring(0,1).toUpperCase() 
        // console.log(sentence[i].substring(0,1).toUpperCase());
            //extracts t, i, a, s --> T,I,A,S 
                //Doesn't work because you cant return extracted letter 
    }
    return sentence.join(" ")
}

// console.log(titleCase("This is a string."));

// Solution
//Create a function that takes in a string "this is a string"
//Assign a variable to hold: split string into an array 
//Apply a for loop to iterate through the array 
//Apply uppercase method to the first letter of every value 
//return array to a sentence with .join(" ")

function capitalized (string) {
    wordsArr = string.split(" "); //-->["this", "is", "a", "string"]
    console.log("words array: ", wordsArr);
    capitalizedSentence = []
    
    for (let i=0; i<wordsArr.length; i++){
        let substring = wordsArr[i].substring(1)
        let firstLetter = wordsArr[i][0].toUpperCase()
        let word = firstLetter + substring
        capitalizedSentence.push(word)
    };

    console.log("capitalized sentence: ", capitalizedSentence);
    
    return capitalizedSentence.join(" ")
}

console.log(capitalized("This is a string."));

//VIDEO SOLUTION
// function solution (string) {
//     let words = string.toLowerCase().split(" ");
//     for (let i=0; i<words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
//     }
//     return words.join(" ")
// }

//------------------------------------

// DAY 6 - 9/14 - Largest numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. 

//My logic (pseudocode): 
//Create a function that takes in an array 
    //[[4,5,1], [13,2,7], [9,10,1], [500,5,33]]
//Assign a variable to an empty array that will hold the largest numbers
//Apply a for loop to iterate through the array 
//add a conditional to extract the largest number in each array[i]
//push the longest numbers into the empty array


