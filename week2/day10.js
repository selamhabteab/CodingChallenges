//WEEK 2

// DAY 10 - Su, 9/19 - Chunky Monkey

// Challenge: Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as two dimensional array. 

//My logic (pseudocode): 
//Create a function that takes in an array and number 
//Iterate through array and add conditional to push values at every num index into a nested array

function chunkyMonkey(arr, num){
    firstDim = []
    secondDim= []
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        if (arr.indexOf(arr[i])<num) {
            secondDim.push(arr[i])
            console.log("sec dim: ", secondDim);
        } else if (arr.indexOf(arr[i])%num===0){
            console.log(arr[i]);
        }
    }
    firstDim.push(secondDim)
    return firstDim
}
var arrayEx = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
             // 0    1    2    3    4    5    6    7    8
console.log(chunkyMonkey(arrayEx, 3)); //--> [[a, b, c], [d, e, f], [g, h, i]]
// console.log(chunkyMonkey(arrayEx, 2)); //--> [[a, b], [c, d], [e, f], [g, h], [i]]

function chunkArray(arr, size) {
    var groups = [];
    while (arr.length>0){
        groups.push(arr.slice(0,size));
        arr = arr.slice(size)
    }
    return groups
}
console.log(chunkArray(arrayEx, 2));
