const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const calculateBMI = require('./calculateBMI'); 

readline.question('Enter your weight in pounds: ', (weightPounds) => {
    readline.question('Enter your height in inches: ', (heightInches) => {
 
        const weight = parseFloat(weightPounds);
        const height = parseFloat(heightInches);

        const bmi = calculateBMI(weight, height);

        console.log(`Your BMI is: ${bmi.toFixed(2)}`);

        if (bmi < 18.5) {
            console.log("You're in the underweight range.");
        } else if (bmi >= 18.5 && bmi < 24.9) {
            console.log("You're in the healthy weight range.");
        } else if (bmi >= 25 && bmi < 29.9) {
            console.log("You're in the overweight range.");
        } else {
            console.log("You're in the obese range.");
        }

        readline.close();
    });
});