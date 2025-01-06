var inputArr = [1,2,3,9,10,7,5,4,3];

function greaterThan5(inputArr){
    return inputArr>5;
}

console.log(inputArr.filter(greaterThan5));