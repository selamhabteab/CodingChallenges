//WEEK 1

// DAY 2 - Sa, 9/11 - Factorialize

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
