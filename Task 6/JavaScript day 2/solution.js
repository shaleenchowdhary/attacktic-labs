// Create a program to Calculate the Sum of Individual Digits of a 3 digit Number

// HINT: Convert the number into a string so that you can target each digit individually and then add them by converting them back to number.
// You can use your browser console to test your code

// DO NOT RIGHT ANYTHING ABOVE
// WRITE YOUR CODE BELOW FOLLOWING EACH STEP IN ORDER TO TARGET THAT STEP ONLY


function sumDigits(n) {
  let sum = 0;
  let str = n.toString();

  sum += parseInt(str[0]);
  sum += parseInt(str[1]);
  sum += parseInt(str[2]);

  return sum;
}
console.log(sumDigits(123));