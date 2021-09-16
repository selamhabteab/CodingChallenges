//WEEK 1

// DAY 4 - M, 9/13 - Factorialize

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
