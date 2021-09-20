//WEEK 2

// DAY 8 - F, 9/17 - Repeat the string number

// Challenge: Repeat a given string (first arg) num times (second arg). Return an empty string if num is not a positive number. 

//My logic (pseudocode): 
//Create a function that takes in a string and number...  
//Create a conditonal to return an empty string if num is a negative number
//Original idea was to use a for loop but see if there is a method that will repeat a string a bnumber of times:
    //The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

function repeatStr (str, num) {
    if (num<0) return "";
    return str.repeat(num)
}
console.log(repeatStr("abc", 3));

//Video also used recursion
    // function recursionEx(str,num) {
    //     if (num<0) return "";
    //     if (num===1) return str;
    //     return str + recursionEx(str, num-1);
    // }