// Ask the user for their name, then greet them with a personalized message, using only the first three letters of their name.
// If I my enter my name as Mandeep then the alert should be: Hello, Man!

// DO NOT RIGHT ANYTHING ABOVE
// WRITE YOUR CODE BELOW FOLLOWING EACH STEP IN ORDER TO TARGET THAT STEP ONLY

// STEP 1: Ask for user's name and store it in a variable
let name = prompt("Please enter your name:");

// STEP 2: Slice the first three letters of their name using a approporiate function
let initials = name.slice(0, 3);

// STEP 3: Greet them with a personalized message such as Hello <FIRST THREEE LETTER OF THE NAME>!
alert("Hello, " + initials + "!");
