// Write a program to Calculate the Body Mass Index(BMI) of a person and display whether he is underweight, normal weight or overweight.

// Steps:
// 1. Read about the body mass Index and make a flow chart which which represents your problem.
// 2. Use conditional statements to check range in which calculated BMI lies and display the desired message.

// STEP 3 IS OPTIONAL
// 3. To add to this task you can try taking the input and displaying the output on the webpage itself using DOM methods like getElementById and innerHTML.


const feetsInchesToMeters = (feet, inches) => {
    const totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
    return totalInches * 0.0254;
};

const CalculateBMI = (feet, inches, weight) => {
    const meters = feetsInchesToMeters(feet, inches);
    return parseFloat(weight) / meters ** 2;
};

const bmiResult = (bmi) => {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
};

const main = () => {
    const height = prompt("Enter your height in feet and inches (format: feet.inches): ");
    const [feet, inches] = height.split('.');
    let weight = prompt("Enter your weight in kilograms: ");

    if (isNaN(feet) || isNaN(inches) || isNaN(weight)) {
        alert("Please enter valid numbers");
        return;
    }

    const bmi = CalculateBMI(feet, inches, weight).toFixed(3);
    const result = bmiResult(bmi);

    console.log(`Your BMI is ${bmi}, You category is "${result}"`);
    document.getElementById('bmi').innerHTML = `Your BMI is ${bmi}, You category is "${result}"`;
    document.getElementById('calculate-bmi').onclick = () => main();
};

main();