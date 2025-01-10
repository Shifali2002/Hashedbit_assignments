function sumOfDigits(number) {
    var sum = 0;
    while (number > 0) {
        sum += number % 10; // Add the last digit to sum
        number = Math.floor(number / 10); // Remove the last digit
    }
    console.log("Sum of digits: " + sum);
}

var number = prompt("Enter Number: ");
sumOfDigits(parseInt(number, 10)); // Convert the input to an integer
