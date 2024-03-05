const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const calculateBMI = require('./calculateBMI'); 
const categorizeBMI = require('./categorizeBMI'); 

readline.question('Enter your weight in pounds: ', (weightPounds) => {
    readline.question('Enter your height in inches: ', (heightInches) => {
        const bmi = calculateBMI(parseFloat(weightPounds), parseFloat(heightInches));
        const bmiCategory = categorizeBMI(bmi);
        
        console.log(`Your BMI is: ${bmi.toFixed(2)}`);
        console.log(`Your BMI category is: ${bmiCategory}`);
        
        readline.close();
    });
});