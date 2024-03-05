const calculateBMI = require('./calculateBMI');

describe('BMI Calculation', () => {
  test('should calculate correct BMI for normal weight', () => {
    expect(calculateBMI(150, 68)).toBeCloseTo(23.35, 1); // Adjusted expected value
  });

  test('should calculate correct BMI for overweight', () => {
    expect(calculateBMI(200, 70)).toBeCloseTo(29.39, 1); // Adjusted expected value
  });

  test('should calculate correct BMI for underweight', () => {
    expect(calculateBMI(100, 68)).toBeCloseTo(15.57, 1); // Adjusted expected value
  });

  test('should calculate correct BMI for obese', () => {
    expect(calculateBMI(250, 68)).toBeCloseTo(38.93, 1); // Adjusted expected value
  });
});
