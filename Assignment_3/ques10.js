function reverse(s){
    return s.split('').reverse().join('');
}

var s = prompt("Enter string:");
console.log(reverse(s));