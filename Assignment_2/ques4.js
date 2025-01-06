function sumOfProducts(n1, n2) {
    return (Math.floor(n1 / 10) * Math.floor(n2 / 10)) + ((n1 % 10) * (n2 % 10));
}

let n1 = parseInt(prompt("Number 1: "));
let n2 = parseInt(prompt("Number 2: ")); 
console.log("Sum of products: " + sumOfProducts(n1, n2));
// for n1=12 and n2=23, answer is 8.
// for n1=6 and n2= 34, answer is 24.