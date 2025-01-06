function calc(a, b, op) {
    let ans = 0;
    switch (op) {
        case "+":
            ans = a + b;
            break;
        case "-":
            ans = a - b;
            break;
        case "*":
            ans = a * b;
            break;
        case "/":
            if (b !== 0) {
                ans = a / b;
            } else {
                ans = "division by zero is invalid.";
            }
            break;
        default:
            ans = "incorrect input";
    }
    return ans;
}

console.log(calc(2, 3, "+"));  //answer is 5.
console.log(calc(19,3, "-"));  //answer is 16.
console.log(calc(3, 4, "*"));  //answer is 12.
console.log(calc(12,4, "/"));  //answer is 3.
console.log(calc(11,0, "/"));  //division by zero is invalid.
console.log(calc(2,4, "!"));   //incorrect input.