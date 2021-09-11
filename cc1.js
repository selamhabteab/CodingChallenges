// Week 1

// Day 1 - 9/10 - Reverse a string
//My logic: 1)split string into an array 2)reverse order of array 3)return array into a string with .join("")
function reverseString (string) {
    let tempArr = string.split('').reverse()
    return tempArr.join('')
}
console.log(reverseString('hello'));

//short version:
const reverseStr = (string) => tempArr = string.split('').reverse().join('')
console.log(reverseStr('hello'));

//using a for loop 
function reverseForLoop (string) {
    let tempStr = '';
    for (let i=string.length-1; i>=0; i--){
        tempStr+=string[i]
    }
    return tempStr
}
console.log(reverseForLoop('hello'));
//------------------------------------
// Day 2 - 9/11 - Factorialize