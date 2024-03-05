function calculateBMI(weightPounds, heightInches) {

  const weightKg = weightPounds * 0.45;
  const heightM = heightInches * 0.025;

  const bmi = weightKg / (heightM * heightM);
  return bmi;
}

module.exports = calculateBMI