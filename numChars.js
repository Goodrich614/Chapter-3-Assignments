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