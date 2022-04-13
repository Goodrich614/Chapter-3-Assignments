// Minimum
const min = (num1, num2) => {
    console.log(Math.min(num1, num2));
}
console.log('**************** Minumum Exercise ****************')

min(20, 10);
min(0, -12);

// Odd or Even
const oddEven = (num) => {
    if(num % 2 === 0) return true;
    else return false;
}

console.log('**************** oddEven Exercise ****************')

console.log(oddEven(2));
console.log(oddEven(35));
console.log(oddEven(-1));

// Bean counting
let str1;

const countBs = (string) => {
    // split separates a string into substrings using a specified separator. 'b' here
    console.log(string.split('b').length);
}

console.log("**************** Count # of B's / chars ****************")

countBs('Bonobo chimp');

const countChars = (string, char) => {
    console.log(string.split(char).length-1);
}

countChars('Hello', 'l')