function findTax(salary) {
    let tax = 0;
    
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = 0.1 * salary;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = 0.2 * salary;
            break;
        case (salary > 1500000):
            tax = 0.3 * salary;
            break;
        default:
            break;
    }
    
    return tax;
}

let salary = prompt("What is your salary");
console.log("Tax on salary " + salary + " is " + findTax(salary));
