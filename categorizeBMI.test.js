const categorizeBMI = require('./categorizeBMI');

describe('BMI Categorization', () => {
  test('categorizes underweight correctly', () => {
    expect(categorizeBMI(17)).toBe('Underweight');
  });

  test('categorizes normal weight correctly', () => {
    expect(categorizeBMI(18.5)).toBe('Normal weight');
  });

  test('categorizes overweight correctly', () => {
    expect(categorizeBMI(27)).toBe('Overweight');
  });

  test('categorizes obese correctly', () => {
    expect(categorizeBMI(32)).toBe('Obese');
  });
});