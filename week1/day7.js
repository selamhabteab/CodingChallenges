//WEEK 1

// DAY 7 - R, 9/16 - Confirm the Ending

// Challenge: Check if a string (1st arg) ends with the given target string (2nd arg). This challenge can be solved with the .endWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the Javascript substring methods instead. 

//My logic (pseudocode): 
//Create a function that takes in two arguments, the string and substring  
//Assign a variable to the substring of the 1st argument.
//Write a conditional that checks if the variable strictly equals the second argument
//return a boolean 

function endsWith(string, target) {
    let sub = string.substring(string.length-1);
    if (sub === target){
        return "true"
    } else {
        return "false"
    }
}
console.log(endsWith("Selam", "m"));
console.log(endsWith("Chris", "m"));

//VIDEO'S SOLUTION
function endsWithA(str, target) {
    let sub1 = str.substr(-target.length);
    console.log(sub1);
    if (sub1 === target){
        return "true"
    } 
        return "false"
}
console.log(endsWithA("Danberry", "ay"));
console.log(endsWithA("Hartford", "ord"));
