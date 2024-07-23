// Create a program to Calculate the Sum of Individual Digits of a 3 digit Number

// HINT: Convert the number into a string so that you can target each digit individually and then add them by converting them back to number.
// You can use your browser console to test your code

// DO NOT RIGHT ANYTHING ABOVE
// WRITE YOUR CODE BELOW FOLLOWING EACH STEP IN ORDER TO TARGET THAT STEP ONLY

function calculate(num) {
    let sum = 0;
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    return sum;
}

const input = prompt("Enter a series of number without gap, I will print out the sum of all: ");
const answer = document.getElementById('answer');
answer.innerText = `Answer: ${calculate(input)}`;