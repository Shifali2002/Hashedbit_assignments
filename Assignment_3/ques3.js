let string = 'INDIA';
let arr = string.split('');
arr.splice(3, 0, 'ONES');
console.log(arr.join(''));
