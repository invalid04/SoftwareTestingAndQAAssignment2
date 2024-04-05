const express = require('express');
const bodyParser = require('body-parser');
const calculateBMI = require('./calculateBMI');
const categorizeBMI = require('./categorizeBMI');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static('public'));

app.post('/calculate', (req, res) => {

    const weightPounds = parseFloat(req.body.weightPounds);
    const heightInches = parseFloat(req.body.heightInches);

    const bmi = calculateBMI(weightPounds, heightInches);
    const bmiCategory = categorizeBMI(bmi);

    res.send(`Your BMI is: ${bmi.toFixed(2)}. Your BMI category is: ${bmiCategory}.`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

