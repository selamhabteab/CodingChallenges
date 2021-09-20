//WEEK 2

// DAY 9 - Sa, 9/18 - Truncate a string

// Challenge: Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

//My logic (pseudocode): 
//Create a function that takes in a string and number 
//Create a conditional that checks if the string.length is greater than the second argument, num
//if string.length is larger than number,then slice string 
//and concatenate "..."
//elseif string.length is equal or less than the number, then return string as is

function truncateStr(str, num){
    if (str.length > num) {
        let difference = str.length - num
        let newStr = str.slice(0,-difference) + "..."
        return newStr
    } 
    return str
}
console.log(truncateStr("selamay", 5)); //--> "selam..."
console.log(truncateStr("Walhanti", 9)); //--> "Walhanti"

